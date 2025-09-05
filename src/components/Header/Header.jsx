import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>ConnerExpress</div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Services
        </NavLink>
      </nav>
    </header>
  );
}

// import Container from "../Container/Container.jsx";
// import Navigation from "../Navigation/Navigation.jsx";
// import style from "./Header.module.css";

// const Header = () => {

//   return (
//     <header className={style.header}>
//       <Container>
//         <Navigation />
//       </Container>
//     </header>
//   );
// };

// export default Header;
