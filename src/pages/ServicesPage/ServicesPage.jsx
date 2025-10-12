function ServicesPage() {
  return (
    // <div>
    //   <h1>Послуги</h1>
    //   <p>Оберіть потрібний тип перевезення з меню.</p>
    // </div>

    <section class="services-page">
      <div class="hero">
        <h1 class="hero-title">Послуги</h1>
      </div>

      <div class="services-grid">
        <a href="/service1" class="service-item">
          <img src="img/service1.jpg" alt="Послуга 1" />
        </a>
        <a href="/service2" class="service-item">
          <img src="img/service2.jpg" alt="Послуга 2" />
        </a>
        <a href="/service3" class="service-item">
          <img src="img/service3.jpg" alt="Послуга 3" />
        </a>
        <a href="/service4" class="service-item">
          <img src="img/service4.jpg" alt="Послуга 4" />
        </a>
        <a href="/service5" class="service-item">
          <img src="img/service5.jpg" alt="Послуга 5" />
        </a>
      </div>
    </section>
  );
}

export default ServicesPage;
