import { motion } from "framer-motion";

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
            <motion.div
                className="relative w-24 h-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Outer Ring */}
                <motion.span
                    className="absolute inset-0 border-4 border-transparent border-t-red-600 rounded-full shadow-[0_0_15px_rgba(229,9,20,0.6)]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                ></motion.span>

                {/* Inner Ring */}
                <motion.span
                    className="absolute inset-2 border-4 border-transparent border-b-white rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                ></motion.span>

                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl tracking-widest drop-shadow-[2px_2px_0_#E63946]" style={{ fontFamily: 'Bangers, system-ui' }}>
                    S.K
                </div>
            </motion.div>
        </div>
    );
};

export default Preloader;
