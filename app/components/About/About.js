"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";


export default function About() {
  return (
    <section 
      id="about" 
      className={styles.about}
    >

      <motion.div

        className={styles.container}

        initial={{
          opacity: 0,
          y: 50
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        viewport={{
          once: true
        }}

        transition={{
          duration: 0.8
        }}

      >

        <p className={styles.label}>
          ABOUT ME
        </p>


        <h2>
          Creating modern websites
          <span>
            with clean and elegant design.
          </span>
        </h2>


        <p className={styles.text}>
          I am a Frontend Developer focused on creating modern,
          responsive and visually engaging websites.

          I work with React, Next.js and JavaScript to build
          fast, user-friendly websites with attention to design,
          performance and detail.

          I started my journey in frontend development in 2024
          and continue improving my skills by creating real projects.
        </p>


        <div className={styles.info}>

          <div>
            <strong>
              2024
            </strong>
            <p>
              Started Frontend Journey
            </p>
          </div>


          <div>
            <strong>
              React
            </strong>
            <p>
              Modern Websites
            </p>
          </div>


          <div>
            <strong>
              Next.js
            </strong>
            <p>
              Frontend Development
            </p>
          </div>

        </div>


      </motion.div>

    </section>
  );
}