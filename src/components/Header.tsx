import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black text-white font-bold w-full h-16 flex justify-between items-center px-6 shadow-md">
      {/* Centered Navigation Links */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-10">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Skills", link: "#skills" },
            { name: "Projects", link: "#projects" },
            { name: "Contact", link: "#contact" },
          ].map((item) => (
            <li key={item.name} className="relative cursor-pointer group">
              <a
                href={item.link}
                className="transition-all duration-300"
              >
                {item.name}
              </a>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Social Icons */}
      <div className="py-2">
        <ul className="flex space-x-4">
          <li className="opacity-80 hover:opacity-100 transition">
            <a
              href="https://github.com/im-satyam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li className="opacity-80 hover:opacity-100 transition">
            <a
              href="https://www.linkedin.com/in/satyam-kumar-6723a22a8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
