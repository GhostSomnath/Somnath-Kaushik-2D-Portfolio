import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-4xl text-center">Experience</motion.h2>

      <div className="max-w-screen-xl mx-auto px-4">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="flex items-center mb-8 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 "
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            viewport={{ once: false }}
          >
            {/* Year Section */}
            <div className="w-1/4 text-center">
              <motion.div
                className="text-xl font-extrabold text-purple-400"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {experience.year}
              </motion.div>
            </div>

            {/* Experience Details */}
            <div className="w-3/4 ml-4">
              <h6 className="mb-2 text-xl font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-sm text-purple-300">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-gray-300">{experience.description}</p>

              {/* Technology Tags */}
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 mr-2 mb-2 text-sm font-medium text-white rounded-full"
                    style={{
                      background: "linear-gradient(to right, #a06cd5, #4b79a1)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
