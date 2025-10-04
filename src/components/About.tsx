import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-black py-20 px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-black bg-opacity-70 rounded-lg p-6 sm:p-8"
          style={{ backdropFilter: 'blur(6px)' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          >
            About Me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-base sm:text-lg leading-relaxed text-gray-300"
          >
            Hi! I’m <strong className="text-white">Satyam Kumar</strong>, a passionate Full Stack Developer and a Computer Science undergraduate specializing in Cyber Security, currently pursuing my B.E. and set to graduate in 2027. My journey in tech is driven by curiosity, creativity, and a strong desire to build solutions that make a meaningful impact.
            <br /><br />
            I specialize in JavaScript technologies — particularly{" "}
            <strong className="text-white">Node.js</strong>,{" "}
            <strong className="text-white">React.js</strong>, and{" "}
            <strong className="text-white">Express.js</strong> — which allow me to create responsive front-end interfaces and robust back-end systems. I’m also skilled in{" "}
            <strong className="text-white">Python</strong> and{" "}
            <strong className="text-white">Flask</strong>, which help me develop efficient APIs and backend services, and{" "}
            <strong className="text-white">Docker</strong> for containerizing and deploying scalable applications.
            <br /><br />
            Currently, I’m expanding my expertise in{" "}
            <strong className="text-white">Golang</strong>, aiming to leverage its strengths in building high-performance, concurrent backend services. I enjoy exploring new tools, frameworks, and techniques to stay ahead in the ever-evolving tech landscape.
            <br /><br />
            With a strong problem-solving mindset, the ability to learn new technologies quickly, and a collaborative approach, I thrive in team environments where innovation and impact come first. I’m always excited to build, collaborate, and contribute to meaningful projects as a developer.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
