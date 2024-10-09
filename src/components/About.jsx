import aboutImg from "../assets/file2.png";
// import { ABOUT_TEXT } from "../constants";
import { ABOUT_TEXT } from "../constants";
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

const About = () => {
  return (
    <section className="pb-4 border-b lg:mb-3 border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-4xl text-center">About Me</motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-16 flex justify-center lg:justify-end"
        >
          <div className="w-full h-[90%] lg:h-[80%] flex items-center">
            <img
              className="h-auto max-w-full rounded-3xl object-contain shadow-lg transition-transform transform hover:scale-105"
              src={aboutImg}
              alt="about"
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl py-2 font-light tracking-tight text-justify text-gray-200">
              {ABOUT_TEXT.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
