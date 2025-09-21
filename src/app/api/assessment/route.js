// src/app/api/assessment/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name = "",
      email = "",
      phone = "",
      overallWellbeing,
      perDomain = [],
      consentShare = false,
      pageUrl = "",
    } = body || {};

    if (!consentShare) {
      return new Response(JSON.stringify({ ok: true, skipped: true }), { status: 200 });
    }

    // SMTP transport (same envs you already added for the contact form)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO || "info@ariseanew.co.za";
    const from = process.env.MAIL_FROM || "Arise Anew Website <info@ariseanew.co.za>";

    const subject = `Life Assessment taken${name ? ` — ${name}` : ""}`;
    const lines = [
      "A new Life Assessment was completed on the website.",
      "",
      name ? `Name: ${name}` : "Name: (not provided)",
      email ? `Email: ${email}` : "Email: (not provided)",
      phone ? `Phone: ${phone}` : "Phone: (not provided)",
      "",
      `Overall Wellbeing: ${overallWellbeing}%`,
      "",
      "Per-domain scores (Wellbeing %):",
      ...perDomain.map((d) => `- ${d.title}: ${d.wellbeing}%`),
      "",
      pageUrl ? `From: ${pageUrl}` : "",
      `Sent from ${process.env.SITE_NAME || "ariseanew.co.za"}`,
    ].filter(Boolean);

    const text = lines.join("\r\n");
    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#111">
        <h2 style="margin:0 0 8px 0;">New Life Assessment</h2>
        <p><strong>Name:</strong> ${name || "<em>not provided</em>"}</p>
        <p><strong>Email:</strong> ${email || "<em>not provided</em>"}</p>
        <p><strong>Phone:</strong> ${phone || "<em>not provided</em>"}</p>
        <p><strong>Overall Wellbeing:</strong> ${overallWellbeing}%</p>
        <h3 style="margin:16px 0 6px 0;">Per-domain scores (Wellbeing %)</h3>
        <ul>
          ${perDomain.map((d) => `<li><strong>${d.title}:</strong> ${d.wellbeing}%</li>`).join("")}
        </ul>
        ${pageUrl ? `<p style="color:#666">From: ${pageUrl}</p>` : ""}
        <hr style="border:none;border-top:1px solid #ddd;margin:16px 0"/>
        <p style="color:#666;margin:0;">Sent from ${process.env.SITE_NAME || "ariseanew.co.za"}</p>
      </div>
    `;

    await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      replyTo: email || undefined,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Assessment email error:", err);
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
  }
}
