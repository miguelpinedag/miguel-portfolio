    import {
    Award,
    Brain,
    Briefcase,
    Database,
    GraduationCap,
    MapPinned,
    MonitorSmartphone,
    Workflow
    } from "lucide-react";

    import { FaLinkedin } from "react-icons/fa";



    // =====================================================
    // STACK TECNOLÓGICO
    // =====================================================

    const skills = [
    { name: "Power BI", value: 95 },
    { name: "Excel", value: 95 },
    { name: "Python", value: 90 },
    { name: "SQL", value: 90 },
    { name: "Power Query", value: 92 },
    { name: "DAX", value: 90 },
    { name: "GeoPandas", value: 82 },
    { name: "React", value: 70 }
    ];



    // =====================================================
    // ESPECIALIDADES
    // =====================================================

    const specialties = [
    {
        icon: Database,
        title: "Business Intelligence",
        description:
        "Dashboards ejecutivos, indicadores estratégicos y modelos analíticos."
    },
    {
        icon: Workflow,
        title: "Automatización",
        description:
        "Optimización de procesos utilizando Python, SQL y Power Query."
    },
    {
        icon: MapPinned,
        title: "Analítica Geoespacial",
        description:
        "Mapas interactivos, análisis territorial y visualización espacial."
    },
    {
        icon: Brain,
        title: "Data Analytics",
        description:
        "Transformación de datos en información para la toma de decisiones."
    }
    ];



    // =====================================================
    // INDICADORES
    // =====================================================

    const stats = [
    {
        icon: Briefcase,
        value: "8+",
        title: "Años de experiencia"
    },
    {
        icon: MonitorSmartphone,
        value: "20+",
        title: "Dashboards"
    },
    {
        icon: Database,
        value: "40M+",
        title: "Registros analizados"
    },
    {
        icon: Award,
        value: "100%",
        title: "Proyectos reales"
    }
    ];



    // =====================================================
    // ABOUT
    // =====================================================

    function About() {

    return (

        <section
         id="about"
        className="scroll-mt-24 bg-slate-900 py-14"
>

        <div className="mx-auto max-w-7xl px-8">

            {/* ===================================================== */}
            {/* ENCABEZADO                                             */}
            {/* ===================================================== */}

            <div className="mb-10 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.30em] text-cyan-400">

                SOBRE MÍ

            </p>

            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white lg:text-5xl">

                Transformando datos en decisiones estratégicas

            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-400">

                Analista de Datos especializado en Business Intelligence,
                automatización de procesos y desarrollo de soluciones
                tecnológicas orientadas a la toma de decisiones.

            </p>

            </div>





            {/* ===================================================== */}
            {/* PERFIL + INFORMACIÓN                                   */}
            {/* ===================================================== */}

            <div className="grid gap-10 lg:grid-cols-[360px_1fr]">




            {/* ===================================================== */}
            {/* TARJETA PERFIL                                        */}
            {/* ===================================================== */}

            <div>

                <div className="rounded-3xl border border-slate-700 bg-slate-950 p-6 shadow-2xl">

                <div className="flex flex-col items-center">

                    <img
                    src="/profile.jpg"
                    alt="Miguel Augusto Pineda"
                    className="h-56 w-56 rounded-full border-4 border-cyan-400 object-cover shadow-xl"
                    />

                    <h3 className="mt-6 text-center text-2xl font-bold text-white">

                    Miguel Augusto Pineda González

                    </h3>

                    <p className="mt-2 text-center text-cyan-400">

                    Data Analyst • Business Intelligence • Python Developer

                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-2">

                    {[
                        "Power BI",
                        "Python",
                        "SQL",
                        "Excel",
                        "React"
                    ].map((item) => (

                        <span
                        key={item}
                        className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                        >

                        {item}

                        </span>

                    ))}

                    </div>

                </div>

                <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-5">

                    <div className="flex items-center gap-3">

                    <GraduationCap
                        size={24}
                        className="text-cyan-400"
                    />

                    <div>

                        <h4 className="font-semibold text-white">

                        Formación

                        </h4>

                        <p className="text-sm text-slate-400">

                        Magíster en Gerencia de Proyectos

                        </p>

                        <p className="text-sm text-slate-400">

                        Ingeniero Industrial

                        </p>

                    </div>

                    </div>

                </div>

                </div>

            </div>





            {/* ===================================================== */}
            {/* COLUMNA DERECHA                                       */}
            {/* ===================================================== */}

            <div>

                <h3 className="text-4xl font-bold leading-tight text-white">

                Soluciones analíticas que convierten datos

                <span className="text-cyan-400">

                    {" "}en decisiones.

                </span>

                </h3>

                <p className="mt-5 text-base leading-7 text-slate-400">

                Desarrollo soluciones de Business Intelligence,
                integración de datos y automatización de procesos
                para convertir información compleja en herramientas
                que apoyan la toma de decisiones.

                </p>

                {/* ESPECIALIDADES                                         */}
                {/* ===================================================== */}

                <div className="mt-8">

                <h4 className="mb-5 text-2xl font-bold text-white">

                    Especialidades

                </h4>

                <div className="grid gap-4 md:grid-cols-2">

                    {specialties.map((item) => {

                    const Icon = item.icon;

                    return (

                        <div
                        key={item.title}
                        className="group rounded-2xl border border-slate-700 bg-slate-950 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
                        >

                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">

                            <Icon
                            size={24}
                            className="text-cyan-400"
                            />

                        </div>

                        <h5 className="text-lg font-bold text-white">

                            {item.title}

                        </h5>

                        <p className="mt-2 text-sm leading-6 text-slate-400">

                            {item.description}

                        </p>

                        </div>

                    );

                    })}

                </div>

                </div>

                {/* ===================================================== */}
                {/* STACK TECNOLÓGICO                                     */}
                {/* ===================================================== */}
                
            </div>
            </div>

            {/* ===================================================== */}
            {/* MÉTRICAS                                               */}
            {/* ===================================================== */}
                {/* ===================================================== */}
    {/* STACK TECNOLÓGICO */}
    {/* ===================================================== */}

    <div className="mt-14">

    <h4 className="mb-8 text-center text-2xl font-bold text-white">

        Stack Tecnológico

    </h4>

    <div className="grid gap-x-10 gap-y-5 lg:grid-cols-2">

        {skills.map((skill) => (

        <div key={skill.name}>

            <div className="mb-2 flex items-center justify-between">

            <span className="font-medium text-slate-200">

                {skill.name}

            </span>

            <span className="text-sm font-semibold text-cyan-400">

                {skill.value}%

            </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-800">

            <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{
                width: `${skill.value}%`
                }}
            />

            </div>

        </div>

        ))}

    </div>

    </div>
                
            <div className="mt-16">

            <h4 className="mb-6 text-center text-2xl font-bold text-white">

                Algunos indicadores

            </h4>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                {stats.map((item) => {

                const Icon = item.icon;

                return (

                    <div
                    key={item.title}
                    className="rounded-2xl border border-slate-700 bg-slate-950 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400"
                    >

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10">

                        <Icon
                        size={28}
                        className="text-cyan-400"
                        />

                    </div>

                    <h3 className="mt-5 text-3xl font-extrabold text-white">

                        {item.value}

                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">

                        {item.title}

                    </p>

                    </div>

                );

                })}

            </div>

            </div>

        </div>

        </section>

    );

    }

    export default About;