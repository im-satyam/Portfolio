import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-60 backdrop-blur-sm text-gray-300 py-8 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: copyright */}
        <p className="text-sm border-l-2 border-red-600 pl-4">&copy; {new Date().getFullYear()} Satyam Kumar. All rights reserved.</p>

        {/* Right: Social links */}
        <div className="flex space-x-6">
          <motion.a
            href="https://github.com/im-satyam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition"
            whileHover={{ x: [0, -2, 2, -2, 2, 0], color: "#E63946" }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub size={24} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/satyam-kumar-6723a22a8/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-red-500 transition"
            whileHover={{ x: [0, -2, 2, -2, 2, 0], color: "#E63946" }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
