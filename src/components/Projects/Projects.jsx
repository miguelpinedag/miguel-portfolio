import ProjectCard from "./ProjectCard";

import comisarias from "../../assets/images/comisarias.png";
import fondos from "../../assets/images/fondos.png";
import mapa from "../../assets/images/mapa-bogota.png";
import automatizacion from "../../assets/images/automatizacion.png";

const projects = [
  {
    title: "Dashboards de Inteligencia de Negocios",
    description:
      "Dashboards ejecutivos desarrollados para el seguimiento de indicadores, análisis de demanda y apoyo a la toma de decisiones mediante Power BI.",
    technologies: ["Power BI", "DAX", "Power Query", "SQL"],
    image: comisarias,
    url: "/proyectos/dashboard-uno",
  },
  {
    title: "Dashboard de Analítica Social y Demográfica",
    description:
      "Dashboards interactivos en Power BI para la visualización de indicadores sociodemográficos, tendencias y distribución territorial.",
    technologies: ["Power BI", "Power Query", "DAX"],
    image: fondos,
    url: "/proyectos/dashboard-dos",
  },
  {
    title: "Automatización de Procesos",
    description:
      "Scripts y flujos de trabajo para automatización, extracción y georreferenciación de datos espaciales, optimizando tiempos operativos.",
    technologies: [
      "Python",
      "Selenium",
      "Power Automate",
      "SharePoint",
      "GeoPandas",
      "Folium",
      "Pandas",
    ],
    image: automatizacion,
    url: "/proyectos/georreferenciacion",
  },
  {
    title: "Inteligencia Geoespacial para Negocios",
    description:
      "Soluciones geoespaciales que integran datos empresariales y territoriales para analizar cobertura, clientes y zonas de influencia.",
    technologies: ["Python", "GeoPandas", "Folium", "Pandas"],
    image: mapa,
    url: "/proyectos/mapa-bogota",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 pt-16 pb-4 px-4 flex flex-col justify-center items-center"
    >
      <div className="mx-auto max-w-7xl w-full">
        {/* Encabezado */}
        <div className="mb-3 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-400">
            PORTAFOLIO
          </p>
          <h2 className="mt-0.5 text-2xl font-extrabold text-white sm:text-3xl">
            Casos de Éxito
          </h2>
          <p className="mx-auto mt-1 max-w-2xl text-[11px] text-slate-400 leading-tight">
            Proyectos reales en BI, Python y analítica geoespacial. Datos e
            información adaptados para fines demostrativos.
          </p>
        </div>

        {/* Grid ajustado */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
