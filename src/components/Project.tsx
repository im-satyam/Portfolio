import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Medipal",
    description:
      "Developed MediPal, a comprehensive healthcare platform connecting patients with medical professionals through a secure and user-friendly interface. Enabled users to seamlessly book appointments with verified doctors, view clinic locations via Google Maps, and securely manage their medical history with encrypted storage. Integrated an AI-powered medical assistant for instant health guidance and implemented features for doctors to accept or reject appointments, enhancing scheduling efficiency. Focused on robust security with Two-Factor Authentication (2FA) and tackled challenges in AI optimization, secure data handling, and cloud-based image management.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Maps API",
      "AI Integration",
      "Cloudinary",
      "Docker",
      "2FA",
    ],
    githubUrl: "https://github.com/im-satyam/hacknocturne-MediPal",
  },
  {
    title: "Aquagenesis",
    description:
      "Developed backend for a sequence classification system integrating a trained ML pipeline (RandomForest/CNN) with BLAST-based taxonomic refinement for eukaryotic sequences. Implemented APIs to process sequences from multiple formats (FASTA, CSV, TXT, or manual input), returning structured JSON with predictions, confidence scores, abundance summaries, and kingdom-level distributions. Built BLAST lookup and NCBI Entrez integration to fetch taxonomic lineages, handle novel/outlier sequences, and enrich predictions with closest-relative information. Ensured end-to-end integration between the frontend, ML pipeline, and external databases for real-time predictions and reporting.",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Flask",
      "Biopython",
      "Pandas",
      "NumPy",
      "TensorFlow",
      "Scikit-learn",
      "HDBSCAN",
      "NCBI Entrez API",
      "Docker",
    ],
    githubUrl: "https://github.com/Hack2A/eDNA-sih25",
  },
  {
    title: "Caliber-Cops",
    description:
      "Built a full-stack cybersecurity web application to check if an email has been compromised in data breaches and detect phishing URLs using multiple threat intelligence APIs. Developed a custom Google Chrome extension that automatically detects the currently visited website and alerts the user in real-time if it is identified as a phishing site. Focused on enhancing user security with seamless integration, real-time notifications, and reliable threat analysis.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "Chrome Extension Development",
      "API Integration",
      "Cybersecurity",
      "TailwindCSS",
    ],
    githubUrl: "https://github.com/im-satyam/SandBox2025",
  },
  {
    title: "Blood Bank",
    description:
      "Developed a responsive web application to streamline blood donation and management processes. Implemented user-friendly interfaces for donors and admins using React.js and Bootstrap. Built a secure backend with Express.js to handle donor registrations, blood inventory tracking, and appointment scheduling. Ensured smooth data flow between frontend and backend through RESTful APIs.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "RESTful APIs",
    ],
    githubUrl: "https://github.com/im-satyam/bb",
  },
  {
    title: "Book-Buy-Sell",
    description:
      "Developed a responsive web application for buying and selling books, featuring real-time listings, user authentication, and secure transactions. Utilized Firebase for backend services including Firestore database for storing listings, Firebase Authentication for user login/signup, and Firebase Hosting for deployment. Designed an intuitive UI with React.js to ensure a seamless user experience for book buyers and sellers.",
    technologies: [
      "React",
      "Bootstrap",
      "Firebase",
      "Firestore",
      "Firebase Authentication",
      "Firebase Hosting",
    ],
    githubUrl: "https://github.com/im-satyam/book-buy-sell",
  },
  {
    title: "Ecommerce Website",
    description:
      "Developed a full-featured e-commerce website using Flask for the backend, MySQL for database management, and TypeScript for building interactive and type-safe front-end components. The application includes user authentication, product listings, a shopping cart, and order processing functionality. Implemented RESTful routing, secure session handling, and password hashing to ensure robust security and scalability. Followed best practices in modular application structure and database design to create a maintainable and efficient web platform.",
    technologies: [
      "React",
      "Typescript",
      "Flask",
      "MySQL",
      "Bootstrap",
      "RESTful APIs",
      "User Authentication",
      "E-commerce",
    ],
    githubUrl: "https://github.com/im-satyam/ea",
  },
];

const Project = () => {
  const linkClass =
    "inline-flex items-center gap-2 text-white group-hover:text-red-500 transition font-bold tracking-wide transition-colors duration-300 relative group/link";

  return (
    <div
      id="projects"
      className="min-h-screen bg-transparent text-white p-8 pt-20"
      style={{ scrollMarginTop: "10rem" }}
    >
      <h1
        className="text-5xl font-bold mb-12 text-center text-white drop-shadow-[4px_4px_0_#E63946]"
        style={{ fontFamily: 'Bangers, system-ui' }}
      >
        My Projects
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          ({ title, description, technologies, githubUrl }, index) => (
            <motion.div
              key={title}
              className="bg-black/90 backdrop-blur-sm rounded-xl shadow-xl p-6 flex flex-col justify-between border-2 border-gray-800 transition-all hover:bg-black group"
              whileHover={{
                scale: 1.02,
                borderColor: "#E63946",
                boxShadow: "0 0 15px rgba(229, 9, 20, 0.4)"
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-2 text-red-500 font-bangers tracking-wide">{title}</h2>
                <p className="mb-4 text-gray-300 line-clamp-4 font-roboto-mono text-sm">{description}</p>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-white">Technologies Used:</h3>
                  <ul className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <li
                        key={tech}
                        className="bg-gray-800 text-white border border-red-900/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-800">

                {title === "Medipal" && (
                  <a
                    href="https://hack2a.github.io/MediPal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                    aria-label="Medipal demo"
                  >
                    <FaGlobe size={22} />
                    <span>Demo</span>
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover/link:w-full shadow-[0_0_10px_#E63946]"></span>
                  </a>
                )}


                {title === "Caliber-Cops" && (
                  <a
                    href="https://hack2a.github.io/CalibreCops/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                    aria-label="Caliber-Cops demo"
                  >
                    <FaGlobe size={22} />
                    <span>Demo</span>
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover/link:w-full shadow-[0_0_10px_#E63946]"></span>
                  </a>
                )}


                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                  aria-label={`${title} source`}
                >
                  <FaGithub size={20} />
                  <span>View Source</span>
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover/link:w-full shadow-[0_0_10px_#E63946]"></span>
                </a>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Project;
