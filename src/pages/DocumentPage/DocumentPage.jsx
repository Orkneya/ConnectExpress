import styles from "./DocumentPage.module.css";
import style from "../ServicesPage/ServicesPage.module.css";
import statementImage from "../../assets/images/Statement.webp";

function DocumentsPage() {
  return (
    <section className={styles.documentPage}>
      <div className={style.hero2}>
        <h1 className={style.heroTitle}>Документи</h1>
      </div>
      <h3 className={styles.description}>
        Будь ласка, завантажте та заповніть документ, потім надішліть його нам.
      </h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img
            src={statementImage}
            alt="Образец документа"
            style={{ maxWidth: "100%" }}
          />
          <a
            href="/documents/example.docx"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {" "}
            Завантажити документ
          </a>
        </li>
      </ul>
    </section>
  );
}

export default DocumentsPage;
