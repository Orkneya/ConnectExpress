import style from "./ServicesPage.module.css";
import { NavLink } from "react-router-dom";
import autoImg from "../../assets/images/Servises/Автоперевезення.jpg";

function ServicesPage() {
  return (
    <section className={style.servicesPage}>
      <div className={style.hero}>
        <h1 className={style.heroTitle}>Послуги</h1>
      </div>

      <div className={style.servicesGrid}>
        <NavLink to="/services/air" className={style.serviceItem}>
          <img src="img/service1.jpg" alt="Air" />
        </NavLink>

        <NavLink to="/services/auto" className={style.serviceItem}>
          <img src={autoImg} alt="Auto" />
        </NavLink>

        <NavLink to="/services/sea" className={style.serviceItem}>
          <img src="img/service3.jpg" alt="Sea" />
        </NavLink>

        <NavLink to="/services/courier" className={style.serviceItem}>
          <img src="img/service4.jpg" alt="Courier" />
        </NavLink>

        <NavLink to="/services/train" className={style.serviceItem}>
          <img src="img/service5.jpg" alt="Train" />
        </NavLink>
      </div>
    </section>
  );
}

export default ServicesPage;
