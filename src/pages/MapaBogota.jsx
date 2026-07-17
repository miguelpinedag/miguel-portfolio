import { Link } from "react-router-dom";

function MapaBogota() {
  return (
    <div className="h-screen bg-slate-950 flex flex-col">

      {/* Barra superior */}
      <header className="flex items-center justify-between border-b border-slate-800 px-8 py-5 bg-slate-950 z-50">

        <div>

          <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs font-semibold">
            Proyecto Python • GeoPandas • Folium
          </p>

          <h1 className="text-3xl font-bold text-white">
            Mapa Inteligente de Bogotá
          </h1>

        </div>

        <Link
          to="/"
          className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
        >
          ← Volver al Portafolio
        </Link>

      </header>

      {/* Mapa */}

      <iframe
      title="Mapa Bogotá"
      src={`${import.meta.env.BASE_URL}proyectos/mapa/mapa_violencia_ph_bogota.html`}
      className="flex-1 w-full border-0"
      />

    </div>
  );
}

export default MapaBogota;