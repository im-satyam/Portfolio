import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Intro = () => {
  const [text] = useTypewriter({
    words: ["Satyam Kumar", "a Web Developer", "an Engineer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full bg-cover bg-center py-20 px-4 sm:px-8"
      style={{ backgroundImage: "url('/moon-7946_512.gif')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-5xl font-bold"
          >
            Hello <span className="animate-wave ml-3 inline-block">👋</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-4 text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700"
          >
            <span className="mr-2">I am {text}</span>
            <Cursor cursorColor="#7C3AED" />
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src="/MyImg.jpg"
            alt="Intro Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(-4deg); }
          60% { transform: rotate(10deg); }
          70% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          display: inline-block;
          animation-name: wave;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </section>
  );
};

export default Intro;
