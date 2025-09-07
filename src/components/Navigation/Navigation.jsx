import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./Navigation.module.css";

const NavLinks = ({ onClick }) => {
  const setActiveClass = ({ isActive }) =>
    clsx(style.link, isActive && style.active);

  return (
    <div className={style.wrapper}>
      <div className={style.logo}>ConnerExpress</div>
      <ul className={style.list}>
        <li>
          <NavLink to="/" className={setActiveClass} onClick={onClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={setActiveClass} onClick={onClick}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={setActiveClass} onClick={onClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={setActiveClass} onClick={onClick}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
