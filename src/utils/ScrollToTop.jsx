import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Si la ruta trae un ancla (ej: /#projects), scroll a ese elemento
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si no trae ancla, ir al inicio de la página
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
