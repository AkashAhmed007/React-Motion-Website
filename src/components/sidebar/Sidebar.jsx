import {motion} from "framer-motion"
import { useState } from "react";
import Links from "../links/Links";
import ToggleButton from "../togglebutton/ToggleButton";
const variants = {
  open:{
    clipPath:"circle(1200px at 50px 50px)",
    transition:{
      delay:0.5,
      type: "spring",
      stifness: 20,
  }
},
  closed:{
    clipPath:"circle(30px at 50px 50px)",
    transition:{
      delay:0.5,
      type: "spring",
      stifness: 400,
      damping:40
    }
  }
}
export default function Sidebar() {
  const [open,setOpen] = useState(false)
  return (
    <motion.div 
    animate={open ? 'open':'closed'}
    className="flex flex-col justify-center items-center bg-white text-black">
      <motion.div 
      variants={variants}
      className="fixed top-0 left-0 bottom-0 w-[300px] bg-white">
        <Links></Links>
      </motion.div>
      <ToggleButton open={open} setOpen={setOpen}></ToggleButton>
    </motion.div>
  );
}
