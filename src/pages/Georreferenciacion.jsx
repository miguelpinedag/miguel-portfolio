import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function Georreferenciacion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen w-full bg-slate-950 text-slate-300 p-4 sm:p-6 lg:h-screen flex flex-col justify-between overflow-y-auto lg:overflow-hidden">
      {/* BARRA SUPERIOR (HEADER) */}
      <header className="mx-auto w-full max-w-7xl flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 pb-3 mb-4 gap-3 shrink-0">
        <div>
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
            Python · Selenium · Power Automate · SharePoint
          </p>
          <h1 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
            Georreferenciación & Automatización
          </h1>
        </div>

        <Link
          to="/#projects"
          className="self-start sm:self-auto rounded-lg bg-cyan-500/10 px-3.5 py-1.5 text-xs font-bold text-cyan-400 border border-cyan-500/30 transition duration-300 hover:bg-cyan-400 hover:text-slate-950 shadow-md whitespace-nowrap"
        >
          ← Volver al Portafolio
        </Link>
      </header>

      {/* Contenedor Grid Principal */}
      <div className="mx-auto grid w-full max-w-7xl gap-4 lg:grid-cols-12 items-stretch flex-1 pb-6 lg:pb-0">
        {/* ===================== COLUMNA IZQUIERDA ===================== */}
        <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
          {/* Tarjeta 1: El Desafío */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-md flex-1 flex flex-col justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                <h2 className="text-xs font-bold text-white uppercase tracking-wider">
                  El Desafío
                </h2>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                Extracción manual repetitiva de reportes desde portales web con
                autenticación, seguida de consolidación de archivos Excel y
                distribución por correo.
              </p>
            </div>
            <div className="mt-3 border-t border-slate-800/80 pt-2">
              <span className="text-[11px] sm:text-xs font-medium text-red-400">
                ⚠ Procesos manuales propensos a error y retrasos.
              </span>
            </div>
          </div>

          {/* Tarjeta 2: La Solución */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-md flex-1 flex flex-col justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                <h2 className="text-xs font-bold text-white uppercase tracking-wider">
                  La Solución
                </h2>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                Bot desarrollado en <strong>Selenium</strong> para navegación y
                descarga web automática, integrado con{" "}
                <strong>Power Automate</strong> y <strong>SharePoint</strong>.
              </p>
            </div>
            <div className="mt-3 border-t border-slate-800/80 pt-2">
              <span className="text-[11px] sm:text-xs font-medium text-emerald-400">
                ✓ Flujo 100% automatizado en la nube.
              </span>
            </div>
          </div>

          {/* Tarjeta 3: Tecnologías & Métricas */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 shadow-md flex-1 flex flex-col justify-between">
            <div>
              <div className="mb-2.5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                <h2 className="text-xs font-bold text-white uppercase tracking-wider">
                  Stack & Métricas
                </h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Selenium",
                  "Power Automate",
                  "SharePoint",
                  "Python",
                  "Pandas",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-cyan-300 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-800/80 pt-2.5 text-center">
              <div>
                <p className="text-base sm:text-lg font-extrabold text-cyan-400">
                  +90%
                </p>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Ahorro de Tiempo
                </p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-extrabold text-cyan-400">
                  Diario
                </p>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">
                  Ejecución Autónoma
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== COLUMNA DERECHA (Código) ===================== */}
        <div className="lg:col-span-7 flex flex-col h-full w-full">
          <div className="rounded-xl border border-slate-800 bg-slate-900 shadow-xl flex flex-col overflow-hidden h-full">
            {/* Barra superior editor */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-3.5 py-2.5">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs font-mono text-slate-400 truncate">
                  selenium_automation_flow.py
                </span>
              </div>
              <span className="text-[10px] font-semibold uppercase text-cyan-400 tracking-wider">
                Script
              </span>
            </div>

            {/* Editor de código */}
            <div className="flex-1 overflow-x-auto w-full">
              <SyntaxHighlighter
                language="python"
                style={vscDarkPlus}
                showLineNumbers
                customStyle={{
                  margin: 0,
                  padding: "14px",
                  fontSize: "11px",
                  lineHeight: "1.5",
                  background: "#080c14",
                  minHeight: "100%",
                }}
              >
                {`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pandas as pd
import time

# 1. Configuración de Selenium WebDriver
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Modo ejecucion en segundo plano
driver = webdriver.Chrome(options=options)

try:
    # 2. Autenticación automatizada en portal web
    driver.get("https://portal-empresa.com/login")
    driver.find_element(By.ID, "user").send_keys("usuario_auto")
    driver.find_element(By.ID, "password").send_keys("Pass2026Secure")
    driver.find_element(By.ID, "btn-login").click()

    # 3. Navegación e interacción automática
    wait = WebDriverWait(driver, 10)
    wait.until(EC.element_to_be_clickable((By.ID, "export-excel"))).click()
    time.sleep(3) # Espera descarga

    # 4. Procesamiento e Integración con Pandas
    df = pd.read_excel("downloads/reporte_diario.xlsx")
    df_clean = df.dropna(subset=["ID_TRANSACCION"])

    # 5. Sincronización hacia SharePoint y Power Automate
    df_clean.to_excel("sharepoint_sync/reporte_procesado.xlsx", index=False)
    print("✓ Proceso completado exitosamente.")

finally:
    driver.quit()`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Georreferenciacion;
