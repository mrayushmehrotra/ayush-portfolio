import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import gsap from "gsap";

const ServiceCard = ({ index, title, icon, stack }) => {
  const handleMouseEnter = (e) => {
    const cardAnime = e.currentTarget.querySelector(".cardAnime");
    gsap.to(cardAnime, {
      y: -10, // Slide up slightly
      opacity: 1, // Fully visible
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (e) => {
    const cardAnime = e.currentTarget.querySelector(".cardAnime");
    gsap.to(cardAnime, {
      y: 90, // Slide back down
      opacity: 0, // Fade out
      duration: 0.5,
      ease: "power3.in",
    });
  };

  return (
    <Tilt
      className="xs:w-[250px] w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          className=" text-white font-black  text-[30px]
            cardAnime bg-tertiary   h-[calc(100%-1rem)] m-[-16]  w-[calc(100%-2rem)] ml-4 rounded-[20px] py-3 px-5  relative"
          style={{
            transform: "translateY(90px)", // Initial position off-screen
            opacity: 0, // Initially hidden
          }}
        >
          {stack}
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a software developer specializing in TypeScript, JavaScript, React,
        Node.js, and Three.js. I build efficient, user-friendly solutions and
        collaborate to turn ideas into reality.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
