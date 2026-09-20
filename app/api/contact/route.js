import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email/mailer';
import { buildContactEmailHtml } from '@/lib/email/templates/contact';

const EMAIL_FROM = process.env.SMTP_USER;
const EMAIL_TO = (process.env.CONTACT_RECIPIENT_EMAIL || '')
  .split(',')
  .map((e) => e.trim())
  .filter(Boolean)
  .join(', ');
const MAX_FILE_SIZE_MB = 10;

const FIELD_RULES = {
  name: { required: true, minLength: 2, maxLength: 100 },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone: { required: true, pattern: /^[+\d\s\-().]{7,20}$/ },
  subject: { required: false, maxLength: 150 },
  message: { required: false, maxLength: 5000 },
};

function validate(fields) {
  const errors = {};

  for (const [field, rules] of Object.entries(FIELD_RULES)) {
    const value = (fields[field] || '').trim();

    if (rules.required && !value) {
      errors[field] = `${capitalize(field)} is required`;
      continue;
    }
    if (value && rules.minLength && value.length < rules.minLength) {
      errors[field] = `${capitalize(field)} must be at least ${rules.minLength} characters`;
    }
    if (value && rules.maxLength && value.length > rules.maxLength) {
      errors[field] = `${capitalize(field)} must be under ${rules.maxLength} characters`;
    }
    if (value && rules.pattern && !rules.pattern.test(value)) {
      errors[field] = `${capitalize(field)} is not valid`;
    }
  }

  return errors;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    const fields = {
      name: formData.get('name') || '',
      email: formData.get('email') || '',
      phone: formData.get('phone') || '',
      subject: formData.get('subject') || '',
      message: formData.get('message') || '',
    };

    const errors = validate(fields);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 422 });
    }

    const attachments = [];
    const file = formData.get('plans');
    if (file && file.size > 0) {
      const maxBytes = MAX_FILE_SIZE_MB * 1024 * 1024;
      if (file.size > maxBytes) {
        return NextResponse.json(
          { success: false, errors: { plans: `File must be under ${MAX_FILE_SIZE_MB}MB` } },
          { status: 422 }
        );
      }
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({ filename: file.name, content: buffer });
    }

    const html = buildContactEmailHtml(fields);

    await sendEmail({
      from: `"Brix Estimation" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      replyTo: fields.email,
      subject: `New Quote Request — ${fields.subject || fields.name}`,
      html,
      text: `Name: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone}\nSubject: ${fields.subject}\n\n${fields.message}`,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact/route]', err);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
