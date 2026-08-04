import { Link } from "react-router-dom";

function ProjectCard({ title, description, technologies, image, url }) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,.15)]">
      <div>
        {/* Imagen */}
        <div className="relative h-24 overflow-hidden bg-slate-950">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        {/* Contenido */}
        <div className="p-3">
          {/* Título completo dinámico */}
          <h3 className="text-xs sm:text-sm font-bold leading-snug text-white min-h-[2.4rem] flex items-center">
            {title}
          </h3>

          {/* Descripción */}
          <p className="mt-1 text-[11px] leading-relaxed text-slate-300 line-clamp-3">
            {description}
          </p>

          {/* Badges de Tecnologías */}
          <div className="mt-2 flex flex-wrap gap-1 min-h-[2.5rem] items-start">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-1.5 py-0.5 text-[9px] font-medium text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Botón */}
      <div className="p-3 pt-0 mt-1">
        {url.startsWith("/") ? (
          <Link
            to={url}
            className="inline-flex w-full justify-center items-center rounded-md bg-cyan-500 px-2.5 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Ver Proyecto →
          </Link>
        ) : url !== "#" ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center items-center rounded-md bg-cyan-500 px-2.5 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Ver Dashboard →
          </a>
        ) : (
          <button
            disabled
            className="inline-flex w-full justify-center items-center rounded-md border border-cyan-500/40 px-2.5 py-1.5 text-xs font-semibold text-cyan-400/60 cursor-not-allowed"
          >
            Próximamente
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
