import { motion } from "framer-motion";
export default function Services() {
  // const ref = useRef();
  // const isInView = useInView(ref, { margin: "-100px" });
  const variants = {
    initial: {
      x: -500,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        staggerChildren: 0.05,
      },
    },
  };
  return (
    <motion.div
      // ref={ref}
      variants={variants}
      initial="initial"
      // animate={isInView && "animate"}
      whileInView="animate"
      className="bg-[linear-gradient(180deg,#0c0c1d,#111132)] h-full flex flex-col justify-between p-5"
    >
      <motion.div variants={variants} className="self-end flex justify-center items-center">
        <p className="text-gray-600 text-right">
          I focus on helping your brand grow
          <br></br> and move forword
        </p>
        <hr className="w-[300px] border-t-gray-700" />
      </motion.div>

      <motion.div
       variants={variants}
        className="flex-2 flex flex-col justify-center items-center gap-4"
        
      >
        <motion.div variants={variants} className="flex justify-center items-center gap-4">
          <img
            className="w-[300px] h-[80px] rounded-full object-cover"
            src="./bg-2.jpg"
            alt=""
          />
          <h1 className="text-4xl font-semibold leading-relaxed tracking-wide">
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </motion.div>
        <motion.div variants={variants} className="flex justify-center items-center gap-4">
          <h1 className="text-4xl font-semibold leading-relaxed tracking-wide">
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>
            Business.
          </h1>
          <button className="text-white border-none border w-[200px] h-[50px] bg-orange-600 rounded-full text-xl">
            WHAT WE DO?
          </button>
        </motion.div>
      </motion.div>

      <motion.div>
        <motion.div  variants={variants} className="w-10/12 mx-auto flex justify-center items-center p-2 overflow-hidden">
          <motion.div
            whileHover={{ background: "lightgray", color: "black" }}
            className="border border-gray-200 flex flex-col justify-between gap-4 p-4"
          >
            <h1>Branding</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fuga aut
              necessitatibus sit, optio corporis impedit animi modi odit
              suscipit quaerat inventore fugit.
            </p>
            <button className="border-none border bg-orange-600 text-black">
              Go
            </button>
          </motion.div>

          <motion.div
            whileHover={{ background: "lightgray", color: "black" }}
            className="border border-gray-200 flex flex-col justify-between gap-4  p-4"
          >
            <h1>Branding</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
              necessitatibus sit, optio corporis impedit animi modi odit
              suscipit quaerat inventore fugit.
            </p>
            <button className="border-none border bg-orange-600 text-black">
              Go
            </button>
          </motion.div>

          <motion.div
            whileHover={{ background: "lightgray", color: "black" }}
            className="border border-gray-200 flex flex-col justify-between gap-4  p-4"
          >
            <h1>Branding</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
              necessitatibus sit, optio corporis impedit animi modi odit
              suscipit quaerat inventore fugit.
            </p>
            <button className="border-none border bg-orange-600 text-black">
              Go
            </button>
          </motion.div>

          <motion.div
            whileHover={{ background: "lightgray", color: "black" }}
            className="border border-gray-200 flex flex-col justify-between gap-4  p-4"
          >
            <h1>Branding</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aut
              necessitatibus sit, optio corporis impedit animi modi odit
              suscipit quaerat inventore fugit.
            </p>
            <button className="border-none border bg-orange-600 text-black">
              Go
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
