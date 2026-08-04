import {
  Brain,
  Database,
  GraduationCap,
  MapPinned,
  Workflow,
} from "lucide-react";

// Importa tu foto directamente desde assets (o ajusta la ruta si está en otro lado)
import fotoPerfil from "../../assets/foto_hoja_de_vida.png";

// =====================================================
// STACK TECNOLÓGICO
// =====================================================

const skills = [
  { name: "Power BI", value: 95 },
  { name: "Excel", value: 95 },
  { name: "Python", value: 90 },
  { name: "SQL", value: 90 },
  { name: "Power Query", value: 92 },
  { name: "DAX", value: 90 },
  { name: "GeoPandas", value: 82 },
  { name: "React", value: 70 },
];

// =====================================================
// ESPECIALIDADES
// =====================================================

const specialties = [
  {
    icon: Database,
    title: "Business Intelligence",
    description:
      "Dashboards ejecutivos e indicadores estratégicos para apoyar la toma de decisiones.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description:
      "Optimización de procesos con Python, Selenium, Power Automate, SharePoint, SQL y Power Query.",
  },
  {
    icon: MapPinned,
    title: "Analítica Geoespacial",
    description:
      "Análisis territorial y visualización espacial con herramientas GIS.",
  },
  {
    icon: Brain,
    title: "Data Analytics",
    description:
      "Transformación de datos en información útil para las organizaciones.",
  },
];

function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-slate-900 py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ENCABEZADO */}
        <div className="mb-5 text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Sobre <span className="text-cyan-400">Mí</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm font-medium tracking-wide text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Analista de Datos especializado en Business Intelligence,
            automatización de procesos y desarrollo de soluciones tecnológicas
            orientadas a la toma de decisiones.
          </p>
        </div>

        {/* PERFIL + CONTENIDO */}
        <div className="grid gap-5 lg:grid-cols-[290px_1fr] items-stretch">
          {/* TARJETA PERFIL */}
          <div className="h-full">
            <div className="h-full flex flex-col justify-between rounded-2xl border border-slate-700 bg-slate-950 p-4 shadow-xl">
              <div className="flex flex-col items-center">
                <img
                  src={fotoPerfil}
                  alt="Miguel Augusto Pineda"
                  className="h-28 w-28 rounded-full border-4 border-cyan-400 object-cover shadow-cyan-500/10 shadow-xl"
                  onError={(e) => {
                    // Fallback en caso de que la ruta assets falle y esté en public/
                    e.target.onerror = null;
                    e.target.src = "/foto_hoja_de_vida.png";
                  }}
                />

                <h3 className="mt-3 text-center text-lg font-bold text-white">
                  Miguel Augusto Pineda González
                </h3>
              </div>

              <div className="mt-4 rounded-xl border border-slate-700/80 bg-slate-900/90 p-3">
                <div className="flex items-start gap-2.5">
                  <GraduationCap
                    size={22}
                    className="text-cyan-400 shrink-0 mt-0.5"
                  />

                  <div className="space-y-0.5">
                    <h4 className="font-semibold text-white text-xs sm:text-sm">
                      Formación
                    </h4>

                    <p className="text-xs text-slate-300">
                      Magíster en Gerencia de Proyectos
                    </p>

                    <p className="text-xs text-slate-300">
                      Ingeniero Industrial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="flex flex-col justify-between gap-4">
            {/* ESPECIALIDADES */}
            <div className="grid gap-3 sm:grid-cols-2">
              {specialties.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-700/80 bg-slate-950 p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400 shadow-md"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
                        <Icon size={18} className="text-cyan-400" />
                      </div>

                      <h5 className="text-sm font-bold text-white">
                        {item.title}
                      </h5>
                    </div>

                    <p className="mt-2 text-xs leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* STACK TECNOLÓGICO */}
            <div className="rounded-xl border border-slate-700/80 bg-slate-950 p-4 shadow-md">
              <h4 className="mb-2 text-center text-sm font-bold text-white">
                Stack Tecnológico
              </h4>

              <div className="grid gap-x-5 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-200">
                        {skill.name}
                      </span>

                      <span className="font-semibold text-cyan-400">
                        {skill.value}%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{
                          width: `${skill.value}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
