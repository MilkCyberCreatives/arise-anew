<?php
// contact-send.php
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false,'error'=>'Method not allowed']); exit; }

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) { $data = $_POST; }

$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$phone   = trim($data['phone'] ?? '');
$message = trim($data['message'] ?? '');
$website = trim($data['website'] ?? ''); // honeypot

// Honeypot
if (!empty($website)) { echo json_encode(['ok'=>true]); exit; }

// Validate
if ($name === '' || $email === '' || $message === '') { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Missing fields']); exit; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { http_response_code(400); echo json_encode(['ok'=>false,'error'=>'Invalid email']); exit; }

$site     = 'ariseanew.co.za';
$to       = 'info@ariseanew.co.za';
$from     = 'info@ariseanew.co.za'; // must be your domain to avoid SPF issues
$subject  = "New enquiry from {$name}";
$headers  = [];
$headers[] = "From: Arise Anew Website <{$from}>";
$headers[] = "Reply-To: {$name} <{$email}>";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

// Admin email body
$adminBody = implode("\r\n", [
  "New website enquiry",
  "",
  "Name: {$name}",
  "Email: {$email}",
  "Phone: " . ($phone !== '' ? $phone : '-'),
  "",
  "Message:",
  $message,
  "",
  "Sent from {$site}",
]);

// Send to admin
$okAdmin = @mail($to, $subject, $adminBody, implode("\r\n", $headers));

// Optional: auto-reply to sender
$autoSubject = "We’ve received your message — Arise Anew Wellness Group";
$autoBody = implode("\r\n", [
  "Hi {$name},",
  "",
  "Thank you for contacting Arise Anew Wellness Group. We’ve received your message and will respond within 24 hours.",
  "",
  "Summary of your message:",
  $message,
  "",
  "If your enquiry is urgent, please call: +27 65 933 1865",
  "",
  "Kind regards,",
  "Arise Anew Wellness Group",
  "44 Richards Drive, Leogem Business Park, Midrand, 1682",
  "info@ariseanew.co.za | ariseanew.co.za",
]);
$autoHeaders = [];
$autoHeaders[] = "From: Arise Anew Wellness Group <{$from}>";
$autoHeaders[] = "MIME-Version: 1.0";
$autoHeaders[] = "Content-Type: text/plain; charset=UTF-8";

$okAuto = @mail($email, $autoSubject, $autoBody, implode("\r\n", $autoHeaders));

// Response (don’t fail the whole request if auto-reply fails)
if ($okAdmin) {
  echo json_encode(['ok' => true, 'auto' => $okAuto ? 'sent' : 'skipped']);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Mail failed on server']);
}
