import Container from "../Container/Container.jsx";
import style from "./Footer.module.css";
import Logo from "../../assets/images/LogoConnect.png";
import Phone from "../../assets/icons/phone.svg";
import Email from "../../assets/icons/envelope.svg";

import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TelegramIcon from "../../assets/icons/telegram.svg";

const Footer = () => {
  return (
    <footer className={style.footerSection}>
      <Container>
        <div className={style.footerContainer}>
          <img className={style.logo} src={Logo} alt="Company Logo" />

          <div className={style.contacts}>
            <a className={style.contactItem} href="tel:+380506467573">
              <img className={style.icon} src={Phone} alt="Phone" />
              <span className={style.text}>+38 050 157 60 15</span>
            </a>
            <a
              className={style.contactItem}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=connect_global@ukr.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={style.icon} src={Email} alt="Email" />
              <span className={style.text}>office@connect-express.com.ua</span>
            </a>
          </div>

          <div className={style.socials}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <img
                src={FacebookIcon}
                className={style.socialIcon}
                alt="Facebook"
              />
            </a>
            <a
              href="https://www.instagram.com/connectexpressandglobal?utm_source=qr&igsh=MXFrM2I4bHJ3ZmFvYg=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img
                src={InstagramIcon}
                className={style.socialIcon}
                alt="Instagram"
              />
            </a>
            <a
              href="https://t.me/username"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <img
                src={TelegramIcon}
                className={style.socialIcon}
                alt="Telegram"
              />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
