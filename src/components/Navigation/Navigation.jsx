import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";
import Logo from "../../assets/images/LogoPrint.jpg";

const NavLinks = ({ onClick }) => {
  const setActiveClass = ({ isActive }) =>
    clsx(style.link, isActive && style.active);

  return (
    <div className={style.wrapper}>
      <img className={style.logo} src={Logo} alt="Company Logo" />
      <ul className={style.list}>
        <li>
          <NavLink to="/" className={setActiveClass} onClick={onClick}>
            На головну
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={setActiveClass} onClick={onClick}>
            Послуги
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={setActiveClass} onClick={onClick}>
            Додаткові послуги
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={setActiveClass} onClick={onClick}>
            Про компанію
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={setActiveClass} onClick={onClick}>
            Контакти
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
