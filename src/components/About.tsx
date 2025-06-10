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
            <strong className="text-white">Express.js</strong> — which allow me to develop responsive front-end interfaces and robust back-end systems. Whether it's designing intuitive user experiences or engineering scalable APIs, I love turning ideas into efficient and secure web applications.
            <br /><br />
            Currently, I’m expanding my skill set by learning <strong className="text-white">Golang</strong>, aiming to leverage its strengths in building high-performance, concurrent backend services. I also enjoy exploring new tools, frameworks, and techniques to stay ahead in the ever-evolving tech landscape.
            <br /><br />
            Driven by a strong problem-solving mindset and an eagerness to learn, I’m always excited to collaborate, innovate, and contribute to impactful projects as a developer.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
