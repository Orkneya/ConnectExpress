import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";
import Logo from "../../assets/images/LogoConnect.png";
import CloseIcon from "../../assets/icons/close.svg";
import BurgerIcon from "../../assets/icons/burger-regular.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const setActiveClass = ({ isActive }) =>
    clsx(style.link, isActive && style.active);

  const MenuLink = ({ to, children }) => (
    <NavLink to={to} className={setActiveClass} onClick={closeMenu}>
      {children}
    </NavLink>
  );

  return (
    <div className={style.wrapper}>
      <NavLink to="/" onClick={closeMenu}>
        <img className={style.logo} src={Logo} alt="Company Logo" />
      </NavLink>

      <button className={style.buttonMenuToggle} onClick={toggleMenu}>
        <img
          src={isOpen ? CloseIcon : BurgerIcon}
          alt={isOpen ? "Close menu" : "Open menu"}
        />
      </button>

      <ul className={clsx(style.list, isOpen && style.listOpen)}>
        <li className={style.hasSubmenu}>
          <MenuLink to="/services">Послуги</MenuLink>
          <ul className={style.submenu}>
            <li>
              <MenuLink to="/services/air">Авіаперевезення</MenuLink>
            </li>
            <li>
              <MenuLink to="/services/auto">Автоперевезення</MenuLink>
            </li>
            <li>
              <MenuLink to="/services/sea">Морські перевезення</MenuLink>
            </li>
            <li>
              <MenuLink to="/services/courier">Кур'єрські перевезення</MenuLink>
            </li>
          </ul>
        </li>

        <li className={style.hasSubmenu}>
          <MenuLink to="/addservices">Додаткові послуги</MenuLink>
          <ul className={style.submenu}>
            <li>
              <MenuLink to="/addservices/customs">
                Митно-брокерські послуги
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/addservices/insurance">
                Страхування вантажу
              </MenuLink>
            </li>
            <li>
              <MenuLink to="/addservices/dangerous">
                Небезпечні вантажі
              </MenuLink>
            </li>
          </ul>
        </li>

        <li>
          <MenuLink to="/about">Про компанію</MenuLink>
        </li>
        <li>
          <MenuLink to="/document">Документи</MenuLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
