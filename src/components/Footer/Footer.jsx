// import FooterNavigation from "./FooterNavigation.jsx";
// import IconFooterLogo from "../../assets/images/icons/logo.svg?react";
import Container from "../Container/Container.jsx";
import style from "./Footer.module.css";
import Logo from "../../assets/images/LogoPrint.jpg";
// import CustomerRightsInfo from "./CustomerRightsInfo.jsx";
// import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footerSection}>
      <Container className={style.footerContainer}>
        <img className={style.logo} src={Logo} alt="Company Logo" />
        {/* <NavLink to="/">
          <IconFooterLogo className={css.logo} />
        </NavLink> */}
        {/* <CustomerRightsInfo /> */}
        {/* <FooterNavigation /> */}
      </Container>
    </footer>
  );
};

export default Footer;
