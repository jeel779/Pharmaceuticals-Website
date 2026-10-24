import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message, product } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL || "info@kanishpharmaceuticals.com";

    // If SMTP credentials aren't configured in .env yet
    if (!gmailUser || !gmailPass) {
      console.warn("Gmail SMTP credentials missing in environment variables.");
      console.log("Contact submission details received:", { name, email, phone, subject, message, product });

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

    const emailSubject = subject
      ? subject
      : product
      ? `Product Inquiry: ${product} - from ${name}`
      : `New Inquiry from ${name} - KANISH PHARMACEUTICALS PVT LTD.`;

    const mailOptions = {
      from: `"${name}" <${gmailUser}>`,
      replyTo: email,
      to: recipientEmail,
      subject: emailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="background-color: #092b63; padding: 16px 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 0.5px;">KANISH PHARMACEUTICALS PVT LTD.</h2>
            <p style="color: #fbbf24; margin: 4px 0 0 0; font-size: 13px; font-weight: bold;">NEW PRODUCT ENQUIRY</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            ${
              product
                ? `<tr>
                    <td style="padding: 8px 12px; font-weight: bold; color: #475569; width: 140px; border-bottom: 1px solid #f1f5f9;">Product:</td>
                    <td style="padding: 8px 12px; color: #092b63; font-weight: bold; border-bottom: 1px solid #f1f5f9;">${product}</td>
                  </tr>`
                : ""
            }
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #f1f5f9;">Sender Name:</td>
              <td style="padding: 8px 12px; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #f1f5f9;">Email Address:</td>
              <td style="padding: 8px 12px; color: #1e293b; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #123f91; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #475569; border-bottom: 1px solid #f1f5f9;">Phone / WhatsApp:</td>
              <td style="padding: 8px 12px; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${phone || "Not provided"}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #092b63; border-radius: 6px; margin-top: 15px;">
            <h4 style="margin: 0 0 8px 0; color: #092b63; font-size: 14px;">Requirement / Message Details:</h4>
            <p style="white-space: pre-wrap; color: #334155; margin: 0; font-size: 14px; line-height: 1.5;">${message}</p>
          </div>

          <hr style="margin-top: 24px; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="font-size: 11px; color: #94a3b8; text-align: center; margin: 12px 0 0 0;">
            This email was sent from the KANISH PHARMACEUTICALS website product inquiry form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent to our team via Gmail successfully!",
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
