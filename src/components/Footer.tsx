import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Satyam Kumar. All rights reserved.</p>

        {/* Right: Social links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/im-satyam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/satyam-kumar-6723a22a8/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-600 transition"
          >
            <FaLinkedin size={24} />
          </a>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
