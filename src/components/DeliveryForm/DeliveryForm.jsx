// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import styles from "./DeliveryForm.module.css";

// const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
// const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

// const DeliveryForm = () => {
//   const initialValues = {
//     fromCountry: "",
//     toCountry: "",
//     weight: "",
//     size: "",
//     cargoType: "",
//     name: "",
//     email: "",
//     phone: "",
//   };

//   const validationSchema = Yup.object({
//     fromCountry: Yup.string()
//       .matches(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Только буквы")
//       .required("Вкажіть країну відправлення"),
//     toCountry: Yup.string()
//       .matches(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Тільки букви")
//       .required("Вкажіть країну відправлення"),
//     weight: Yup.number()
//       .typeError("Вага повинна бути числом")
//       .positive("Вага повинна бути більше 0")
//       .required("Вкажіть вагу"),
//     size: Yup.string()
//       .matches(
//         /^\d+([x*])\d+\1\d+$/,
//         "Розміри повинні бути в форматі Д*Ш*В (см)"
//       )
//       .required("Вкажіть розміри"),
//     cargoType: Yup.string().required("Вкажіть характер вантажу"),
//     name: Yup.string().required("Вкажіть ім’я"),
//     email: Yup.string().email("Невірний email").required("Обов’язкове поле"),
//     phone: Yup.string()
//       .matches(/^\+?\d{10,13}$/, "Телефон должен быть в формате +380501234567")
//       .required("Вкажіть телефон"),
//   });

//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/send", values);
//       if (res.data.success) {
//         alert("Дані успішно надіслані!");
//         resetForm();
//       } else {
//         alert("Помилка при відправленні: " + res.data.error);
//       }
//     } catch (err) {
//       alert("Помилка при відправленні: " + err.message);
//     }
//   };

//   return (
//     <div className={styles.formContainer}>
//       <h2 className={styles.title}>Замовити доставку</h2>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         <Form className={styles.form}>
//           <div className={styles.grid}>
//             <div>
//               <Field name="fromCountry" placeholder="Країна відправлення" />
//               <ErrorMessage
//                 name="fromCountry"
//                 component="div"
//                 className={styles.error}
//               />
//             </div>

//             <div>
//               <Field name="toCountry" placeholder="Країна призначення" />
//               <ErrorMessage
//                 name="toCountry"
//                 component="div"
//                 className={styles.error}
//               />
//             </div>

//             <div>
//               <Field name="weight" placeholder="Вага (кг)" />
//               <ErrorMessage
//                 name="weight"
//                 component="div"
//                 className={styles.error}
//               />
//             </div>

//             <div>
//               <Field name="size" placeholder="Розміри (Д*Ш*В, см)" />
//               <ErrorMessage
//                 name="size"
//                 component="div"
//                 className={styles.error}
//               />
//             </div>

//             <div>
//               <Field name="cargoType" placeholder="Характер вантажу" />
//               <ErrorMessage
//                 name="cargoType"
//                 component="div"
//                 className={styles.error}
//               />
//             </div>

//             <div>
//               <Field name="name" placeholder="Ваше ім’я" />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className={styles.error}
//               />
//             </div>

//             <div>
//               <Field name="email" placeholder="Email" />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className={styles.error}
//               />
//             </div>

//             <div>
//               <Field name="phone" placeholder="Телефон" />
//               <ErrorMessage
//                 name="phone"
//                 component="div"
//                 className={styles.error}
//               />
//             </div>
//           </div>

//           <button type="submit" className={styles.button}>
//             Відправити
//           </button>
//           <p className={styles.terms}>
//             Натискаючи на кнопку, я погоджуюся на обробку персональних даних
//           </p>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default DeliveryForm;

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
      .matches(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Только буквы")
      .required("Вкажіть країну відправлення"),
    toCountry: Yup.string()
      .matches(/^[A-Za-zА-Яа-яЁё\s-]+$/, "Тільки букви")
      .required("Вкажіть країну призначення"),
    weight: Yup.number()
      .typeError("Вага повинна бути числом")
      .positive("Вага повинна бути більше 0")
      .required("Вкажіть вагу"),
    size: Yup.string()
      .matches(
        /^\d+([x*])\d+\1\d+$/,
        "Розміри повинні бути в форматі Д*Ш*В (см)"
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
    try {
      const res = await axios.post("http://localhost:5000/api/send", values);
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
              <div key={key}>
                <Field name={key} placeholder={key} />
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
