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
import Dangerous from "./components/addservices/Dangerous.jsx";
import Customs from "./components/services/Сustoms.jsx";
import Insurance from "./components/services/Insurance.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout isHome={true} />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/addservices" element={<AddServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Services */}
        <Route path="/services/air" element={<Air />} />
        <Route path="/services/auto" element={<Auto />} />
        <Route path="/services/sea" element={<Sea />} />
        <Route path="/services/courier" element={<Courier />} />

        {/* AddServices */}
        <Route path="/addservices/customs" element={<Customs />} />
        <Route path="/addservices/insurance" element={<Insurance />} />
        <Route path="/addservices/dangerous" element={<Dangerous />} />
      </Route>
    </Routes>
  );
}

export default App;
