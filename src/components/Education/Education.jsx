import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { cvData } from "../../constants/cvData";
import educationImage from "../../assets/images/education.jpg";

export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">
          Formación Académica
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Columna de Tarjetas más altas y espaciosas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {cvData.educacion.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 transition-all"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600 shrink-0 mt-0.5 border border-slate-100">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {edu.titulo}
                  </h3>
                  {edu.institucion && (
                    <p className="text-blue-600 font-semibold text-sm mt-1">
                      {edu.institucion}
                    </p>
                  )}
                  <p className="text-slate-500 text-xs mt-1">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Columna de la Imagen más pequeña y proporcionada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <div className="w-full max-w-[440px] h-[360px] overflow-hidden rounded-3xl shadow-lg border border-slate-100">
              <img
                src={educationImage}
                alt="Educación"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
