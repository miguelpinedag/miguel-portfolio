import { motion } from "framer-motion";
import { Briefcase, CalendarDays } from "lucide-react";
import { cvData } from "../../constants/cvData";

export default function Experience() {
  return (
    <section className="py-26 bg-slate-50" id="experience">
      <div className="mx-auto max-w-[1200px] px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-slate-900">
            Experiencia Profesional
          </h2>
        </motion.div>

        <div className="space-y-4">
          {cvData.experiencia.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="bg-blue-50 p-2.5 rounded-lg text-blue-600 shrink-0 mt-1">
                  <Briefcase size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h3 className="text-sm font-bold text-slate-900">
                      {exp.cargo}
                    </h3>
                    <p className="text-[10px] text-slate-500 flex items-center gap-1 font-medium bg-slate-100 px-2 py-0.5 rounded-full w-fit">
                      <CalendarDays size={10} /> {exp.period}
                    </p>
                  </div>
                  <p className="text-blue-600 font-semibold text-xs mb-2">
                    {exp.empresa}
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    {exp.logros.map((logro, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 leading-relaxed"
                      >
                        <span className="text-blue-500 mt-0.5">•</span> {logro}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
