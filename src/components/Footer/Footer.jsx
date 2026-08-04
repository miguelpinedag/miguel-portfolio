import {
  Mail,
  ExternalLink
} from "lucide-react";

import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";

function Footer() {

  const whatsappMessage =
    "Hola Miguel, vi tu portafolio y quisiera hablar sobre un proyecto de datos.";

  const whatsappUrl =
    `https://wa.me/573143118240?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return (

    <footer
      id="contact"
      className="bg-slate-950 border-t border-slate-800 py-14"
    >

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* ====================================================== */}
        {/* TARJETA PRINCIPAL */}
        {/* ====================================================== */}

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            px-8
            py-10
            shadow-xl
          "
        >

          <div className="mx-auto max-w-3xl text-center">

            <h2
              className="
                text-3xl
                font-bold
                text-white
                lg:text-4xl
              "
            >

              Transformemos datos en decisiones.

            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                leading-7
                text-slate-300
              "
            >

              Estoy disponible para colaborar en proyectos de
              Business Intelligence, análisis de datos,
              automatización de procesos, visualización de
              información e inteligencia artificial.

            </p>

          </div>

          {/* ====================================================== */}
          {/* BOTONES */}
          {/* ====================================================== */}

          <div
            className="
              mx-auto
              mt-10
              grid
              max-w-5xl
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {/* ====================================================== */}
            {/* LINKEDIN */}
            {/* ====================================================== */}

            <a
              href="https://www.linkedin.com/in/mapinedag/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-slate-700
                bg-slate-900
                px-5
                py-5
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
              "
            >

              <FaLinkedin size={28} />

              <span className="font-medium">

                LinkedIn

              </span>

              <ExternalLink size={16} />

            </a>

            {/* ====================================================== */}
            {/* GITHUB */}
            {/* ====================================================== */}

            <a
              href="https://github.com/miguelpinedag"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-slate-700
                bg-slate-900
                px-5
                py-5
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
              "
            >

              <FaGithub size={28} />

              <span className="font-medium">

                GitHub

              </span>

              <ExternalLink size={16} />

            </a>

            {/* ====================================================== */}
            {/* EMAIL */}
            {/* ====================================================== */}

            <a
              href="mailto:ingmiguelpin@gmail.com"
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-slate-700
                bg-slate-900
                px-5
                py-5
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
              "
            >

              <Mail size={26} />

              <span className="font-medium">

                Email

              </span>

            </a>
                        {/* ====================================================== */}
            {/* WHATSAPP */}
            {/* ====================================================== */}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-slate-700
                bg-slate-900
                px-5
                py-5
                text-white
                transition
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
              "
            >

              <FaWhatsapp size={28} />

              <span className="font-medium">

                WhatsApp

              </span>

            </a>
        
          </div>

        </div>

        {/* ====================================================== */}
        {/* FOOTER INFERIOR */}
        {/* ====================================================== */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-slate-800
            pt-6
            text-sm
            text-slate-400
            md:flex-row
          "
        >

          <div>

            © {new Date().getFullYear()} Miguel Pineda

          </div>

          <div className="text-center md:text-right">

            Data Analyst • Business Intelligence • Python • IA

          </div>

        </div>

      </div>

    </footer>

  );

}

export default Footer;