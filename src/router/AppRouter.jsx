import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MapaBogota from "../pages/MapaBogota";
import DashboardUno from "../pages/DashboardUno";
import DashboardDos from "../pages/DashboardDos";
import Georreferenciacion from "../pages/Georreferenciacion";

function AppRouter() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/proyectos/mapa-bogota"
        element={<MapaBogota />}
      />
      <Route
        path="/proyectos/dashboard-uno"
        element={<DashboardUno />}
      />
      <Route
        path="/proyectos/dashboard-dos"
        element={<DashboardDos />}
      />

       <Route
        path="/proyectos/georreferenciacion"
        element={<Georreferenciacion />}
      />
    
    </Routes>

  );

}

export default AppRouter;