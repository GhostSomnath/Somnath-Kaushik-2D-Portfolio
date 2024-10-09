import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from 'react-icons/fi'; // Import the external link icon from react-icons


// Shatter effect for pieces
const pieceVariants = {
  initial: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
  },
  shatter: (i) => ({
    opacity: 0,
    x: Math.random() * 200 * (i % 2 === 0 ? 1 : -1),
    y: Math.random() * 200 * (i % 2 === 0 ? 1 : -1),
    rotate: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
    transition: { duration: 1, ease: "easeOut" },
  }),
};

// Modal animation
const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5 } },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [shatteredCard, setShatteredCard] = useState(null);

  const handleCardClick = (project, index) => {
    setShatteredCard(index);
    setTimeout(() => setSelectedProject(project), 1000); // Delay to allow the shatter effect before showing the popup
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
    setShatteredCard(null);
  };

  return (
    <div className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-4xl text-center">Projects</motion.h2>

      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer w-full h-64 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            onClick={() => handleCardClick(project, index)}
          >
            {/* Display project image */}
            <motion.div className="w-full h-full relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              
              {/* Project title overlay on hover */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-white text-2xl text-center font-bold">{project.title}</h3>
              </motion.div>
            </motion.div>

            {/* Shatter effect on click */}
            {shatteredCard === index && (
              <div className="absolute inset-0 w-full h-full grid grid-cols-2 grid-rows-2 gap-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    className="w-full h-full bg-gray-100 rounded"
                    initial="initial"
                    animate="shatter"
                    variants={pieceVariants}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Popup Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="relative w-11/12 max-w-3xl p-8 bg-gray-800 rounded-lg shadow-lg">
              {/* Stylish Close button */}
              <button
                className="absolute top-4 right-4 text-xl font-bold bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-all"
                onClick={handleClosePopup}
              >
                &times;
              </button>


{/* Project Title with Link */}
<h3 className="text-3xl font-bold mb-4 flex items-center">
  {selectedProject.link ? (
    <a
      href={selectedProject.link.startsWith("http") ? selectedProject.link : `https://${selectedProject.link}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:underline flex items-center">
      {selectedProject.title}
      {/* Link Icon */}
      <FiExternalLink className="w-6 h-6 ml-2 text-white hover:text-neutral-100 transition-colors duration-200" />
    </a>
  ) : (
    <span className="text-white">
      {selectedProject.title}
    </span>
  )}
</h3>

              <p className="mb-4 text-neutral-100">{selectedProject.description}</p>

              <div className="flex flex-wrap mt-4 space-x-2">
                {selectedProject.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm font-medium text-white bg-purple-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover mt-4 rounded-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
