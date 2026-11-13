import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function AppRouter() {
  return (
    <HashRouter>
      {" "}
      {/* <--- Envuélvelo aquí con HashRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Tus otras rutas aquí */}
      </Routes>
    </HashRouter>
  );
}
