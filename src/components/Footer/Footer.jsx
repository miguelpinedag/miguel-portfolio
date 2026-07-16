import {
  Mail,
  ExternalLink
} from "lucide-react";

import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";

import "./Footer.css";

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
      className="footer"
    >

      <div className="contact-card">

        <h2>

          Transformemos datos en decisiones.

        </h2>

        <p>

          Estoy disponible para colaborar en proyectos relacionados
          con análisis de datos, inteligencia de negocios,
          automatización e inteligencia artificial.

        </p>

        <div className="contact-options">

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/mapinedag/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >

            <FaLinkedin size={32} />

            <span>

              LinkedIn

            </span>

            <ExternalLink size={15} />

          </a>

          {/* GitHub */}

          <a
            href="https://github.com/miguelpinedag"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >

            <FaGithub size={32} />

            <span>

              GitHub

            </span>

            <ExternalLink size={15} />

          </a>

          {/* Email */}

          <a
            href="mailto:ingmiguelpin@gmail.com"
            className="contact-item"
          >

            <Mail size={32} />

            <span>

              Email

            </span>

          </a>

          {/* WhatsApp */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >

            <FaWhatsapp size={32} />

            <span>

              WhatsApp

            </span>

          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <div>

          © {new Date().getFullYear()} Miguel Pineda

        </div>

        <div>

          Data Analyst | Business Intelligence | Python | IA

        </div>

      </div>

    </footer>

  );

}

export default Footer;