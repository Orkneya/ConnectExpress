import styles from "./DocumentPage.module.css";

function DocumentsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Документи для заповнення</h1>
      <p className={styles.description}>
        Будь ласка, завантажте та заповніть документ, потім надішліть його нам.
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img
            src="/example.png"
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
            Открыть документ
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DocumentsPage;
