import { RiReactjsLine } from "react-icons/ri";
import { TbBrandHtml5 } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { MdCss } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { TbFileTypeXml } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initials: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-4xl text-center">Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-5">
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-800 rounded-2xl">
          <TbBrandHtml5 className="text-7xl text-yellow-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-800 rounded-2xl">
          <MdCss className="text-cyan-400 text-7xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-800 rounded-2xl">
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-800 rounded-2xl">
          <TbBrandJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-800 rounded-2xl">
          <FaNodeJs className="text-green-500 text-7xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-800 rounded-2xl">
          <SiExpress className="text-7xl text-yellow-600" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-800 rounded-2xl">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-800 rounded-2xl">
          <SiMongodb className="text-green-500 text-7xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 border-neutral-800 rounded-2xl">
          <TbFileTypeXml className="text-7xl text-orange-400" />
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies;