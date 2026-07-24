import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <p>
        © {new Date().getFullYear()} Diana Arustamova. All rights reserved.
      </p>

    </footer>
  );
}