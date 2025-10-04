// import { useNavigate } from "react-router-dom";
import styles from "./Banner.module.css";

export default function Banner() {
  // const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Services of your dreams</h1>
      {/* <button className={`button`} onClick={() => navigate("/services")}>
        View Now
      </button> */}
    </section>
  );
}
