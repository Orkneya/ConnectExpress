import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import emailjs from "emailjs-com";
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
    fromCountry: Yup.string().required("Вкажіть країну відправлення"),
    toCountry: Yup.string().required("Вкажіть країну призначення"),
    weight: Yup.number().required("Вкажіть вагу").positive(),
    size: Yup.string().required("Вкажіть розміри"),
    cargoType: Yup.string().required("Вкажіть характер вантажу"),
    name: Yup.string().required("Вкажіть ім’я"),
    email: Yup.string().email("Невірний email").required("Обов’язкове поле"),
    phone: Yup.string().required("Вкажіть телефон"),
  });

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
        // onSubmit={handleSubmit}
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
