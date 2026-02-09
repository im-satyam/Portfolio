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
        color: "from-yellow-400 to-orange-500",
    },
    {
        title: "Codeforces",
        description: "Max Rating 800+",
        details: "Competitive programmer participating in regular rounds.",
        icon: <SiCodeforces className="text-blue-500" />,
        link: "https://codeforces.com/profile/im.satyam",
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
                    className="text-5xl md:text-6xl font-bold mb-10 text-white drop-shadow-[5px_5px_0_#E63946]"
                    style={{ fontFamily: 'Bangers, system-ui' }}
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
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 25px rgba(229, 9, 20, 0.5)",
                                borderColor: "#E63946"
                            }}
                            className="bg-black/80 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 border-2 border-gray-800 shadow-xl transition-all cursor-pointer group h-full relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            <div className="text-5xl md:text-6xl mb-2 group-hover:rotate-12 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.color} font-bangers tracking-wider`}>
                                {item.title}
                            </h3>
                            <p className="text-xl md:text-2xl font-semibold text-white font-roboto-mono">
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
