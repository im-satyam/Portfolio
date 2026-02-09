import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Achievements", link: "#achievements" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/90 text-white font-bold w-full h-16 flex justify-between items-center px-6 shadow-[0_4px_10px_rgba(229,9,20,0.3)] border-b border-red-900">

      <div className="flex items-center md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none text-red-500 hover:text-red-400">
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      <div className="flex items-center">
        <span className="text-2xl text-red-600 font-bangers tracking-wider drop-shadow-[2px_2px_0_#991B1B]" style={{ fontFamily: 'Bangers, system-ui' }}>SPIDER-DEV</span>
      </div>


      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-10">
          {navItems.map((item) => (
            <li key={item.name} className="relative cursor-pointer group">
              <a
                href={item.link}
                className="transition-all duration-300 font-roboto-mono hover:text-red-500 tracking-tight"
              >
                {item.name}
              </a>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#E63946]"></span>
            </li>
          ))}
        </ul>
      </nav>


      <div className="flex items-center space-x-6">
        {/* Resume Button */}
        <a
          href="/SatyamResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-4 py-2 bg-red-600/10 border border-red-500 text-red-500 font-bold rounded hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(229,9,20,0.2)] hover:shadow-[0_0_20px_rgba(229,9,20,0.6)] font-mono tracking-widest text-sm"
        >
          MISSION REPORT
        </a>

        <div className="flex items-center space-x-4">
          <motion.a
            href="https://github.com/im-satyam"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition text-white"
            whileHover={{ x: [0, -2, 2, -2, 2, 0], color: "#E63946" }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/satyam-kumar-6723a22a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition text-white"
            whileHover={{ x: [0, -2, 2, -2, 2, 0], color: "#E63946" }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>
      </div>


      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black md:hidden shadow-lg">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="block transition hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* Mobile Resume Link */}
            <li>
              <a
                href="/SatyamResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-red-500 font-bold tracking-widest border border-red-500 p-2 text-center rounded bg-red-900/10"
                onClick={() => setMenuOpen(false)}
              >
                MISSION REPORT
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
