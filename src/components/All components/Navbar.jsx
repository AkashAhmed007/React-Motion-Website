import {motion} from "framer-motion"
export default function Navbar() {
  return (
    <>
    <div className="h-[100px]">
      <div className="w-10/12 mx-auto flex justify-between items-center h-full">
      <motion.span
         initial={{opacity:0, scale:0.5}}
         animate={{opacity:1, scale:1}}
         transition={{duration:0.5}}
        >Md.Akash Ahmed</motion.span>
       <div className="flex justify-center items-center gap-10">
        <a href=""><img className="w-[20px] h-[20px] rounded-md" src='../../../public/facebook.png' alt="" /></a>
        <a href=""><img className="w-[20px] h-[20px] rounded-md" src="../../../public/instagram.webp" alt="" /></a>
        <a href=""><img className="w-[20px] h-[20px] rounded-md" src="../../../public/twitter.webp" alt="" /></a>
        <a href=""><img className="w-[20px] h-[20px] rounded-md" src="../../../public/youtube.jpg" alt="" /></a>
        </div>
      </div>
    </div>
    </>
  )
}
