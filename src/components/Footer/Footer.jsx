// import Container from "../Container/Container.jsx";
// import style from "./Footer.module.css";
// import Logo from "../../assets/images/LogoPrint.png";
// import Phone from "../../assets/icons/phone.svg";
// import Email from "../../assets/icons/envelope.svg";

// const Footer = () => {
//   return (
//     <footer className={style.footerSection}>
//       <Container>
//         <div className={style.footerContainer}>
//           <img className={style.logo} src={Logo} alt="Company Logo" />
//           <div className={style.contacts}>
//             <div className={style.contactItem}>
//               <img className={style.icon} src={Phone} alt="Phone" />
//               <p className={style.text}>+38 050 646 75 73</p>
//             </div>
//             <div className={style.contactItem}>
//               <img className={style.icon} src={Email} alt="Email" />
//               <p className={style.text}>connect_global@ukr.net</p>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import Container from "../Container/Container.jsx";
import style from "./Footer.module.css";
import Logo from "../../assets/images/LogoPrint.png";
import Phone from "../../assets/icons/phone.svg";
import Email from "../../assets/icons/envelope.svg";

import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import LinkedInIcon from "../../assets/icons/linkedIn.svg";
import TelegramIcon from "../../assets/icons/telegram.svg";

const Footer = () => {
  return (
    <footer className={style.footerSection}>
      <Container>
        <div className={style.footerContainer}>
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
              href="https://instagram.com"
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
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={LinkedInIcon}
                className={style.socialIcon}
                alt="LinkedIn"
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
