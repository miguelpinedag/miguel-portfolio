import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import profile from "../../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-20 bg-white">
      <div className="mx-auto max-w-[1400px] px-8 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            Disponible para nuevos retos
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-950 leading-[1.05] tracking-tight">
            Data Analyst &<br />
            <span className="text-blue-600">Business Intelligence</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
            Magíster en Gerencia de Proyectos e Ingeniero Industrial. Transformo
            datos complejos en estrategias accionables mediante BI,
            automatización y analítica avanzada.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="#projects"
              className="rounded-2xl bg-slate-900 px-8 py-4 font-semibold text-white hover:bg-slate-800 transition flex items-center gap-2 text-lg"
            >
              Ver Proyectos <ArrowRight size={20} />
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/miguel-pineda-gonzalez/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/miguelpinedag"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="mailto:ingmiguelpin@gmail.com"
                className="p-4 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition"
              >
                <FaEnvelope size={22} />
              </a>
              <a
                href="https://wa.me/573143118240"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={profile}
            alt="Perfil"
            className="w-full aspect-square object-cover rounded-[3rem] shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
