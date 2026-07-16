import {
  Briefcase,
  CalendarDays,
  Database,
  MapPinned,
  Code2
} from "lucide-react";

import "./Experience.css";

function Experience() {

  const experiences = [
    {
      title: "Analista de Datos",
      company: "Secretaría Distrital de Integración Social (SDIS)",
      period: "2026",
      icon: <Database size={28} />,
      description:
        "Diseño y construcción de soluciones analíticas para la evaluación y seguimiento de servicios sociales mediante integración de datos, análisis estadístico y visualización estratégica.",
      skills: [
        "Power BI",
        "SQL Server",
        "Python",
        "Power Query",
        "Modelamiento de datos"
      ]
    },
    {
      title: "Analista BI y Visualización de Datos",
      company: "Proyectos de Inteligencia de Negocios",
      period: "2024 - 2026",
      icon: <MapPinned size={28} />,
      description:
        "Desarrollo de tableros de control, indicadores KPI y análisis espacial para apoyar la toma de decisiones basada en datos.",
      skills: [
        "Dashboards",
        "DAX",
        "ETL",
        "Georreferenciación",
        "Análisis de información"
      ]
    },
    {
      title: "Desarrollador de Soluciones Digitales",
      company: "Proyectos tecnológicos",
      period: "Experiencia complementaria",
      icon: <Code2 size={28} />,
      description:
        "Construcción de aplicaciones web orientadas a la gestión de información utilizando arquitecturas modernas y buenas prácticas de desarrollo.",
      skills: [
        "React",
        "Spring Boot",
        "Java",
        "MySQL",
        "APIs REST"
      ]
    }
  ];


  return (
    <section className="experience" id="experience">

      <div className="section-title">
        <h2>Experiencia Profesional</h2>
        <p>
          Proyectos y experiencias donde he aplicado datos,
          tecnología e inteligencia de negocio para generar valor.
        </p>
      </div>


      <div className="timeline">

        {experiences.map((item, index) => (

          <article 
            className="experience-card"
            key={index}
          >

            <div className="experience-icon">
              {item.icon}
            </div>


            <div className="experience-content">

              <h3>{item.title}</h3>

              <h4>
                <Briefcase size={16}/>
                {item.company}
              </h4>


              <span className="period">
                <CalendarDays size={16}/>
                {item.period}
              </span>


              <p>
                {item.description}
              </p>


              <div className="skills">

                {item.skills.map((skill, i)=>(
                  <span key={i}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Experience;