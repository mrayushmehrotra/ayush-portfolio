import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <div className="m-8"></div>

        <label className="flex flex-col m-4 ">
          <div className="">
            <a href="mailto:ayusmehrotra007@gmail.com">
            <input
              type="text"
              name="name"
              value="email/ayusmehrotra007"
              readonly
              className="bg-tertiary cursor-pointer caret-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            &nbsp; &nbsp; &nbsp;
            </a>
          </div>
        </label>
        <label className="flex flex-col m-4">
          <div className="">
            <a target="_blank" href="https://instagram.com/mein.ayush.hoon">
              <input
                type="text"
                name="name"
                value="instagram/mein.ayush.hoon"
                readonly
                className="bg-tertiary  cursor-pointer caret-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              &nbsp; &nbsp; &nbsp;
            </a>
          </div>
        </label>
        <label className="flex flex-col m-4">
          <div className="">
          <a
              target="_blank"
              href="https://www.linkedin.com/in/ayush-mehrotra-99419724b"
            >
            <input
              type="text"
              name="name"
              value="linkedin/ayush-mehrotra"
              readonly
              className="bg-tertiary  cursor-pointer caret-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
           />
            &nbsp; &nbsp; &nbsp;
         
            </a>
          </div>
        </label>
        <label className="flex flex-col m-4">
          <div className="">
          <a target="_blank" href="https://x.com/AYUSH070707">
            <input
              type="text"
              name="name"
              value="x.com/AYUSH070707"
              readonly
              className="bg-tertiary  cursor-pointer caret-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            &nbsp; &nbsp; &nbsp;
           
            </a>
          </div>
        </label>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
