import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, subject, message } = body as {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
  };

  // Basic server-side validation
  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false, // STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subjectLabels: Record<string, string> = {
    medical_consultancy: "Medical Consultancy",
    equipment_supply: "Equipment Supply",
    general_supply: "General Supply",
    other: "General Inquiry",
  };

  const subjectLabel = subjectLabels[subject] ?? subject;

  try {
    await transporter.sendMail({
      from: `"Todi & Partners Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? "info@todiandpartners.com",
      replyTo: email,
      subject: `[Contact Form] ${subjectLabel} — ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subjectLabel}

Message:
${message}
      `.trim(),
      html: `
<div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9fc; border: 1px solid #c3c6d1; border-radius: 4px;">
  <h2 style="color: #001e40; font-family: 'Source Serif 4', Georgia, serif; margin: 0 0 24px;">New Contact Enquiry</h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px 0; color: #4e5f7a; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 120px;">Name</td>
      <td style="padding: 8px 0; color: #1a1c1e;">${firstName} ${lastName}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #4e5f7a; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Reply To</td>
      <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #001e40;">${email}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; color: #4e5f7a; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
      <td style="padding: 8px 0; color: #1a1c1e;">${subjectLabel}</td>
    </tr>
  </table>
  <hr style="border: none; border-top: 1px solid #c3c6d1; margin: 24px 0;" />
  <h3 style="color: #001e40; font-size: 14px; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</h3>
  <p style="color: #1a1c1e; line-height: 1.6; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
</div>
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form mail error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
