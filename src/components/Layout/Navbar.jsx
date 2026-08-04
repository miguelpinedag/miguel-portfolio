import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Ruta absoluta o relativa segura para el PDF
  const cvPath = `${import.meta.env.BASE_URL}cv/CV_Miguel_Pineda.pdf`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-4" onClick={closeMenu}>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-lg font-black text-slate-950 shadow-lg shadow-cyan-500/30">
            MP
          </div>
          <div>
            <h1 className="font-bold text-white leading-tight">
              Miguel Pineda
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Data Intelligence Consultant
            </p>
          </div>
        </a>

        {/* MENÚ ESCRITORIO */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 lg:flex"
        >
          <a
            href="#hero"
            className="text-slate-300 transition hover:text-cyan-400 font-medium"
          >
            Inicio
          </a>
          <a
            href="#about"
            className="text-slate-300 transition hover:text-cyan-400 font-medium"
          >
            Sobre mí
          </a>
          <a
            href="#experience"
            className="text-slate-300 transition hover:text-cyan-400 font-medium"
          >
            Experiencia
          </a>
          <a
            href="#projects"
            className="text-slate-300 transition hover:text-cyan-400 font-medium"
          >
            Casos de Éxito
          </a>
          <a
            href="#contact"
            className="text-slate-300 transition hover:text-cyan-400 font-medium"
          >
            Contacto
          </a>
        </nav>

        {/* BOTONES ACCIÓN & HAMBURGUESA */}
        <div className="flex items-center gap-3">
          {/* Botón Desktop */}
          <a
            href={cvPath}
            download="CV_Miguel_Pineda.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-400 active:scale-95 md:flex"
          >
            <Download size={18} />
            Descargar CV
          </a>

          {/* Botón Menú Móvil */}
          <button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-slate-800 focus:outline-none lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Menú móvil"
          className="border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-2xl lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="flex flex-col px-6 py-6 space-y-1">
            <a
              href="#hero"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-800/60 hover:text-cyan-400 text-base font-medium"
            >
              Inicio
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-800/60 hover:text-cyan-400 text-base font-medium"
            >
              Sobre mí
            </a>

            <a
              href="#experience"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-800/60 hover:text-cyan-400 text-base font-medium"
            >
              Experiencia
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-800/60 hover:text-cyan-400 text-base font-medium"
            >
              Casos de Éxito
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-slate-200 transition hover:bg-slate-800/60 hover:text-cyan-400 text-base font-medium"
            >
              Contacto
            </a>

            {/* Botón Descarga Móvil */}
            <div className="pt-4">
              <a
                href={cvPath}
                download="CV_Miguel_Pineda.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 active:scale-95 shadow-lg shadow-cyan-500/20"
              >
                <Download size={18} />
                Descargar CV
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
