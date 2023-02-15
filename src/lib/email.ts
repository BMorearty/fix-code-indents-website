import { dev } from '$app/environment';

/**
 * Sends an email using the MailChannels API
 *
 * https://github.com/bradymholt/sveltekit-auth-template/blob/cf8a988279ea787f595b250721c311f080266482/src/lib/email.ts
 */
export async function sendEmail(
  fromEmail: string,
  fromName: string,
  toEmail: string,
  toName: string,
  subject: string,
  body: string
) {
  const request = new Request('https://api.mailchannels.net/tx/v1/send', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: toEmail, name: toName }],
        },
      ],
      from: {
        email: fromEmail,
        name: fromEmail,
      },
      subject,
      content: [
        {
          type: 'text/plain',
          value: body,
        },
      ],
    }),
  });

  if (dev) {
    console.log(`Sending email:
  From: ${fromName} <${fromEmail}>
  To: ${toName} <${toEmail}>
  Subject: ${subject}
  Body:
    ${body.replaceAll('\n', '\n    ')}`);
  } else {
    const response = await fetch(request);
    if (response.status >= 400) {
      console.error(
        `Error sending email: ${response.status} ${response.statusText} ${await response.text()}`
      );
      return false;
    }
  }
  return true;
}
