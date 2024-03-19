"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { RefObject, useRef } from "react";
import classes from "./name.module.css";

interface NameProps {
  title: React.ReactNode;
  description: string | (string | React.ReactNode)[];
  description_line2?: string | (string | React.ReactNode)[];
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

  const renderDescription = (desc: string | (string | React.ReactNode)[]) => {
    if (typeof desc === "string") {
      // Your existing code for splitting a string into words
      return desc.split(" ").map((word, index) => (
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
      ));
    } else {
      // Handling an array of string | React.ReactNode
      return desc.map((item, index) => {
        if (typeof item === "string") {
          // Split the string into words and map them
          return item.split(" ").map((word, wordIndex) => (
            <motion.div
              key={`${index}-${wordIndex}`}
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
          ));
        } else {
          // Render the React Node as it is
          return (
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
              {item}
            </motion.div>
          );
        }
      });
    }
  };

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
          style={{display: 'flex', alignItems: 'center'}}
        >
          {renderDescription(props.description)}
        </motion.div>
        {props.description_line2 &&
          <motion.div
            className="container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            style={{display: 'flex', alignItems: 'center'}}
          >
            {renderDescription(props.description_line2)}
          </motion.div>
        }
      </div>
    </section>
  );
};
