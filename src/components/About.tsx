import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen py-20 px-4 sm:px-8 relative bg-transparent flex items-center justify-center"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-black bg-opacity-60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800 shadow-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          >
            About Me
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-base sm:text-lg leading-relaxed text-gray-300 text-left space-y-4"
          >
            <p>
              Hi, I’m <strong className="text-white">Satyam Kumar</strong>, a Computer Science student at Dayananda Sagar College of Engineering, graduating in 2027.
            </p>
            <p>
              I’m a developer who enjoys building web applications and figuring out how things work behind the scenes. Most of my time goes into working on full-stack projects using <strong className="text-white">JavaScript</strong> and <strong className="text-white">Python</strong>, and I practice data structures and algorithms in <strong className="text-white">C++</strong> to keep improving my problem-solving skills.
            </p>
            <p>
              I like learning by building. I’ve worked on a few full-stack and backend projects where I handled things like authentication, APIs, and connecting the frontend to real data. I’ve also started integrating AI models through the backend in some of my projects, where user inputs are sent to an AI service and the results are processed and shown in the app. It’s something I enjoy exploring because it combines backend logic with real user features.
            </p>
            <p>
              I regularly practice DSA and competitive programming — I’m a 2<span className="text-yellow-400">★</span> CodeChef coder and have solved 170+ LeetCode problems across different topics. It’s something I do consistently because it helps me think more clearly and write better code.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
