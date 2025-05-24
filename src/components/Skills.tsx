import { motion } from "framer-motion";
import {
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-300" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

const Skills = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/background-6824_512.gif')" }}
      id="skills"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl text-white">
          <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            My Skills
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-10"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <div className="text-5xl">{skill.icon}</div>
                <p className="text-lg">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
