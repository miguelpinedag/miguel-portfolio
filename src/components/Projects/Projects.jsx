import { motion } from "framer-motion";
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white px-6">
      <div className="mx-auto max-w-[1550px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-extrabold text-slate-900">
            Casos de Éxito
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-600 text-sm">
            Proyectos reales en BI, Python y analítica geoespacial.
          </p>
        </motion.div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
