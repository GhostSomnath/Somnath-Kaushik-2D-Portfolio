import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <motion.h2 
        className="my-20 text-4xl text-center">
        Projects
      </motion.h2>
      <div className="max-w-screen-xl mx-auto px-4">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded mb-6 lg:w-52 lg:h-40"
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 flex flex-col justify-center lg:justify-start">
              <h6 className="mb-2 text-lg font-semibold">{project.title}</h6>
              <p className="mb-4 text-justify text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} 
                    className="px-2 py-1 mr-2 mb-2 text-sm font-medium text-purple-900 rounded bg-neutral-900">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>                
        ))}        
      </div>    
    </div>
  );
};

export default Projects;
