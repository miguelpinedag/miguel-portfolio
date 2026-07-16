function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-slate-950 pt-36 pb-24"
    >

      {/* EFECTOS DE FONDO */}

      <div className="absolute -top-56 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-[140px]" />


      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>



      {/* CONTENIDO */}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">



        {/* PRESENTACIÓN */}

        <div>


          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

            🟢 Disponible para nuevas oportunidades

          </span>



          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-7xl">

            Transformando datos en decisiones estratégicas.

          </h1>



          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

            Analista de Datos especializado en Business Intelligence,
            Power BI, Python y SQL. Diseño soluciones analíticas que
            convierten información compleja en conocimiento para la
            toma de decisiones.

          </p>

        </div>





        {/* DASHBOARD VISUAL */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_70px_rgba(6,182,212,.12)]">


          <div className="mb-8 flex items-center justify-between">


            <div>

              <p className="text-sm text-slate-400">
                Executive Dashboard
              </p>


              <h3 className="text-xl font-bold text-white">
                Business Intelligence
              </h3>

            </div>



            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">

              Online

            </span>


          </div>




          <div className="space-y-5">



            <div className="rounded-xl bg-slate-800/70 p-5">

              <p className="text-sm text-slate-400">

                Datos Procesados

              </p>


              <h2 className="mt-2 text-4xl font-bold text-white">

                +1M

              </h2>


            </div>





            <div className="grid grid-cols-2 gap-5">



              <div className="rounded-xl bg-slate-800/70 p-5">

                <p className="text-sm text-slate-400">

                  Herramientas

                </p>


                <h3 className="mt-2 text-3xl font-bold text-cyan-400">

                  BI

                </h3>


              </div>





              <div className="rounded-xl bg-slate-800/70 p-5">


                <p className="text-sm text-slate-400">

                  Automatización

                </p>


                <h3 className="mt-2 text-3xl font-bold text-cyan-400">

                  Python

                </h3>


              </div>



            </div>





            <div className="rounded-xl bg-slate-800/70 p-5">


              <div className="mb-3 flex justify-between text-sm text-slate-300">

                <span>
                  Power BI
                </span>

                <span>
                  Advanced
                </span>


              </div>




              <div className="h-3 rounded-full bg-slate-700">


                <div className="h-3 w-[95%] rounded-full bg-cyan-400"></div>


              </div>



            </div>



          </div>



        </div>



      </div>



    </section>
  );
}


export default Hero;