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
      style={{ backgroundImage: "url('/moon-7946_512.gif')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />
      {/* Image positioned relative inside container */}
      <div className="absolute top-1/2 left-80 -translate-y-1/2 w-96 z-10">
        <img
          src="\MyImg.jpg"
          alt="Intro Image"
          className="w-100 h-100 rounded-full object-cover"
        />
      </div>

      {/* Animated Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center space-y-6 px-4">
        {/* Hello with wave emoji */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl font-bold flex items-center justify-center"
          style={{ marginLeft: "28rem" }} // moves right to clear the image area
        >
          Hello <span className="animate-wave ml-3 inline-block">👋</span>
        </motion.div>

        {/* The typewriter text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700"
          style={{ marginLeft: "28rem" }} // align with "Hello"
        >
          <span className="mr-2">I am {text}</span>
          <Cursor cursorColor="#7C3AED" />
        </motion.div>
      </div>

      {/* CSS for waving animation */}
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
    </div>
  );
};

export default Intro;
