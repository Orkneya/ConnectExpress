import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/HomePage/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage/ServicesPage.jsx";
import About from "./pages/About/About.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import AddServicesPage from "./pages/AddServicesPage/AddServicesPage.jsx";
import Air from "./components/services/Air.jsx";
import Auto from "./components/services/Auto.jsx";
import Courier from "./components/services/Courier.jsx";
import Sea from "./components/services/Sea.jsx";
import Train from "./components/services/Train.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/addservices" element={<AddServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/services/air" element={<Air />} />
        <Route path="/services/auto" element={<Auto />} />
        <Route path="/services/sea" element={<Sea />} />
        <Route path="/services/courier" element={<Courier />} />
        <Route path="/services/train" element={<Train />} />
      </Route>
    </Routes>
  );
}

export default App;
