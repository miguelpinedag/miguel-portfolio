import { Link } from "react-router-dom";

function ProjectCard({
  title,
  description,
  technologies,
  image,
  url,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(6,182,212,.18)]">

      {/* Imagen */}
      <div className="relative h-52 overflow-hidden bg-slate-950">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

      </div>

      {/* Información */}
      <div className="p-8">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-slate-300">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botón */}
        <div className="mt-8">

          {url.startsWith("/") ? (

            <Link
              to={url}
              className="inline-flex items-center rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Ver Proyecto →
            </Link>

          ) : url !== "#" ? (

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Ver Dashboard →
            </a>

          ) : (

            <button
              className="inline-flex items-center rounded-xl border border-cyan-500 px-5 py-3 font-semibold text-cyan-400"
            >
              Próximamente
            </button>

          )}

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;