import { motion } from "framer-motion";
import { cvData } from "../../constants/cvData";

export default function About() {
  const { personal, perfil } = cvData;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-[800px] px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Perfil Profesional</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {perfil}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-slate-100 px-6 py-3 rounded-xl font-semibold text-slate-900">
                {personal.ubicacion}
              </div>
              <div className="bg-slate-100 px-6 py-3 rounded-xl font-semibold text-slate-900">
                {personal.titulo}
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

