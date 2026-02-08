import { motion } from "framer-motion";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { FaUsers } from "react-icons/fa";

const achievements = [
    {
        title: "CodeChef",
        description: "2★ Coder",
        details: "Consistent participant in competitive programming contests.",
        icon: <SiCodechef className="text-orange-900" />,
        link: "https://www.codechef.com/users/imsatyam22",
        color: "from-orange-400 to-red-500",
    },
    {
        title: "LeetCode",
        description: "170+ Problems Solved",
        details: "Actively solving algorithmic challenges across various topics.",
        icon: <SiLeetcode className="text-yellow-500" />,
        link: "https://leetcode.com/u/Scoder22/",
    },
    {
        title: "Codeforces",
        description: "Max Rating 800+",
        details: "Competitive programmer participating in regular rounds.",
        icon: <SiCodeforces className="text-blue-500" />,
        link: "https://codeforces.com/profile/im.satyam", // Placeholder
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Point Blank",
        description: "Former Club Member",
        details: "Former member of an elite coding club fostering tech innovation.",
        icon: <FaUsers className="text-blue-400" />,
        link: "https://www.linkedin.com/company/pointblank-club",
        color: "from-blue-400 to-purple-500",
    },
];

const Achievements = () => {
    return (
        <section
            id="achievements"
            className="relative w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-8 bg-transparent"
        >
            <div className="relative z-10 max-w-7xl mx-auto text-center px-4 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg"
                >
                    Achievements
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {achievements.map((item, index) => (
                        <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-black bg-opacity-60 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 border border-gray-800 shadow-xl hover:bg-opacity-80 hover:border-blue-500/50 transition-all cursor-pointer group h-full"
                        >
                            <div className="text-5xl md:text-6xl mb-2 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                                {item.icon}
                            </div>
                            <h3 className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
                                {item.title}
                            </h3>
                            <p className="text-xl md:text-2xl font-semibold text-white">
                                {item.description}
                            </p>
                            <p className="text-gray-400 text-base md:text-lg">
                                {item.details}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
