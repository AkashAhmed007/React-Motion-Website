import { motion } from "framer-motion";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
export default function Links() {
  const links = ["Homepage", "About", "Service", "Portfolio", "Contact"];
  return (
    <motion.div
      variants={variants}
      className="absolute w-full h-full flex flex-col justify-center items-center top-6 left-6 gap-5"
    >
      {links.map((link) => (
        <motion.a
          variants={itemVariants}
          whileHover={{scale: 1.1}}
          whileTap={{scale: 0.95}}
          className="text-2xl"
          href={`#${link}`}
          key={link}
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
}
