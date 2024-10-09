import { HERO_CONTENT } from "../assets/constants";
import profilePic from "../assets/hodakaprofile.jpg";
import { motion } from "framer-motion";

// Define your container animation for Framer Motion
const container = (duration) => ({
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: duration,
            ease: "easeInOut",
        },
    },
});

// Variants for word animation
const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.2, // Stagger each word's appearance
        },
    }),
};

const Hero = () => {
    // Create an array of words from title, subtitle, and paragraph content
    const titleWords = ["Somnath", "Kaushik"];
    const subtitleWords = ["Full", "Stack", "Web", "Dev", "&", "Java", "Programmer"];

    // Split the HERO_CONTENT into lines
    const paragraphLines = HERO_CONTENT.split("\n");

    return (
        <motion.section
            className="pb-4 border-b border-neutral-900 lg:mb-3 relative overflow-hidden"
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
        >
            <div className="absolute inset-0 opacity-30 animate-pulse"></div>
            <div className="flex flex-wrap relative z-10">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        {/* Animate all words in the title */}
                        <motion.h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            {titleWords.map((word, index) => (
                                <motion.span
                                    key={index}
                                    variants={wordVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index} // Pass index for staggered animation
                                    className="py-2 tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
                                >
                                    {word}{" "}
                                </motion.span>
                            ))}
                        </motion.h1>

                        {/* Animate all words in the subtitle */}
                        <motion.span className="py-2 text-4xl tracking-tight">
                            {subtitleWords.map((word, index) => (
                                <motion.span
                                    key={index}
                                    variants={wordVariants}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index + titleWords.length} // Adjust index for subtitle
                                    className="text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
                                >
                                    {word}{" "}
                                </motion.span>
                            ))}
                            <br />
                        </motion.span>

                        {/* Render lines in paragraph with individual spacing */}
                        {paragraphLines.map((line, lineIndex) => (
                            <motion.p
                                key={lineIndex}
                                className="max-w-xl py-2 font-light tracking-tight text-justify"
                            >
                                {line.split(" ").map((word, index) => (
                                    <motion.span
                                        key={index}
                                        variants={wordVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index + titleWords.length + subtitleWords.length + lineIndex * line.split(" ").length} // Adjust index for paragraph
                                    >
                                        {word}{" "}
                                    </motion.span>
                                ))}
                            </motion.p>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-10">
                    <div className="flex justify-center items-center h-[90%] lg:h-[80%] hover:scale-105">
                        <motion.img
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
                            src={profilePic}
                            className="rounded-3xl  max-h-full max-w-full object-contain shadow-lg transition-transform transform hover:scale-110" // Change scale factor here
                            alt="Somnath Kaushik"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
