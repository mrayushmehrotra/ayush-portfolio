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

        <label className="flex flex-col m-4">
          <div className="">
            <input
              type="text"
              name="name"
              value="ayusmehrotra007@gmail.com"
              readonly
              className="bg-tertiary caret-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            &nbsp;  &nbsp;  &nbsp;
            <a  href="mailto:ayusmehrotra007@gmail.com">
              <i class="ri-mail-send-line text-3xl"></i>
            </a>
          </div>
        </label>
        <label className="flex flex-col m-4">
          <div className="">
            <input
              type="text"
              name="name"
              value="mein.ayush.hoon"
              readonly
              className="bg-tertiary caret-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
             &nbsp;  &nbsp;  &nbsp;
            <a target="_blank" href="https://instagram.com/mein.ayush.hoon">
              <i class="ri-instagram-line text-3xl"></i>
            </a>
          </div>
        </label>
        <label className="flex flex-col m-4">
          <div className="">
            <input
              type="text"
              name="name"
              value="ayush-mehrotra-99419724b"
              readonly
              className="bg-tertiary caret-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
             &nbsp;  &nbsp;  &nbsp;
            <a target="_blank" href="https://www.linkedin.com/in/ayush-mehrotra-99419724b">
              <i class="ri-linkedin-line text-3xl"></i>
            </a>
          </div>
        </label>
        <label className="flex flex-col m-4">
          <div className="">
            <input
              type="text"
              name="name"
              value="AYUSH070707"
              readonly
              className="bg-tertiary caret-transparent py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
             &nbsp;  &nbsp;  &nbsp;
            <a target="_blank" href="https://x.com/AYUSH070707">
              <i class="ri-twitter-x-line text-3xl"></i>
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
