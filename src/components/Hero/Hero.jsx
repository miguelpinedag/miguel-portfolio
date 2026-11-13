import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import profile from "../../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative py-12 sm:py-24 bg-white overflow-x-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs sm:text-sm font-semibold text-blue-700"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            Disponible para nuevos retos
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-950 leading-[1.05] tracking-tight">
            Data Analyst &<br />
            <span className="text-blue-600">Business Intelligence</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Magíster en Gerencia de Proyectos e Ingeniero Industrial. Transformo
            datos complejos en estrategias accionables mediante BI,
            automatización y analítica avanzada.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition flex items-center gap-2 text-base"
            >
              Ver Proyectos <ArrowRight size={20} />
            </button>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/miguel-pineda-gonzalez/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/miguelpinedag"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="mailto:ingmiguelpin@gmail.com"
                className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="https://wa.me/573143118240"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={profile}
            alt="Perfil"
            className="w-full max-w-[300px] sm:max-w-md h-auto object-contain rounded-[2rem] sm:rounded-[3rem] shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
