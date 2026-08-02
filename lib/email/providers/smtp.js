import nodemailer from 'nodemailer';

export function createSmtpProvider(config) {
  const transportConfig = {
    host: config.host,
    port: Number(config.port),
    secure: config.secure === true || config.secure === 'true',
    auth: {
      type: 'LOGIN',
      user: config.user,
      pass: config.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
    family: 4,
  };

  const transporter = nodemailer.createTransport(transportConfig);

  return {
    name: 'smtp',
    async send({ to, from, replyTo, subject, html, text, attachments }) {
      await transporter.sendMail({ to, from, replyTo, subject, html, text, attachments });
    },
  };
}
