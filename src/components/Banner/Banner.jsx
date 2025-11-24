import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <section className={styles.section}>
      <h1 translate="no" className={styles.title}>
        Services of your dreams
      </h1>
    </section>
  );
}
