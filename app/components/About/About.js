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
          opacity:0,
          y:50
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:0.8
        }}

      >

        <p className={styles.label}>
          ABOUT ME
        </p>



        <h2>

          Building modern web experiences

          <span>
            with clean design and powerful technologies.
          </span>

        </h2>





        <p className={styles.text}>

          I am a Frontend Developer focused on creating
          modern, responsive and user-friendly web applications.

          I work with React, Next.js and TypeScript to build
          fast and scalable interfaces with attention to
          performance, accessibility and design.

          I create real-world projects including AI-powered
          applications, authentication systems, dashboards
          and database-driven platforms using technologies
          like Supabase and Vercel.

          I started my frontend journey in 2024 and continue
          improving my skills by building practical projects
          and exploring modern web technologies.

        </p>





        <div className={styles.info}>


          <div>

            <strong>
              2024
            </strong>

            <p>
              Started Frontend Development
            </p>

          </div>





          <div>

            <strong>
              Next.js
            </strong>

            <p>
              Modern Web Applications
            </p>

          </div>





          <div>

            <strong>
              AI + Supabase
            </strong>

            <p>
              Full-stack Projects
            </p>

          </div>



        </div>


      </motion.div>


    </section>
  );
}
