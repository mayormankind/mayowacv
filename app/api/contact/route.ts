import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, projectType, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      family: 4,
    } as nodemailer.TransportOptions);

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Portfolio Inquiry: ${projectType || "General"} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #de1b1b; border-bottom: 1px solid #eee; padding-bottom: 12px;">New Portfolio Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;"><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Project Type</strong></td><td>${projectType || "Not specified"}</td></tr>
          </table>
          <hr style="margin: 20px 0;" />
          <h3 style="color: #333;">Message</h3>
          <p style="line-height: 1.8; color: #555;">${message.replace(/\n/g, "<br>")}</p>
          <hr style="margin: 20px 0;" />
          <p style="font-size: 12px; color: #aaa;">Sent via mayowadevv.vercel.app portfolio contact form</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return Response.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
