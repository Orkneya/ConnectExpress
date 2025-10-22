import express from "express";
import cors from "cors";
import axios from "axios";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/send", async (req, res) => {
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
Новое замовлення доставки:
Від: ${fromCountry}
До: ${toCountry}
Вага: ${weight} кг
Розміри: ${size}
Характер вантажу: ${cargoType}
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

    //  e-mail
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: process.env.EMAIL_TO,
    //   subject: "Нове замовлення доставки",
    //   text: message,
    // });

    res.json({ success: true });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res
      .status(500)
      .json({ success: false, error: error.response?.data || error.message });
  }
  // catch (error) {
  //   console.error(error);
  //   res.status(500).json({ success: false, error: error.message });
  // }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
