import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGlobe, FaTimes } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
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
    demoUrl: "https://hack2a.github.io/MediPal/",
  },
  {
    title: "Inter.ai",
    description:
      "Built 8 REST API endpoints and a WebSocket consumer using Django Channels and Daphne, powering a real-time AI interview pipeline with streamed Gemini LLM responses, Whisper STT transcription, and TTS audio synthesis. Integrated a multi-engine ML orchestrator exposing ATS resume analysis, RAG-based JD context retrieval, toxicity detection, and automated post-interview evaluation reports via a singleton service layer. Implemented JWT and Google OAuth authentication, session lifecycle management with difficulty-based routing, and persistent chat history storage supporting 4 interview modes across technical, behavioral, and HR categories.",
    technologies: [
      "Django",
      "DRF",
      "Channels",
      "Daphne",
      "Gemini AI",
      "Whisper",
      "Docker",
      "SQLite",
      "React.js",
      "Next.js",
      "TailwindCSS",
    ],
    githubUrl: "https://github.com/Hack2A/ai-interview-app",
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
    title: "DS-Vault (Cryptrael Vault)",
    description:
      "Engineered the complete backend for a decentralized data vault application featuring dual-mode encryption: normal mode using AES-256-GCM with random keys and an advanced mode deriving keys via Argon2 from a user-provided seed phrase with every record anchored on a custom Proof-of-Work blockchain. Built a full blockchain module from scratch including Block hashing (SHA-256), chain validation, Merkle Tree integrity verification, and Ed25519 digital signatures for tamper-proof audit trails. Implemented 6 REST API endpoints with Django REST Framework covering JWT + email OTP-based 2FA authentication, seed-phrase lifecycle management, and encrypt/decrypt operations backed by persisted VaultCore metadata. Dockerized the entire stack (Django + Next.js) for single-command deployment.",
    technologies: [
      "Django",
      "DRF",
      "Python",
      "Blockchain",
      "AES-256-GCM",
      "Argon2",
      "Merkle Tree",
      "Ed25519",
      "JWT",
      "2FA",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Docker",
      "SQLite",
    ],
    githubUrl: "https://github.com/Hack2A/ds-vault",
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
    demoUrl: "https://hack2a.github.io/CalibreCops/",
  },
  {
    title: "Bookify",
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
];

const Project = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const linkClass =
    "inline-flex items-center gap-2 text-white hover:text-red-500 transition font-bold tracking-wide transition-colors duration-300 relative group/link";

  return (
    <div
      id="projects"
      className="bg-transparent text-white p-8 py-12"
      style={{ scrollMarginTop: "10rem" }}
    >
      <h1
        className="text-5xl font-bold mb-12 text-center text-white drop-shadow-[4px_4px_0_#E63946]"
        style={{ fontFamily: 'Bangers, system-ui' }}
      >
        My Projects
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-black/90 backdrop-blur-sm rounded-xl shadow-xl p-6 flex flex-col justify-between border-2 border-gray-800 transition-all hover:bg-black group cursor-pointer"
            whileHover={{
              scale: 1.02,
              borderColor: "#E63946",
              boxShadow: "0 0 15px rgba(229, 9, 20, 0.4)"
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelected(project)}
          >
            <div>
              <h2 className="text-2xl font-bold mb-2 text-red-500 font-bangers tracking-wide">{project.title}</h2>
              <p className="mb-4 text-gray-300 line-clamp-4 font-roboto-mono text-sm">{project.description}</p>

              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-white">Technologies Used:</h3>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                  aria-label={`${project.title} demo`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGlobe size={22} />
                  <span>Demo</span>
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover/link:w-full shadow-[0_0_10px_#E63946]"></span>
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label={`${project.title} source`}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={20} />
                <span>View Source</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover/link:w-full shadow-[0_0_10px_#E63946]"></span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal card */}
            <motion.div
              className="relative bg-gray-950 border-2 border-red-600/60 rounded-2xl shadow-[0_0_40px_rgba(230,57,70,0.3)] p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Close modal"
              >
                <FaTimes size={22} />
              </button>

              <h2 className="text-3xl font-bold mb-4 text-red-500 font-bangers tracking-wide pr-8">
                {selected.title}
              </h2>

              <p className="text-gray-300 font-roboto-mono text-sm leading-relaxed mb-6">
                {selected.description}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-white">Technologies Used:</h3>
                <ul className="flex flex-wrap gap-2">
                  {selected.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="bg-gray-800 text-white border border-red-900/30 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-gray-800">
                {selected.demoUrl && (
                  <a
                    href={selected.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    <FaGlobe size={22} />
                    <span>Demo</span>
                  </a>
                )}
                <a
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <FaGithub size={22} />
                  <span>View Source</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
