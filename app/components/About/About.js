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
  Passionate Frontend Developer focused on building modern,
  responsive, and user-friendly web applications.

  Using React, Next.js, and TypeScript to create fast,
  scalable interfaces with a strong emphasis on performance,
  accessibility, and clean design.

  Experience includes developing real-world projects such as
  AI-powered applications, authentication systems,
  dashboards, and database-driven platforms with technologies
  like Supabase and Vercel.

  Since starting the frontend journey in 2024, continuous
  learning has remained a priority through hands-on projects
  and exploring the latest web technologies.
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
