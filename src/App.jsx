import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import ServicesPage from "./pages/ServicesPage/ServicesPage.jsx";
import About from "./pages/About/About.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
