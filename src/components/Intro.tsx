import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Intro = () => {
  const [text] = useTypewriter({
    words: ["a Web Developer", "an Engineer", "a Problem Solver"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full py-10 pb-12 px-4 sm:px-8 relative flex items-center justify-center bg-transparent"
    >


      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto text-center md:text-left">

        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-red-600 shadow-[0_0_20px_rgba(229,9,20,0.6)]">
          <img
            src="/photo.jpeg"
            alt="Intro"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-bold font-bangers tracking-wide"
            style={{ fontFamily: 'Bangers, system-ui' }}
          >
            <span className="drop-shadow-[2px_2px_0_#E63946]">
              Hello <span className="animate-wave ml-3 inline-block">👋</span> <br />
              I'm
            </span>
            <span className="inline-block text-red-600 drop-shadow-md tracking-wide ml-2">Satyam Kumar</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-2xl md:text-4xl font-bold"
            style={{ fontFamily: 'Bangers, system-ui' }}
          >
            <span className="mr-4 text-red-600 drop-shadow-md tracking-wide">I am</span>
            <span className="text-white drop-shadow-[2px_2px_0_#E63946]">
              {text}
            </span>
            <Cursor cursorColor="#E63946" />
          </motion.div>
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
