import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import AirIcon from "../../assets/images/Plane.png";
import AutoIcon from "../../assets/images/Ship.png";
import SeaIcon from "../../assets/images/Ship.png";
import CourierIcon from "../../assets/images/Ship.png";
import TrainIcon from "../../assets/images/Ship.png";
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
  { title: "Залізничні перевезення", icon: TrainIcon, link: "/services/train" },
];

const ServicesSlider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={24}
      navigation={true}
      slidesPerView={2}
      loop={true}
      breakpoints={{
        768: { slidesPerView: 3 },
        1440: { slidesPerView: 5 },
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
  );
};

export default ServicesSlider;
