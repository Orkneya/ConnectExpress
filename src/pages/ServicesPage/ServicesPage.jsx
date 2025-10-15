import style from "./ServicesPage.module.css";
import { NavLink } from "react-router-dom";
import aviaImg from "../../assets/images/Servises/Avia.webp";
import autoImg from "../../assets/images/Servises/Auto.webp";
import seaImg from "../../assets/images/Servises/Sea.webp";
import courierImg from "../../assets/images/Servises/Courier.webp";

function ServicesPage() {
  return (
    <section className={style.servicesPage}>
      <div className={style.hero}>
        <h1 className={style.heroTitle}>Послуги</h1>
      </div>

      <div className={style.servicesGrid}>
        <NavLink to="/services/air" className={style.serviceItem}>
          <img src={aviaImg} alt="Авіаперевезення" />
          <p className={style.serviceTitle}>Авіаперевезення</p>
        </NavLink>

        <NavLink to="/services/auto" className={style.serviceItem}>
          <img src={autoImg} alt="Автоперевезення" />
          <p className={style.serviceTitle}>Автоперевезення</p>
        </NavLink>

        <NavLink to="/services/sea" className={style.serviceItem}>
          <img src={seaImg} alt="Морські перевезення" />
          <p className={style.serviceTitle}>Морські перевезення</p>
        </NavLink>

        <NavLink to="/services/courier" className={style.serviceItem}>
          <img src={courierImg} alt="Кур'єрські перевезення" />
          <p className={style.serviceTitle}>Кур'єрські перевезення</p>
        </NavLink>
      </div>
    </section>
  );
}

export default ServicesPage;
