export function buildContactEmailHtml({ name, email, phone, subject, message }) {
  const row = (label, value) =>
    value
      ? `<tr>
          <td style="padding:8px 12px;font-weight:600;color:#1A2540;white-space:nowrap;width:130px;border-bottom:1px solid #f0f0f0">${label}</td>
          <td style="padding:8px 12px;color:#374151;border-bottom:1px solid #f0f0f0">${value}</td>
        </tr>`
      : '';

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:'Segoe UI',Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:32px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08)">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1A2540 0%,#2C3F65 100%);padding:32px 36px;text-align:center">
            <div style="font-size:22px;font-weight:800;color:#FBB923;letter-spacing:1px;text-transform:uppercase">Brix Estimation</div>
            <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-top:4px">New Quote Request</div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 36px">
            <p style="margin:0 0 20px;font-size:15px;color:#374151">
              A new quote request has been submitted via the website contact form.
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;font-size:14px">
              ${row('Name', name)}
              ${row('Email', `<a href="mailto:${email}" style="color:#2C3F65">${email}</a>`)}
              ${row('Phone', phone)}
              ${row('Subject', subject)}
            </table>

            ${message ? `
            <div style="margin-top:20px">
              <div style="font-weight:600;font-size:13px;color:#1A2540;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px">Message</div>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap">${message}</div>
            </div>` : ''}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 36px;text-align:center;font-size:12px;color:#9ca3af">
            Brix Estimation &mdash; info@brixestimation.com &mdash; brixestimation.com
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
