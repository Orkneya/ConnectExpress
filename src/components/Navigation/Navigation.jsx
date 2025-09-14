import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";
import Logo from "../../assets/images/LogoPrint.jpg";
import CloseIcon from "../../assets/icons/close.svg";
import BurgerIcon from "../../assets/icons/burger-regular.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const setActiveClass = ({ isActive }) =>
    clsx(style.link, isActive && style.active);

  return (
    <div className={style.wrapper}>
      <img className={style.logo} src={Logo} alt="Company Logo" />

      <button className={style.buttonMenuToggle} onClick={toggleMenu}>
        <img
          src={isOpen ? CloseIcon : BurgerIcon}
          alt={isOpen ? "Close menu" : "Open menu"}
        />
      </button>

      <ul
        className={clsx(style.list, isOpen && style.listOpen)}
        onClick={closeMenu}
      >
        <li>
          <NavLink to="/" className={setActiveClass}>
            На головну
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/services" className={setActiveClass}>
            Послуги
          </NavLink>
        </li> */}
        <li className={style.hasSubmenu}>
          <NavLink to="/services" className={setActiveClass}>
            Послуги
          </NavLink>
          <ul className={style.submenu}>
            <li>
              <NavLink to="/services/air" className={setActiveClass}>
                Авіаперевезення
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/auto" className={setActiveClass}>
                Автоперевезення
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/sea" className={setActiveClass}>
                Морські перевезення
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/courier" className={setActiveClass}>
                Кур'єрські перевезення
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/train" className={setActiveClass}>
                Залізничні перевезення
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/addservices" className={setActiveClass}>
            Додаткові послуги
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={setActiveClass}>
            Про компанію
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={setActiveClass}>
            Контакти
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
