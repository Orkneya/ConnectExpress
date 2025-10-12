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
        <a href="/service1" className={style.serviceItem}>
          <img src="img/service1.jpg" alt="Послуга 1" />
        </a>
        <a href="/service2" className={style.serviceItem}>
          <img src="img/service2.jpg" alt="Послуга 2" />
        </a>
        <a href="/service3" className={style.serviceItem}>
          <img src="img/service3.jpg" alt="Послуга 3" />
        </a>
        <a href="/service4" className={style.serviceItem}>
          <img src="img/service4.jpg" alt="Послуга 4" />
        </a>
        <a href="/service5" className={style.serviceItem}>
          <img src="img/service5.jpg" alt="Послуга 5" />
        </a>
      </div>
    </section>
  );
}

export default ServicesPage;
