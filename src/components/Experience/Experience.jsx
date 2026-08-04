import {
  Briefcase,
  CalendarDays,
  Database,
  MapPinned,
  Code2,
} from "lucide-react";

import "./Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Analista de Datos",
      company: "Secretaría Distrital de Integración Social · DASC",
      period: "2025 – 2026",
      icon: <Database size={30} />,
      description:
        "Desarrollo de soluciones de Business Intelligence, automatización con Python, SQL Server y Power BI para fortalecer la toma de decisiones mediante integración, análisis y visualización de datos.",
      skills: [
        "Power BI",
        "SQL Server",
        "Python",
        "Power Query",
        "Modelamiento",
      ],
    },

    {
      title: "Analista BI",
      company: "Ministerio de Salud · Ministerio de Justicia",
      period: "2023 – 2024",
      icon: <MapPinned size={30} />,
      description:
        "Construcción de dashboards ejecutivos, indicadores KPI y análisis geoespacial para apoyar procesos estratégicos y seguimiento institucional.",
      skills: ["Power BI", "DAX", "ETL", "Geo", "KPIs"],
    },
    {
      title: "Full Stack Developer",
      company: "Proyectos Tecnológicos",
      period: "Experiencia complementaria",
      icon: <Code2 size={30} />,
      description:
        "Desarrollo de aplicaciones web modernas utilizando React, Spring Boot, Java, MySQL y APIs REST siguiendo buenas prácticas de arquitectura de software.",
      skills: ["React", "Spring", "Java", "MySQL", "REST"],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-title">
        <h2>Experiencia Profesional</h2>

        <p>
          Experiencia en Business Intelligence, analítica de datos,
          automatización y desarrollo de soluciones tecnológicas.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((item, index) => (
          <article key={index} className="experience-card">
            <div className="experience-content">
              <div className="experience-header">
                <div className="experience-icon">{item.icon}</div>

                <h3>{item.title}</h3>
              </div>

              <h4>
                <Briefcase size={16} />

                {item.company}
              </h4>

              <span className="period">
                <CalendarDays size={16} />

                {item.period}
              </span>

              <p>{item.description}</p>

              <div className="skills">
                {item.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
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
