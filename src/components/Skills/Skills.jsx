import { motion } from "framer-motion";
import { Database } from "lucide-react";
import { cvData } from "../../constants/cvData";
import { skillIcons } from "../../utils/IconRegistry";

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-[1400px] px-8">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-16 text-center">Habilidades Técnicas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(cvData.habilidades).map(([cat, skills]) => (
                <div key={cat} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-8 capitalize">{cat.replace(/([A-Z])/g, ' $1')}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skills.map(skill => {
                            const Icon = skillIcons[skill];
                            return (
                                <motion.div key={skill} whileHover={{y: -4}} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    {Icon ? <Icon className="text-blue-600" size={24}/> : <Database className="text-blue-600" size={24}/>}
                                    <span className="text-sm font-semibold text-slate-700">{skill}</span>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
