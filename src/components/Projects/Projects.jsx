import ProjectCard from "./ProjectCard";

import comisarias from "../../assets/images/comisarias.png";
import fondos from "../../assets/images/fondos.png";
import mapa from "../../assets/images/mapa-bogota.png";
import automatizacion from "../../assets/images/automatizacion.png";

const projects = [
  {
    title: "Dashboards de Inteligencia de Negocios",
    description:
      "Dashboards ejecutivos desarrollados, orientados al seguimiento de indicadores, análisis de demanda y apoyo a la toma de decisiones mediante Power BI.",
    technologies: [
      "Power BI",
      "DAX",
      "Power Query",
      "SQL"
    ],
    image: comisarias,
    url: "/proyectos/dashboard-uno"
  },

  {
    title: "Dashboard de Analítica Social y Demográfica",
    description:
      "Dashboards interactivos desarrollados en Power BI para el análisis y visualización de indicadores sociodemográficos, permitiendo explorar tendencias, distribución territorial y segmentación de poblaciones mediante herramientas de inteligencia de negocios.",
    technologies: [
      "Power BI",
      "Power Query",
      "DAX"
    ],
    image: fondos,
    url: "/proyectos/dashboard-dos"
  },

  {
    title: "Automatización de Procesos",
    description:
      "Scripts desarrollados en Python para limpiar, transformar y consolidar información de múltiples fuentes, optimizando tiempos y reduciendo procesos manuales. Desarrollo de procesos automatizados para la georreferenciación, validación y análisis espacial de grandes volúmenes de información mediante Python, GeoPandas y Folium.",
    technologies: [
      "Python",
      "GeoPandas",
      "Folium",
      "Pandas",
      "Shapely",
      "OpenPyXL"
    ],
    image: automatizacion,
    url:"/proyectos/georreferenciacion"
  },

  {
    title: "Inteligencia Geoespacial para Negocios",
    description:
      "Diseño de soluciones geoespaciales que integran información empresarial y territorial para analizar clientes, cobertura, activos, puntos de atención y zonas de influencia, transformando datos geográficos en información estratégica para la toma de decisiones.",
    technologies: [
      "Python",
      "GeoPandas",
      "Folium",
      "Pandas"
    ],
    image: mapa,
    url: "/proyectos/mapa-bogota"
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-cyan-400">
            PORTAFOLIO
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Casos de Éxito
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Proyectos reales desarrollados en Business Intelligence,
            Power BI, Python, SQL y analítica geoespacial. 
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Los proyectos presentados tienen fines demostrativos para el portafolio profesional. Los datos, nombres y cifras presentados han sido anonimizados o adaptados para evidenciar capacidades de análisis, modelado y visualización de datos. 
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;