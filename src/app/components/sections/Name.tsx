"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject, useRef } from "react";
import classes from "./name.module.css";

interface NameProps {
  title: React.ReactNode;
  description: string;
}

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {},
};

export const Name: React.FC<NameProps> = (props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);

  return (
    <section className="snap-center overflow-hidden flex justify-center flex-col h-screen ml-5">
      {/* <div ref={ref} className='flex flex-col justify-center items-center'>
        <Image src={profile.src} width={profile.width} height={profile.height} alt={"An image of Rudy Soliz"} />
    </div> */}
      <div ref={ref}></div>
      <motion.h2 style={{ y }} className="text-6xl font-bold">
        {props.title}
      </motion.h2>
      <div className="mt-5">
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {props.description.split(" ").map((word, index) => (
            <motion.div
              key={index}
              className="inline-block ml-1"
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                },
                hidden: {
                  y: 5,
                  opacity: 0,
                },
              }}
            >
              {word}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
