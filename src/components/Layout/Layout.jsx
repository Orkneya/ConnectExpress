import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.main}>
        <Outlet /> {/* сюда будут рендериться все страницы */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
