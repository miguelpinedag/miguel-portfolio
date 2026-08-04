import { Link } from "react-router-dom";
import { useEffect } from "react";

function DashboardDos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen bg-slate-950 flex flex-col">
      {/* Encabezado */}
      <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-8 py-5">
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs font-semibold">
            Business Intelligence
          </p>

          <h1 className="text-3xl font-bold text-white">Dashboard Analítico</h1>
        </div>

        <Link
          to="/#projects"
          className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
        >
          ← Volver al Portafolio
        </Link>
      </header>

      {/* Dashboard */}

      <iframe
        title="Dashboard Analítico"
        src="https://app.powerbi.com/view?r=eyJrIjoiNWY3MzJmNTktMGZjOC00Y2M5LWI5OTktMDgyMTNjZTU4MDM4IiwidCI6ImIzZTMwODA4LWU5YTgtNGYyYS05YmMxLWE3NjBhZTkxMGNmNSIsImMiOjR9"
        className="flex-1 w-full border-0"
        allowFullScreen
      />
    </div>
  );
}

export default DashboardDos;
