import PropTypes from "prop-types";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid debitis quod facere facilis odio molestias asperiores laudantium illum obcaecati, consectetur, ea magni, fuga aspernatur labore delectus incidunt reprehenderit rem!",
  },
  {
    id: 2,
    title: "Next.js App",
    img: "https://images.pexels.com/photos/5504694/pexels-photo-5504694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid debitis quod facere facilis odio molestias asperiores laudantium illum obcaecati, consectetur, ea magni, fuga aspernatur labore delectus incidunt reprehenderit rem!",
  },
  {
    id: 3,
    title: "Vanilla.js App",
    img: "https://images.pexels.com/photos/6047880/pexels-photo-6047880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid debitis quod facere facilis odio molestias asperiores laudantium illum obcaecati, consectetur, ea magni, fuga aspernatur labore delectus incidunt reprehenderit rem!",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/13325999/pexels-photo-13325999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aliquid debitis quod facere facilis odio molestias asperiores laudantium illum obcaecati, consectetur, ea magni, fuga aspernatur labore delectus incidunt reprehenderit rem!",
  },
];

export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    dumping: 30,
  });
  return (
    <>
      <div ref={ref} className="relative">
        <div className="sticky top-0 left-0 text-orange-400 text-4xl text-center font-bold p-5">
          <h1 className="mb-5">Featured Works</h1>
          <motion.div style={{ scaleX }} className="h-2 bg-white"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-3/4 mx-auto flex justify-center items-center gap-5">
          <div ref={ref} className="flex-1 w-full h-full object-cover">
            <img src={item.img} alt="" />
          </div>
          <motion.div  style={{y}} className="flex-1 flex flex-col gap-2">
            <h2 className="text-4xl">{item.title}</h2>
            <p className="text-md text-gray-600">{item.description}</p>
            <button className="w-[200px] rounded-lg bg-orange-400 text-black p-3">See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Single.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
