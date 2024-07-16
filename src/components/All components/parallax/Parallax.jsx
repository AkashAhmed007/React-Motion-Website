import PropTypes from "prop-types";
import {motion,useScroll, useTransform} from "framer-motion"
import { useRef } from "react";
const Parallax = ({ type }) => {
 const ref = useRef()   
 const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start","end start"]
 })
const yText = useTransform(scrollYProgress,[0,1],["0%","300%"])
const yBg= useTransform(scrollYProgress,[0,1],["0%","300%"])
  return (
    <div ref={ref} className="w-full h-full relative flex justify-center items-center overflow-hidden">
      <motion.h1 style={{y:yText}} className="text-8xl text-white font-bold z-10">
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
        <motion.div className="absolute w-full h-full bg-center bg-cover bg-no-repeat bg-[url('/stars.jpg')]"></motion.div>
        <motion.div  style={{x:yBg}} className="absolute w-[200px] h-[200px] left-0 rounded-full bg-center bg-cover bg-no-repeat bg-[url('/planet.jpg')]"></motion.div>
    </div>
  );
};
Parallax.propTypes = {
  type: PropTypes.string,
};
export default Parallax;
