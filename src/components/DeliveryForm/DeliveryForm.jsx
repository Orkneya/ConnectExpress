import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import emailjs from "emailjs-com";
import styles from "./DeliveryForm.module.css";

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const DeliveryForm = () => {
  const initialValues = {
    fromCountry: "",
    toCountry: "",
    weight: "",
    size: "",
    cargoType: "",
    name: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    fromCountry: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Только буквы")
      .required("Вкажіть країну відправлення"),
    toCountry: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Тільки букви")
      .required("Вкажіть країну відправлення"),
    weight: Yup.number()
      .typeError("Вага повинна бути числом")
      .positive("Вага повинна бути більше 0")
      .required("Вкажіть вагу"),
    size: Yup.string()
      .matches(
        /^\d+([x*])\d+\1\d+$/,
        "Розміри повинні бути в форматі ДxШxВ (см)"
      )
      .required("Вкажіть розміри"),
    cargoType: Yup.string().required("Вкажіть характер вантажу"),
    name: Yup.string().required("Вкажіть ім’я"),
    email: Yup.string().email("Невірний email").required("Обов’язкове поле"),
    phone: Yup.string()
      .matches(/^\+?\d{10,13}$/, "Телефон должен быть в формате +380501234567")
      .required("Вкажіть телефон"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const message = `
Новое замовлення доставки:
Від: ${values.fromCountry}
До: ${values.toCountry}
Вага: ${values.weight} кг
Розміри: ${values.size}
Характер вантажу: ${values.cargoType}
Ім'я: ${values.name}
Email: ${values.email}
Телефон: ${values.phone}
  `;

    console.log("BOT:", BOT_TOKEN);
    console.log("CHAT:", CHAT_ID);
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });
    alert("Дані успішно надіслані!");
    resetForm();
  };

  // const handleSubmit = (values, { resetForm }) => {
  //   emailjs
  //     .send(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       values,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       () => {
  //         alert("Дані успішно надіслані!");
  //         resetForm();
  //       },
  //       (error) => {
  //         alert("Помилка при відправленні: " + error.text);
  //       }
  //     );
  // };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Замовити доставку</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.grid}>
            <div>
              <Field name="fromCountry" placeholder="Країна відправлення" />
              <ErrorMessage
                name="fromCountry"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field name="toCountry" placeholder="Країна призначення" />
              <ErrorMessage
                name="toCountry"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field name="weight" placeholder="Вага (кг)" />
              <ErrorMessage
                name="weight"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field name="size" placeholder="Розміри (ДxШxВ, см)" />
              <ErrorMessage
                name="size"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field name="cargoType" placeholder="Характер вантажу" />
              <ErrorMessage
                name="cargoType"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field name="name" placeholder="Ваше ім’я" />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field name="email" placeholder="Email" />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field name="phone" placeholder="Телефон" />
              <ErrorMessage
                name="phone"
                component="div"
                className={styles.error}
              />
            </div>
          </div>

          <button type="submit" className={styles.button}>
            Відправити
          </button>
          <p className={styles.terms}>
            Натискаючи на кнопку, я погоджуюся на обробку персональних даних
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default DeliveryForm;
