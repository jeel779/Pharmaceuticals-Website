import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL || "info@priyanpharmaceuticals.com";

    // If SMTP credentials aren't configured in .env yet
    if (!gmailUser || !gmailPass) {
      console.warn("Gmail SMTP credentials missing in environment variables.");
      console.log("Contact submission details received:", { name, email, phone, subject, message });

      return NextResponse.json({
        success: true,
        demoMode: true,
        message: "Your message was received! (Configured in demo mode until GMAIL_APP_PASSWORD is set in .env)",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${gmailUser}>`,
      replyTo: email,
      to: [recipientEmail, "priyanpharmaceuticals@gmail.com"],
      subject: subject ? `Contact Form: ${subject}` : `New Inquiry from ${name} - Priyan Pharmaceuticals`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #092b63; border-bottom: 2px solid #3fa56b; padding-bottom: 10px; margin-top: 0;">New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #123f91; margin-top: 15px; border-radius: 4px;">
            <h4 style="margin-top: 0; color: #092b63;">Message Details:</h4>
            <p style="white-space: pre-wrap; color: #333; margin-bottom: 0;">${message}</p>
          </div>
          <hr style="margin-top: 20px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #888; text-align: center;">Sent from Priyan Pharmaceuticals Website Contact Form</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
