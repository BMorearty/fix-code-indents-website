import type { Actions } from './$types';
import { sendEmail } from '$lib/email';
import { fail } from '@sveltejs/kit';
import type { ServerLoad } from '@sveltejs/kit';
import { SUPPORT_EMAIL_NAME, SUPPORT_EMAIL_ADDRESS } from '$env/static/private';

const MAX_NAME = 50;
const MAX_EMAIL = 100;
const MAX_SUBJ = 150;
const MAX_BODY = 4000;

export const load: ServerLoad = () => {
  return {
    maxLength: {
      name: MAX_NAME,
      email: MAX_EMAIL,
      subject: MAX_SUBJ,
      body: MAX_BODY,
    },
  };
};

export const actions = {
  send: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const subject = data.get('subject');
    const body = data.get('body');
    const captcha = data.get('captcha');
    const entered = { name, email, subject, body, captcha };
    if (!captcha || (captcha as string) !== 'code') {
      return fail(400, { error: 'The captcha was wrong.', ...entered });
    }
    if (!name || !email || !subject || !body) {
      return fail(400, { error: 'Please specify name, email, subject, and body.', ...entered });
    }
    await sendEmail({
      fromEmail: (email as string).slice(0, MAX_EMAIL),
      fromName: 'Fix Code Indents Mailer',
      replyToEmail: (email as string).slice(0, MAX_EMAIL),
      replyToName: (name as string).slice(0, MAX_NAME),
      toEmail: SUPPORT_EMAIL_ADDRESS,
      toName: SUPPORT_EMAIL_NAME,
      subject: `Fix Code Indents feedback: ${subject.slice(0, MAX_SUBJ)}`,
      body: (body as string).slice(0, MAX_BODY),
    });
    return {
      success: 'Message sent successfully.',
    };
  },
} satisfies Actions;
