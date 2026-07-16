import { Link } from "react-router-dom";
import { useEffect } from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function Georreferenciacion() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <main className="min-h-screen bg-slate-950">

      {/* ===================== HEADER ===================== */}

      <section className="border-b border-slate-800">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">

          <div>

            <p className="mb-2 font-semibold uppercase tracking-[0.35em] text-cyan-400">

              Python · GeoPandas · Folium · Shapely

            </p>

            <h1 className="text-5xl font-extrabold text-white">

              Georreferenciación Inteligente

            </h1>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">

              Desarrollo de procesos automatizados para convertir,
              validar y analizar información geográfica mediante
              Python y librerías especializadas de análisis espacial,
              permitiendo construir mapas interactivos y apoyar
              la toma de decisiones basada en datos.

            </p>

          </div>

          <Link
            to="/"
            className="rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
          >

            ← Volver al Portafolio

          </Link>

        </div>

      </section>

      {/* ===================== CONTENIDO ===================== */}

      <section className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid gap-14 lg:grid-cols-2">

          <div>

            <h2 className="mb-6 text-3xl font-bold text-white">

              El desafío

            </h2>

            <p className="leading-8 text-slate-400">

              Consolidar información proveniente de diferentes fuentes,
              validarla espacialmente y transformarla en información
              georreferenciada lista para análisis territorial.

            </p>

            <h2 className="mb-6 mt-12 text-3xl font-bold text-white">

              La solución

            </h2>

            <p className="leading-8 text-slate-400">

              Se desarrolló una solución completamente automatizada
              utilizando Python para validar coordenadas, generar
              geometrías, realizar cruces espaciales, construir mapas
              interactivos y entregar información lista para apoyar
              procesos de analítica avanzada.

            </p>

          </div>

          <div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-xl">

              <h3 className="mb-6 text-2xl font-bold text-white">

                Tecnologías

              </h3>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-xl bg-slate-800 p-4 text-center text-white">
                  Python
                </div>

                <div className="rounded-xl bg-slate-800 p-4 text-center text-white">
                  Pandas
                </div>

                <div className="rounded-xl bg-slate-800 p-4 text-center text-white">
                  GeoPandas
                </div>

                <div className="rounded-xl bg-slate-800 p-4 text-center text-white">
                  Folium
                </div>

                <div className="rounded-xl bg-slate-800 p-4 text-center text-white">
                  Shapely
                </div>

                <div className="rounded-xl bg-slate-800 p-4 text-center text-white">
                  OpenPyXL
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ===================== EDITOR ===================== */}

        <div className="mt-24">

          <h2 className="mb-8 text-center text-3xl font-bold text-white">

            Fragmento del código desarrollado

          </h2>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-700 shadow-2xl">

            <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-900 px-5 py-3">

              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>

              <span className="ml-4 text-sm text-slate-400">

                georreferenciacion.py

              </span>

            </div>

            <SyntaxHighlighter
              language="python"
              style={vscDarkPlus}
              showLineNumbers
              wrapLongLines
              customStyle={{
                margin: 0,
                padding: "18px",
                fontSize: "13px",
                lineHeight: "0.75rem",
                background: "#0d1117"
              }}
            >
{`import pandas as pd
import geopandas as gpd
import folium

# Lectura de información
df = pd.read_excel(
    "Victimas_2025.xlsx"
)

# Conversión a GeoDataFrame
gdf = gpd.GeoDataFrame(
    df,
    geometry=gpd.points_from_xy(
        df.Longitud,
        df.Latitud
    ),
    crs="EPSG:4326"
)

# Cruce espacial
resultado = gpd.sjoin(
    gdf,
    sectores,
    predicate="within"
)

# Construcción del mapa
mapa = folium.Map(
    location=[4.65, -74.10],
    zoom_start=11,
    tiles="CartoDB positron"
)

folium.GeoJson(
    resultado
).add_to(mapa)

mapa.save(
    "mapa_inteligente_bogota.html"
)
`}
            </SyntaxHighlighter>

          </div>

        </div>

        {/* ===================== RESULTADOS ===================== */}

        <div className="mt-24">

          <h2 className="mb-10 text-center text-3xl font-bold text-white">

            Capacidades desarrolladas

          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <h3 className="text-xl font-bold text-cyan-400">

                Georreferenciación

              </h3>

              <p className="mt-4 leading-7 text-slate-400">

                Conversión automática de registros
                geográficos utilizando coordenadas
                y validación espacial.

              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <h3 className="text-xl font-bold text-cyan-400">

                Análisis Espacial

              </h3>

              <p className="mt-4 leading-7 text-slate-400">

                Cruce de información territorial
                mediante GeoPandas y geometrías
                espaciales.

              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <h3 className="text-xl font-bold text-cyan-400">

                Automatización

              </h3>

              <p className="mt-4 leading-7 text-slate-400">

                Procesamiento masivo de datos,
                reduciendo tiempos y errores
                manuales.

              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <h3 className="text-xl font-bold text-cyan-400">

                Visualización

              </h3>

              <p className="mt-4 leading-7 text-slate-400">

                Construcción de mapas interactivos
                con Folium para facilitar la
                interpretación de la información.

              </p>

            </div>

          </div>

        </div>
                {/* ===================== MÉTRICAS ===================== */}

        <div className="mt-24">

          <h2 className="mb-10 text-center text-3xl font-bold text-white">

            Impacto de la solución

          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <p className="text-5xl font-extrabold text-cyan-400">

                +45K

              </p>

              <p className="mt-3 text-slate-300">

                Registros procesados

              </p>

            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <p className="text-5xl font-extrabold text-cyan-400">

                4

              </p>

              <p className="mt-3 text-slate-300">

                Capas geográficas integradas

              </p>

            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <p className="text-5xl font-extrabold text-cyan-400">

                100%

              </p>

              <p className="mt-3 text-slate-300">

                Automatización del proceso

              </p>

            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

              <p className="text-5xl font-extrabold text-cyan-400">

                HTML

              </p>

              <p className="mt-3 text-slate-300">

                Mapas interactivos generados

              </p>

            </div>

          </div>

        </div>

        {/* ===================== BENEFICIOS ===================== */}

        <div className="mt-24">

          <h2 className="mb-10 text-center text-3xl font-bold text-white">

            Beneficios obtenidos

          </h2>

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400">

              <h3 className="text-2xl font-bold text-cyan-400">

                Mayor eficiencia

              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                Eliminación de procesos manuales mediante automatización
                del flujo de georreferenciación y validación territorial.

              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400">

              <h3 className="text-2xl font-bold text-cyan-400">

                Información confiable

              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                Integración de diferentes fuentes de datos garantizando
                consistencia espacial y calidad de la información.

              </p>

            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400">

              <h3 className="text-2xl font-bold text-cyan-400">

                Toma de decisiones

              </h3>

              <p className="mt-5 leading-8 text-slate-400">

                Generación de mapas interactivos que permiten analizar
                información territorial de forma rápida e intuitiva.

              </p>

            </div>

          </div>

        </div>
                     {/* ===================== FOOTER ===================== */}

        <div className="mt-24 border-t border-slate-800 pt-12">

          <div className="mx-auto flex max-w-7xl justify-end">

            <Link
              to="/"
              className="rounded-xl border border-cyan-400 px-8 py-4 text-lg font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
            >
              ← Volver al Portafolio
            </Link>

          </div>

        </div>
              </section>

    </main>

  );

}

export default Georreferenciacion;