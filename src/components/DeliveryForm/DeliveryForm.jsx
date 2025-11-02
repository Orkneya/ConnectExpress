import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./DeliveryForm.module.css";

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
      .matches(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Тільки літери")
      .required("Вкажіть країну відправлення"),
    toCountry: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Тільки літери")
      .required("Вкажіть країну призначення"),
    weight: Yup.number()
      .typeError("Вага повинна бути числом")
      .positive("Вага повинна бути більше 0")
      .required("Вкажіть вагу"),
    size: Yup.string()
      .matches(
        /^\d+[x*×]\d+[x*×]\d+$/,
        "Розміри повинні бути в форматі Д*Ш*В (см), допустимі роздільники: x, *, ×"
      )
      .required("Вкажіть розміри"),
    cargoType: Yup.string().required("Вкажіть характер вантажу"),
    name: Yup.string().required("Вкажіть ім’я"),
    email: Yup.string().email("Невірний email").required("Обов’язкове поле"),
    phone: Yup.string()
      .matches(/^\+?\d{10,13}$/, "Телефон повинен бути в форматі +380501234567")
      .required("Вкажіть телефон"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.post("/api/send", values);
      if (res.data.success) {
        alert("Дані успішно надіслані!");
        resetForm();
      } else {
        alert("Помилка при відправленні: " + res.data.error);
      }
    } catch (err) {
      alert("Помилка при відправленні: " + err.message);
    }
  };

  const placeholders = {
    fromCountry: "Країна відправлення",
    toCountry: "Країна призначення",
    weight: "Вага (кг)",
    size: "Розміри (Д×Ш×В, см)",
    cargoType: "Характер вантажу",
    name: "Ваше ім’я",
    email: "Email",
    phone: "Телефон",
  };

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
            {Object.keys(initialValues).map((key) => (
              <div key={key} className={styles.fieldWrapper}>
                <Field
                  name={key}
                  placeholder={placeholders[key]} // 👈 Підставляємо українські тексти
                  className={styles.input}
                />
                <ErrorMessage
                  name={key}
                  component="div"
                  className={styles.error}
                />
              </div>
            ))}
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
