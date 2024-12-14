import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Parsing request body
    const { name, phone } = await request.json();

    // Validate input
    if (!name || !phone) {
      return NextResponse.json(
        { message: "Відсутні необхідні дані" },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Або інший поштовий сервіс
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Нова заявка з форми",
      html: `
        <h2>Нова заявка</h2>
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Номер телефону:</strong> ${phone}</p>
        <p>Дата: ${new Date().toLocaleString()}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Заявка успішно надіслана" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Помилка надсилання електронної пошти:", error);
    return NextResponse.json(
      { message: "Помилка надсилання заявки" },
      { status: 500 }
    );
  }
}
