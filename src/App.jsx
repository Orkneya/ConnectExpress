import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Loader from "./components/Loader/Loader.jsx";

const Home = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const ServicesPage = lazy(() =>
  import("./pages/ServicesPage/ServicesPage.jsx")
);
const About = lazy(() => import("./pages/About/About.jsx"));
import DocumentPage from "./pages/DocumentPage/DocumentPage.jsx";
const AddServicesPage = lazy(() =>
  import("./pages/AddServicesPage/AddServicesPage.jsx")
);

const DeliveryPage = lazy(() =>
  import("./components/DeliveryForm/DeliveryForm.jsx")
);

const Air = lazy(() => import("./components/services/Air.jsx"));
const Auto = lazy(() => import("./components/services/Auto.jsx"));
const Courier = lazy(() => import("./components/services/Courier.jsx"));
const Sea = lazy(() => import("./components/services/Sea.jsx"));
const Dangerous = lazy(() => import("./components/addservices/Dangerous.jsx"));
const Customs = lazy(() => import("./components/services/Сustoms.jsx"));
const Insurance = lazy(() => import("./components/services/Insurance.jsx"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout isHome={true} />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/addservices" element={<AddServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/document" element={<DocumentPage />} />

            <Route path="/delivery" element={<DeliveryPage />} />

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
      </Suspense>
    </>
  );
}

export default App;
