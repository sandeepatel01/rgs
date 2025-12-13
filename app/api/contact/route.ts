import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"RG Solars Website" <info@rgsolars.in>`,
      to: "info@rgsolars.in",
      replyTo: email || undefined,
      subject: "New Contact Form Submission - RG Solars",
      html: `
        <h2>New Contact Form Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email || "Not Provided"}</p>
        <p><b>Message:</b> ${message || "Not Provided"}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Contact Email Error:", error);
    return NextResponse.json(
      { success: false, message: "Email sending failed" },
      { status: 500 }
    );
  }
}
