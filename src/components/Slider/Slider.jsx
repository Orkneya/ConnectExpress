import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import AirIcon from "../../assets/images/Plane.webp";
import AutoIcon from "../../assets/images/Truck.webp";
import SeaIcon from "../../assets/images/Ship.webp";
import CourierIcon from "../../assets/images/Box.webp";
import style from "./Slider.module.css";
import { Link } from "react-router-dom";

const services = [
  { title: "Авіаперевезення", icon: AirIcon, link: "/services/air" },
  { title: "Автоперевезення", icon: AutoIcon, link: "/services/auto" },
  { title: "Морські перевезення", icon: SeaIcon, link: "/services/sea" },
  {
    title: "Кур'єрські перевезення",
    icon: CourierIcon,
    link: "/services/courier",
  },
];

const ServicesSlider = () => {
  return (
    <div className={style.sliderWrapper}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={2}
        loop={true}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3, slidesPerGroup: 1 },
          1440: { slidesPerView: 4, slidesPerGroup: 1 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Link to={service.link} className={style.card}>
              <img
                src={service.icon}
                alt={service.title}
                className={style.icon}
              />
              <p className={style.title}>{service.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
