"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";


export default function Hero() {

  return (
    <section 
      id="home" 
      className={styles.hero}
    >

      <div className={styles.glow}></div>

      <div className={styles.grid}></div>


      <motion.div
        className={styles.content}

        initial={{
          opacity: 0,
          y: 40
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1
        }}
      >


        <p className={styles.subtitle}>
          FRONTEND DEVELOPER • REACT & NEXT.JS
        </p>



        <h1>
          Diana
          <span>
            {" "}Arustamova
          </span>
        </h1>





        <motion.p

          className={styles.description}

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.5,
            duration: 1
          }}

        >

          I build modern web applications with React and Next.js.
          Creating fast, responsive and visually engaging digital
          experiences with clean design and attention to detail.

        </motion.p>





        <div className={styles.buttons}>


          <a href="#projects">
            View Projects
          </a>



          <a href="#contact">
            Contact Me
          </a>



        </div>



      </motion.div>



    </section>
  );
}
