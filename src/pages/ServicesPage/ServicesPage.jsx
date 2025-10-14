import style from "./ServicesPage.module.css";
import { NavLink } from "react-router-dom";
import aviaImg from "../../assets/images/Servises/Avia.webp";
import autoImg from "../../assets/images/Servises/Auto.webp";
import seaImg from "../../assets/images/Servises/Sea.webp";
import courierImg from "../../assets/images/Servises/Courier.webp";
// import autoImg from "../../assets/images/Servises/Auto.webp";

function ServicesPage() {
  return (
    <section className={style.servicesPage}>
      <div className={style.hero}>
        <h1 className={style.heroTitle}>Послуги</h1>
      </div>

      <div className={style.servicesGrid}>
        <NavLink to="/services/air" className={style.serviceItem}>
          <img src={aviaImg} alt="Air" />
        </NavLink>

        <NavLink to="/services/auto" className={style.serviceItem}>
          <img src={autoImg} alt="Auto" />
        </NavLink>

        <NavLink to="/services/sea" className={style.serviceItem}>
          <img src={seaImg} alt="Sea" />
        </NavLink>

        <NavLink to="/services/courier" className={style.serviceItem}>
          <img src={courierImg} alt="Courier" />
        </NavLink>

        <NavLink to="/services/train" className={style.serviceItem}>
          <img src="img/service5.jpg" alt="Train" />
        </NavLink>
      </div>
    </section>
  );
}

export default ServicesPage;
