import { Award, Briefcase, Database, MonitorSmartphone } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 pt-35 pb-20"
    >
      {/* EFECTOS DE FONDO */}
      <div className="absolute -top-46 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      {/* CONTENIDO */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-8 lg:grid-cols-2">
        {/* PRESENTACIÓN */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Disponible para nuevas oportunidades
          </span>

          <h1 className="mt-3 text-2xl font-extrabold leading-tight text-white lg:text-5xl">
            Transformando datos en decisiones estratégicas.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 lg:text-lg">
            Analista de Datos especializado en Business Intelligence, Power BI,
            Python y SQL. Diseño soluciones analíticas que convierten
            información compleja en conocimiento para la toma de decisiones.
          </p>
        </div>

        {/* DASHBOARD VISUAL */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[0_0_70px_rgba(6,182,212,.12)]">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Executive Dashboard</p>
              <h3 className="text-xl font-bold text-white">
                Indicadores Clave
              </h3>
            </div>

            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400 font-medium">
              ● Online
            </span>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl bg-slate-800/70 p-3.5 border border-slate-700/50 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Registros Analizados</p>
                <h2 className="text-2xl font-bold text-white">40M+</h2>
              </div>
              <Database size={24} className="text-cyan-400" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-slate-800/70 p-3.5 border border-slate-700/50">
                <p className="text-xs text-slate-400">Experiencia</p>
                <h3 className="mt-1 text-xl font-bold text-cyan-400">
                  8+ Años
                </h3>
              </div>

              <div className="rounded-xl bg-slate-800/70 p-3.5 border border-slate-700/50">
                <p className="text-xs text-slate-400">Dashboards</p>
                <h3 className="mt-1 text-xl font-bold text-cyan-400">
                  20+ Creados
                </h3>
              </div>
            </div>

            <div className="rounded-xl bg-slate-800/70 p-3.5 border border-slate-700/50 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Proyectos Reales</p>
                <h3 className="text-lg font-bold text-white">
                  100% Finalizados
                </h3>
              </div>
              <Award size={20} className="text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
