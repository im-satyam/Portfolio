import { motion } from "framer-motion";
import {
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  FaReact,
  FaChrome,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiGoland,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiFlask,
  SiDjango,
  SiPrisma,
  SiSqlite,
} from "react-icons/si";

const skills = [
  // Languages
  { name: "C++", icon: <SiCplusplus className="text-blue-300" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Golang", icon: <SiGoland className="text-cyan-500" /> },

  // Frontend
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Chrome Ext", icon: <FaChrome className="text-yellow-400" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "Prisma ORM", icon: <SiPrisma className="text-white" /> },

  // Databases
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },

  // DevOps & Tools
  { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-20 px-4 sm:px-8 bg-transparent"
    >

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg"
        >
          My Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                translateY: -5,
                transition: { duration: 0.2, delay: 0 }
              }}
              className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center gap-4 border border-gray-800 shadow-xl hover:bg-opacity-80 hover:border-blue-500/50 transition-all cursor-pointer group"
            >
              <div className="text-5xl group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all">
                {skill.icon}
              </div>
              <p className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
