import styles from "./Projects.module.css";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>

      <h2>
        Projects
      </h2>

      <div className={styles.card}>

        <div className={styles.image}>
         <Image
  src="/gym.png"
  alt="Web Next Gym"
  width={600}
  height={400}
  className={styles.projectImage}
/>
        </div>


        <div className={styles.content}>

          <h3>
            Web Next Gym
          </h3>

          <p>
            A modern responsive fitness website built with Next.js and React.
            Includes multilingual support, responsive design and reusable components.
          </p>


          <div className={styles.tags}>
            <span>Next.js</span>
            <span>React</span>
            <span>CSS Modules</span>
            <span>Vercel</span>
          </div>


          <div className={styles.links}>

            <a
              href="https://web-next-gym.vercel.app/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>


            <a
              href="https://github.com/DianasCode/web-next-gym"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}