import { Download, Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/60 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* ====================================================== */}
        {/* LOGO */}
        {/* ====================================================== */}

        <div className="flex items-center gap-4">

          <a
            href="#hero"
            className="flex items-center gap-4"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-lg font-black text-slate-950 shadow-lg shadow-cyan-500/30">

              MP

            </div>

            <div>

              <h1 className="font-bold text-white">

                Miguel Pineda

              </h1>

              <p className="text-sm text-slate-400">

                Data Intelligence Consultant

              </p>

            </div>

          </a>

        </div>

        {/* ====================================================== */}
        {/* MENÚ */}
        {/* ====================================================== */}

        <nav className="hidden items-center gap-10 lg:flex">

          <a
            href="#hero"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Inicio
          </a>

          <a
            href="#about"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Sobre mí
          </a>

          <a
            href="#experience"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Experiencia
          </a>

          <a
            href="#projects"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Casos de Éxito
          </a>

          <a
            href="#contact"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Contacto
          </a>

        </nav>

        {/* ====================================================== */}
        {/* BOTÓN CV */}
        {/* ====================================================== */}

        <div className="flex items-center gap-4">

          <a
            href="/cv/CV_Miguel_Pineda.pdf"
            download="CV_Miguel_Pineda.pdf"
            className="hidden items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 md:flex"
          >

            <Download size={18} />

            Descargar CV

          </a>

          {/* ====================================================== */}
          {/* MENÚ MÓVIL */}
          {/* ====================================================== */}

          <button className="text-white lg:hidden">

            <Menu size={28} />

          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;