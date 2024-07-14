import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"
export default function Navbar() {
  return (
    <>
    <div className="h-[100px]">
      <Sidebar></Sidebar>
      <div className="w-10/12 mx-auto flex justify-between items-center h-full">
      <motion.span
         initial={{opacity:0, scale:0.5}}
         animate={{opacity:1, scale:1}}
         transition={{duration:0.5}}
        >Md.Akash Ahmed</motion.span>
       <div className="flex justify-center items-center gap-10">
        <a href="https://www.facebook.com/akashahmed.joy.775/" target="_blank"><img className="w-[20px] h-[20px] rounded-full" src='../../../public/fb.png' alt="" /></a>
        <a href="https://www.instagram.com/akashjoy9/" target="_blank"><img className="w-[20px] h-[20px] rounded-full" src="../../../public/insta.jpg" alt="" /></a>
        <a href="https://github.com/AkashAhmed007" target="_blank"><img className="w-[20px] h-[20px] rounded-full" src="../../../public/github.jfif" alt="" /></a>
        </div>
      </div>
    </div>
    </>
  )
}
