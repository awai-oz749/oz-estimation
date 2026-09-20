/**
 * Run: node scripts/test-smtp.mjs
 * Tests SMTP connection and sends a test email.
 * Requires .env to exist with SMTP_* variables.
 */

import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Load .env manually (no dotenv dependency needed)
try {
  const env = readFileSync(resolve(process.cwd(), '.env'), 'utf8');
  for (const line of env.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
} catch {
  console.error('❌ Could not read .env file. Make sure it exists.');
  process.exit(1);
}

const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_RECIPIENT_EMAIL } = process.env;

console.log('\n📋 SMTP Config:');
console.log('  Host    :', SMTP_HOST);
console.log('  Port    :', SMTP_PORT);
console.log('  Secure  :', SMTP_SECURE);
console.log('  User    :', SMTP_USER);
console.log('  Pass    :', SMTP_PASS ? '***' + SMTP_PASS.slice(-3) : '(not set)');
console.log('  To      :', CONTACT_RECIPIENT_EMAIL);
console.log('');

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_SECURE === 'true',
  auth: {
    type: 'LOGIN',
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
  family: 4,
});

console.log('🔌 Verifying connection...');
try {
  await transporter.verify();
  console.log('✅ Connection verified!\n');
} catch (err) {
  console.error('❌ Connection failed:', err.message);
  console.error('   Code:', err.code);
  console.error('\n💡 Try:');
  console.error('   - Double-check SMTP_PASS in .env');
  console.error('   - Try SMTP_PORT=587 + SMTP_SECURE=false (STARTTLS)');
  console.error('   - Ensure the email account exists in Hostinger panel');
  process.exit(1);
}

console.log('📨 Sending test email...');
try {
  const info = await transporter.sendMail({
    from: `"Brix Estimation Test" <${SMTP_USER}>`,
    to: CONTACT_RECIPIENT_EMAIL,
    subject: 'SMTP Test — Brix Estimation',
    text: 'If you received this, SMTP is working correctly.',
    html: '<p>If you received this, <strong>SMTP is working correctly</strong>.</p>',
  });
  console.log('✅ Email sent! Message ID:', info.messageId);
} catch (err) {
  console.error('❌ Send failed:', err.message);
  process.exit(1);
}
