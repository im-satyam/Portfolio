import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // check if target is clickable
            if (
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                window.getComputedStyle(target).cursor === "pointer"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-red-600 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Outer Ring / Crosshair */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-red-500 rounded-full pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2 : 1,
                    opacity: isHovering ? 0.8 : 0.4
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
                {/* Crosshair Lines */}
                <div className="absolute top-1/2 left-[-4px] w-[6px] h-[1px] bg-red-500"></div>
                <div className="absolute top-1/2 right-[-4px] w-[6px] h-[1px] bg-red-500"></div>
                <div className="absolute left-1/2 top-[-4px] w-[1px] h-[6px] bg-red-500"></div>
                <div className="absolute left-1/2 bottom-[-4px] w-[1px] h-[6px] bg-red-500"></div>
            </motion.div>
        </>
    );
};

export default CustomCursor;
