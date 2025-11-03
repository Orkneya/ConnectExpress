import style from "../ServicesPage/ServicesPage.module.css";
import { NavLink } from "react-router-dom";

import customsImg from "../../assets/images/Servises/Brok-car.webp";
import insuranceImg from "../../assets/images/Servises/Insurens.webp";
import dangerouseImg from "../../assets/images/Servises/Dangerous.webp";

function AddServicesPage() {
  return (
    <section className={style.servicesPage}>
      <div className={style.hero1}>
        <h1 className={style.heroTitle}>Додаткові послуги</h1>
      </div>

      <div className={style.servicesGridAdd}>
        <NavLink to="/addservices/customs" className={style.serviceItem}>
          <img src={customsImg} alt=" Митно-брокерські послуги" />
          <p className={style.serviceTitle}> Митно-брокерські послуги</p>
        </NavLink>

        <NavLink to="/addservices/insurance" className={style.serviceItem}>
          <img src={insuranceImg} alt="Страхування вантажу" />
          <p className={style.serviceTitle}>Страхування вантажу</p>
        </NavLink>

        <NavLink to="/addservices/dangerous" className={style.serviceItem}>
          <img src={dangerouseImg} alt="Небезпечні вантажі" />
          <p className={style.serviceTitle}>Небезпечні вантажі</p>
        </NavLink>
      </div>
    </section>
  );
}

export default AddServicesPage;
