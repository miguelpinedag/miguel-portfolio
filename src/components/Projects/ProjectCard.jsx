import { Link } from "react-router-dom";

function ProjectCard({ title, description, technologies, image, url }) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-lg h-full">
      <div>
        <div className="relative h-48 overflow-hidden bg-slate-50">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        {url.startsWith("/") ? (
          <Link
            to={url}
            className="inline-flex w-full justify-center items-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Ver Detalle →
          </Link>
        ) : (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center items-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Ver Proyecto →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
