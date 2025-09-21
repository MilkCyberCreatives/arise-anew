// src/app/api/contact/route.js
import nodemailer from "nodemailer";

// -----------------------------
// Basic validators
// -----------------------------
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZA_PHONE_RE = /^(\+27|0)\s?\d{2}\s?\d{3}\s?\d{4}$/; // e.g. 065 933 1865 or +27 65 933 1865

function isValidEmail(email) {
  return EMAIL_RE.test((email ?? "").trim());
}
function isValidPhone(phone) {
  const p = (phone ?? "").trim();
  if (!p) return true; // phone is optional
  return ZA_PHONE_RE.test(p.replace(/\s+/g, " "));
}
function clean(input) {
  return (input ?? "").toString().trim();
}

// -----------------------------
// reCAPTCHA v3 verify
// -----------------------------
async function verifyRecaptcha(token, remoteIp) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    // If not configured, fail closed for security.
    return { ok: false, reason: "reCAPTCHA not configured" };
  }
  try {
    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token ?? "");
    if (remoteIp) params.append("remoteip", remoteIp);

    const resp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = await resp.json();

    const threshold = Number(process.env.RECAPTCHA_THRESHOLD ?? "0.5");
    const passed = !!data.success && (data.score ?? 0) >= threshold;

    return {
      ok: passed,
      score: data.score ?? 0,
      action: data.action,
      reason: passed ? "ok" : "score_below_threshold",
    };
  } catch (e) {
    return { ok: false, reason: "recaptcha_request_failed" };
  }
}

// -----------------------------
// POST handler
// -----------------------------
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone = "", message, website = "", recaptchaToken } = body || {};

    // Honeypot (bot trap)
    if (website) return new Response(JSON.stringify({ ok: true }), { status: 200 });

    // Trim / normalise
    const _name = clean(name);
    const _email = clean(email);
    const _phone = clean(phone);
    const _message = clean(message);

    // Server-side validation (robust)
    if (!_name || !_email || !_message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields." }), { status: 400 });
    }
    if (!isValidEmail(_email)) {
      return new Response(JSON.stringify({ ok: false, error: "Please enter a valid email address." }), { status: 400 });
    }
    if (!isValidPhone(_phone)) {
      return new Response(JSON.stringify({ ok: false, error: "Please enter a valid South African phone number (e.g. 065 933 1865)." }), { status: 400 });
    }
    if (_name.length > 100) {
      return new Response(JSON.stringify({ ok: false, error: "Name is too long." }), { status: 400 });
    }
    if (_message.length < 10) {
      return new Response(JSON.stringify({ ok: false, error: "Message is too short." }), { status: 400 });
    }
    if (_message.length > 2000) {
      return new Response(JSON.stringify({ ok: false, error: "Message is too long." }), { status: 400 });
    }

    // reCAPTCHA v3 verification
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const recaptcha = await verifyRecaptcha(recaptchaToken, ip);
    if (!recaptcha.ok) {
      return new Response(JSON.stringify({ ok: false, error: "reCAPTCHA verification failed." }), { status: 400 });
    }

    // SMTP transport (Vercel -> your cPanel mailbox SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,         // mail.ariseanew.co.za
      port: Number(process.env.SMTP_PORT), // 587
      secure: process.env.SMTP_SECURE === "true", // false for 587
      auth: {
        user: process.env.SMTP_USER,       // info@ariseanew.co.za
        pass: process.env.SMTP_PASS,       // mailbox password
      },
    });

    const to = process.env.CONTACT_TO || "info@ariseanew.co.za";
    const from = process.env.MAIL_FROM || "Arise Anew Website <info@ariseanew.co.za>";
    const subject = `New enquiry from ${_name}`;

    const text = `
New website enquiry

Name: ${_name}
Email: ${_email}
Phone: ${_phone || "-"}

Message:
${_message}

reCAPTCHA: score=${recaptcha.score ?? "n/a"}, action=${recaptcha.action ?? "n/a"}
Sent from ${process.env.SITE_NAME || "ariseanew.co.za"}
`.trim();

    const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#111">
    <h2 style="margin:0 0 8px 0;">New website enquiry</h2>
    <p><strong>Name:</strong> ${_name}</p>
    <p><strong>Email:</strong> ${_email}</p>
    <p><strong>Phone:</strong> ${_phone || "-"}</p>
    <p><strong>Message:</strong><br/>${_message.replace(/\n/g, "<br/>")}</p>
    <hr style="border:none;border-top:1px solid #ddd;margin:16px 0"/>
    <p style="color:#666;margin:0;">reCAPTCHA score: ${recaptcha.score ?? "n/a"}</p>
    <p style="color:#666;margin:0;">Sent from ${process.env.SITE_NAME || "ariseanew.co.za"}</p>
  </div>
`.trim();

    await transporter.sendMail({
      from,
      to,
      replyTo: _email,
      subject,
      text,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
  }
}
