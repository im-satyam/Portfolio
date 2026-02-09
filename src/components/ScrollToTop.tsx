import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[100] cursor-pointer"
                >
                    <div className="bg-red-600 bg-opacity-90 backdrop-blur-md hover:bg-red-700 text-white p-3 rounded-full shadow-[0_0_15px_rgba(229,9,20,0.5)] border border-red-500 hover:scale-110 transition-all duration-300 group">
                        <FaArrowUp className="text-xl group-hover:-translate-y-1 transition-transform" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
