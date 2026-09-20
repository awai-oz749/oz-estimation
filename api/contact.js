const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email and phone are required' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const clean = (v, max = 2000) => String(v || '').slice(0, max).trim();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Brix Estimation Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: clean(email, 200),
      subject: `New Quote Request: ${clean(subject, 150) || 'General Inquiry'} — ${clean(name, 100)}`,
      text: [
        `Name: ${clean(name, 100)}`,
        `Email: ${clean(email, 200)}`,
        `Phone: ${clean(phone, 50)}`,
        `Subject: ${clean(subject, 150) || '-'}`,
        '',
        'Message:',
        clean(message) || '-',
      ].join('\n'),
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Mail send failed:', err.message);
    return res.status(500).json({ error: 'Failed to send message' });
  }
};
