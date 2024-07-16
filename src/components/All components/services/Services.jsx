import { motion } from "framer-motion";
export default function Services() {
  return (
    <motion.div className="bg-[linear-gradient(180deg,#0c0c1d,#111132)] h-full flex flex-col justify-between p-5">

      <motion.div className="self-end flex justify-center items-center">
        <p className="text-gray-600 text-right">
          I focus on helping your brand grow
          <br></br> and move forword
        </p>
        <hr className="w-[300px] border-t-gray-700"/>
      </motion.div>

      <motion.div className="flex-2 flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-4">
          <img
            className="w-[300px] h-[80px] rounded-full object-cover"
            src="./bg-2.jpg"
            alt=""
          />
          <h1 className="text-4xl font-semibold leading-relaxed tracking-wide">
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <h1 className="text-4xl font-semibold leading-relaxed tracking-wide">
            <b>For Your</b> Business.
          </h1>
          <button className="text-white border-none border w-[200px] h-[50px] bg-orange-600 rounded-full text-xl">WHAT WE DO?</button>
        </div>
      </motion.div>

      <motion.div>
        <motion.div className="w-3/4 mx-auto flex justify-center items-center gap-2 p-2">
          <motion.div whileHover={{background:"lightgray",color:'black'}} className="border border-gray-200 flex flex-col justify-between gap-4 p-4" >
            <h1>Branding</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
              necessitatibus sit, optio corporis impedit animi modi odit
              suscipit quaerat inventore fugit.
            </p>
            <button className="border-none border bg-orange-600 text-black">Go</button>
          </motion.div>

          <motion.div whileHover={{background:"lightgray",color:'black'}} className="border border-gray-200 flex flex-col justify-between gap-4  p-4">
            <h1>Branding</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
              necessitatibus sit, optio corporis impedit animi modi odit
              suscipit quaerat inventore fugit.
            </p>
            <button className="border-none border bg-orange-600 text-black">Go</button>
          </motion.div>

          <motion.div whileHover={{background:"lightgray",color:'black'}} className="border border-gray-200 flex flex-col justify-between gap-4  p-4" >
            <h1>Branding</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
              necessitatibus sit, optio corporis impedit animi modi odit
              suscipit quaerat inventore fugit.
            </p>
            <button className="border-none border bg-orange-600 text-black">Go</button>
          </motion.div>

          <motion.div whileHover={{background:"lightgray",color:'black'}} className="border border-gray-200 flex flex-col justify-between gap-4  p-4">
            <h1>Branding</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
              necessitatibus sit, optio corporis impedit animi modi odit
              suscipit quaerat inventore fugit.
            </p>
            <button className="border-none border bg-orange-600 text-black">Go</button>
          </motion.div>
        </motion.div>
      </motion.div>

    </motion.div>
  );
}
