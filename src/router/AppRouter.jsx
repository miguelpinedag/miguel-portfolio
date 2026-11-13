import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ScrollToTop from "../utils/ScrollToTop";

export default function AppRouter() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Agrega aquí tus otras rutas si las tienes */}
      </Routes>
    </HashRouter>
  );
}
