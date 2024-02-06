import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Hardcoded email data
    const emails = [
      {
        id: 1,
        email: "vg7134@gmail.com"
      },
      {
        id: 2,
        email: "vaibhav_b200642ce@gmail.com"
      },
    ];

    // Loop through each email address and send an email
    const results = await Promise.all(emails.map(async (emailData) => {
      const { email, id } = emailData;
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email], // Send email to each email address
        subject: 'Hello world',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
      });

      return { id, email, data, error };
    }));

    // Handle errors and successes
    const errors = results.filter(result => result.error);
    const successes = results.filter(result => !result.error);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    res.status(200).json(successes);
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
