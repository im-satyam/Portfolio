import { motion } from "framer-motion";
import {
  FaFlask,
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
  SiMysql, // Assuming SiMysql is correct now
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript
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
  { name: "Golang", icon: <SiGoland className="text-cyan-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Flask", icon: <FaFlask className="text-gray-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
];

const Skills = () => {
  return (
    <div
      className="relative h-[40rem] w-full bg-cover bg-center bg-no-repeat"
      // ABSOLUTELY ESSENTIAL: Ensure the path is correct.
      // If `background-6824_512.gif` is directly in your `public` folder:
      style={{ backgroundImage: "url('/background-6824_512.gif')" }}

      // FOR DEBUGGING: TEMPORARILY comment out the overlay div
      // This helps confirm if the background image is loading at all.
      // <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      id="skills"
    >
        {/* TEMPORARILY REMOVE OR COMMENT OUT THIS LINE FOR DEBUGGING */}
        {/* If the GIF appears after commenting this, it means your overlay is too opaque or the GIF itself is very dark */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-0" /> */}

        {/* Re-add the overlay if the GIF appears after the above step */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />


      {/* Content container with blur */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-8 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-black bg-opacity-40 rounded-lg p-8 w-full"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            style={{ textShadow: "0 0 8px rgba(0,0,0,0.8)" }}
          >
            My Skills
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-10"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center space-y-2 text-center cursor-pointer select-none"
                style={{
                  transformOrigin: "center",
                  transition: "transform 0.2s ease",
                  userSelect: "none",
                  outline: "none",
                }}
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
    </div>
  );
};

export default Skills;