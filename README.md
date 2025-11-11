# ConnectExpress

A React + Vite application designed to send form submissions directly to **email** and **Telegram** using secure environment variables. The project includes a clean UI, fast development environment, and integration with serverless form handling.

---

## 🚀 Features

- Built with **React + Vite** for fast performance and HMR
- Form submission with delivery to **Email**
- Instant notifications to **Telegram ChatBot**
- **Environment variables** configured through **Vercel** (версия/Versailles)
- Modular project architecture
- Client-side validation
- Easy deployment

---

## 📦 Installation

```bash
git clone https://github.com/Orkneya/ConnectExpress.git
cd ConnectExpress
npm install
```

---

## 🛠️ Environment Variables (Vercel)

To send form data to Email and Telegram, the project uses environment variables stored in
**Vercel → Project Settings → Environment Variables**.

### Required variables

```
EMAIL_TO=recipient_email_address
EMAIL_USER=your_email_login
EMAIL_PASS=your_email_password_or_app_password
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

---

## ▶️ Running the Project Locally

```bash
npm run dev
```

Open the development server at:

```
http://localhost:5173
```

---

## 🧪 Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
api/
public/
src/
  assets/
  components/
  pages/
```

---

## 🌐 Deployment

The project is designed for deployment on **Vercel**.

Make sure to:

- Add environment variables in Vercel
- Re-deploy after updating variables

Your production build will be live immediately after deployment.

---

## 📄 License

MIT License.

---

## ✅ Notes

For sending the form to **email** and **Telegram**, environment variables stored in **Vercel** were used. This keeps sensitive data secure and hidden from the public repository.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
