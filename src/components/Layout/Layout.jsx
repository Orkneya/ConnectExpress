import { Outlet } from "react-router-dom";
import Container from "../Container/Container.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import style from "./Layout.module.css";

const Layout = (isHome) => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={isHome ? style.mainHome : style.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
