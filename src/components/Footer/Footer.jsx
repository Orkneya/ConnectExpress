// import FooterNavigation from "./FooterNavigation.jsx";
// import IconFooterLogo from "../../assets/images/icons/logo.svg?react";
import Container from "../Container/Container.jsx";
import style from "./Footer.module.css";
import Logo from "../../assets/images/LogoPrint.png";
import Phone from "../../assets/icons/phone.svg";
import Email from "../../assets/icons/envelope.svg";

const Footer = () => {
  return (
    <footer className={style.footerSection}>
      <Container className={style.footerContainer}>
        <img className={style.logo} src={Logo} alt="Company Logo" />
        <div className={style.contacts}>
          <div className={style.contactItem}>
            <img className={style.icon} src={Phone} alt="Phone" />
            <p className={style.text}>+38 050 646 75 73</p>
          </div>
          <div className={style.contactItem}>
            <img className={style.icon} src={Email} alt="Email" />
            <p className={style.text}>connect_global@ukr.net</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
