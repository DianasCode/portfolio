import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>

      <h2>
        Contact
      </h2>

      <p>
        I am open to frontend development opportunities and interesting projects.
      </p>


      <div className={styles.links}>

        <a href="mailto:devbydiana@gmail.com">
          Email
        </a>


        <a
          href="https://github.com/DianasCode"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>


        <a
          href="https://www.linkedin.com/in/diana-arustamova-880755360"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </div>


    </section>
  );
}