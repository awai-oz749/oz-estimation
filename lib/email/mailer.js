/**
 * Email mailer — provider connector.
 *
 * To add a new provider:
 *   1. Create lib/email/providers/<name>.js exporting createXxxProvider(config)
 *   2. Import it below and add a case to getProvider()
 *   3. Set EMAIL_PROVIDER=<name> in .env
 *
 * To switch providers: change EMAIL_PROVIDER in .env. No code changes needed.
 */

import { createSmtpProvider } from './providers/smtp.js';

function getProvider() {
  const name = process.env.EMAIL_PROVIDER || 'smtp';

  switch (name) {
    case 'smtp':
      return createSmtpProvider({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 465,
        secure: process.env.SMTP_SECURE,
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      });

    // Add future providers here:
    // case 'sendgrid':
    //   return createSendGridProvider({ apiKey: process.env.SENDGRID_API_KEY });
    // case 'resend':
    //   return createResendProvider({ apiKey: process.env.RESEND_API_KEY });

    default:
      throw new Error(`Unknown email provider: "${name}". Check EMAIL_PROVIDER in .env`);
  }
}

export async function sendEmail(options) {
  const provider = getProvider();
  return provider.send(options);
}
