import type { Actions } from './$types';
import { sendEmail } from '$lib/email';
import { fail } from '@sveltejs/kit';
import type { ServerLoad } from '@sveltejs/kit';
import { SUPPORT_EMAIL_NAME, SUPPORT_EMAIL_ADDRESS } from '$env/static/private';

export const load: ServerLoad = () => {
  return {
    maxLength: {
      name: 50,
      email: 100,
      subject: 150,
      body: 4000,
    },
  };
};

export const actions = {
  send: async ({ request }) => {
    const data = await request.formData();
    const fromName = data.get('name');
    const fromEmail = data.get('email');
    const subject = data.get('subject');
    const body = data.get('body');
    if (!fromName || !fromEmail || !subject || !body) {
      return fail(400, { error: 'Please specify name, email, subject, and body.' });
    }
    await sendEmail(
      fromEmail as string,
      fromName as string,
      SUPPORT_EMAIL_ADDRESS,
      SUPPORT_EMAIL_NAME,
      subject as string,
      body as string
    );
    return {
      success: 'Message sent successfully.',
    };
  },
} satisfies Actions;
