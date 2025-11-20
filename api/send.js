import axios from "axios";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  const {
    fromCountry,
    toCountry,
    weight,
    size,
    cargoType,
    name,
    email,
    phone,
  } = req.body;

  const message = `
Нове замовлення доставки:
Від: ${fromCountry}
До: ${toCountry}
Вага: ${weight} кг
Розміри: ${size}
Тип вантажу: ${cargoType}
Ім'я: ${name}
Email: ${email}
Телефон: ${phone}
  `;

  try {
    // Telegram
    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      }
    );

    // e-mail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "Нове замовлення доставки",
      text: message,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Помилка:", error.response?.data || error.message);
    return res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
}
