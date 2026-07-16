import { BarChart3, Database, BriefcaseBusiness, Building2 } from "lucide-react";

const stats = [
  {
    icon: <BriefcaseBusiness size={26} />,
    value: "9+",
    title: "Años",
    subtitle: "de experiencia"
  },
  {
    icon: <BarChart3 size={26} />,
    value: "25+",
    title: "Dashboards",
    subtitle: "Power BI"
  },
  {
    icon: <Database size={26} />,
    value: "40 M+",
    title: "Registros",
    subtitle: "Analizados"
  },
  {
    icon: <Building2 size={26} />,
    value: "4+",
    title: "Entidades",
    subtitle: "Públicas"
  }
];

function Stats() {
  return (
    <section className="bg-slate-950 pb-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-8 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => (

          <div
            key={item.title}
            className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10"
          >

            <div className="mb-6 inline-flex rounded-xl bg-cyan-500/10 p-4 text-cyan-400">
              {item.icon}
            </div>

            <h2 className="text-4xl font-extrabold text-white">
              {item.value}
            </h2>

            <h3 className="mt-3 text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-1 text-slate-400">
              {item.subtitle}
            </p>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Stats;