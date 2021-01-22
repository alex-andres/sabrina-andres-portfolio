import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ServicesSection = () => {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Services>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={container}
      >
        <motion.h2 className="h2" variants={item}>
          Services offered by Sabrina
        </motion.h2>
        <motion.ul className="ul">
          <motion.li className="li" variants={item}>
            Collection Management
          </motion.li>
          <motion.li className="li" variants={item}>
            Coordination of loan terms
          </motion.li>
          <motion.li className="li" variants={item}>
            Gallery and studio visits with client
          </motion.li>
          <motion.li className="li" variants={item}>
            Curating of art projects internationally
          </motion.li>
          <motion.li className="li" variants={item}>
            Market and Art Historical Research
          </motion.li>
          <motion.li className="li" variants={item}>
            Conduct acquisitions and sales for client
          </motion.li>
          <motion.li className="li" variants={item}>
            Represent client during transactions
          </motion.li>
          <motion.li className="li" variants={item}>
            Framing, transportation and installation of artwork
          </motion.li>
        </motion.ul>
      </motion.div>
    </Services>
  );
};

export default ServicesSection;

const Services = styled.section`
  margin: 6rem auto;
  width: 90%;
  @media screen and (min-width: 1024px) {
    margin: 10rem 10rem 15rem;
  }
  .h2 {
    margin-bottom: 4.5rem;
    font-size: 3rem;
  }
  .ul {
    display: grid;
    padding: 0;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 50px;
    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, minmax(250px, 1fr));
    }
    gap: 20px;
    list-style: none;
    max-width: 90vw;
    .li {
      font-size: 2rem;
      font-weight: 500;
    }
  }
`;
