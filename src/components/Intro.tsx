import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Intro = () => {
  const [text] = useTypewriter({
    words: ["Satyam Kumar", "a Web Developer", "an Engineer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="relative h-[40rem] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('\moon-7946_512.gif')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Animated Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl font-bold"
        >
          Welcome!
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700"
        >
          <span className="mr-2">I am {text}</span>
          <Cursor cursorColor="#7C3AED" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
