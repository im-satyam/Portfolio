import { motion } from "framer-motion";
import {
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
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
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
  { name: "Golang", icon: <SiGoland className="text-cyan-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-300" /> },

  // Databases
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
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
      className="relative w-full bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-8"
      style={{ backgroundImage: "url('/background-6824_512.gif')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-black bg-opacity-40 rounded-lg p-8"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            style={{ textShadow: "0 0 8px rgba(0,0,0,0.8)" }}
          >
            My Skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-10"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center space-y-2 text-center cursor-pointer select-none"
                tabIndex={-1}
                onMouseDown={(e) => e.preventDefault()}
              >
                <div className="text-5xl">{skill.icon}</div>
                <p className="text-lg text-white">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
