import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Create a transporter using SMTP
    // For testing/development, you should use environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'danielgemechulawoffice@gmail.com', // Recipient for now
      subject: `[Website Consultation] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #1a365d; border-bottom: 2px solid #b7a67d; padding-bottom: 10px;">New Consultation Request</h2>
          <p style="margin-top: 20px;"><strong>Client Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Subject Matter:</strong> ${subject}</p>
          <div style="background-color: #f7fafc; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #718096; margin-top: 30px; text-align: center;">
            This message was sent from the Daniel Gemechu website contact form.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
