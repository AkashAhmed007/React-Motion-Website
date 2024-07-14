import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
  },
};
const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
          repeat:Infinity,
          repeatType:"mirror",
          duration: 20,
        },
    },
  };
export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-100px)] bg-[linear-gradient(180deg,#0c0c1d,#111132)] overflow-hidden p-5">
      <div className="w-3/4 h-full m-auto">
        <motion.div
          variants={textVariants}
          initial={"initial"}
          animate={"animate"}
          className="flex flex-col h-full justify-center gap-5"
        >
          <motion.h2
            variants={textVariants}
            className="text-4xl text-purple-400 tracking-widest"
          >
            Md. Akash Ahmed
          </motion.h2>
          <motion.h1 variants={textVariants} className="text-6xl font-bold">
            Web Developer
          </motion.h1>

          <motion.div variants={textVariants} className="flex gap-2">
            <motion.button
              variants={textVariants}
              className="pointer bg-transparent p-3 border rounded-md text-white font-medium"
            >
              See the latest work
            </motion.button>
            <motion.button
              variants={textVariants}
              className="pointer bg-transparent p-3 border rounded-md text-white font-medium"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
        initial="initial"
        variants={sliderVariants}
        animate="animate"
        className="absolute w-1/2 font-bold text-[200px] text-[#ffffff09] whitespace-nowrap bottom-[120px]">
            <p>Designer Developer Creator</p>
        </motion.div>
      </div>
      <div className="absolute top-0 right-0">
        <img className="w-3/4" src="/hardy.png" alt="" />
      </div>
    </div>
  );
}
