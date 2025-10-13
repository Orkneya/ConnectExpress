import style from "./ServicesPage.module.css";
function ServicesPage() {
  return (
    // <div>
    //   <h1>Послуги</h1>
    //   <p>Оберіть потрібний тип перевезення з меню.</p>
    // </div>

    <section className={style.servicesPage}>
      <div className={style.hero}>
        <h1 className={style.heroTitle}>Послуги</h1>
      </div>

      <div className={style.servicesGrid}>
        <a href="/services/air" className={style.serviceItem}>
          <img src="img/service1.jpg" alt="Air" />
        </a>
        <a href="/services/auto" className={style.serviceItem}>
          <img src="img/service2.jpg" alt="Auto" />
        </a>
        <a href="/services/sea" className={style.serviceItem}>
          <img src="img/service3.jpg" alt="Sea" />
        </a>
        <a href="/services/courier" className={style.serviceItem}>
          <img src="img/service4.jpg" alt="Courier" />
        </a>
        <a href="/services/train" className={style.serviceItem}>
          <img src="img/service5.jpg" alt="Train" />
        </a>
      </div>
    </section>
  );
}

export default ServicesPage;
