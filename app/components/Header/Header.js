import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>

      <a 
        href="#home" 
        className={styles.logo}
      >
        HOME
      </a>


      <nav className={styles.nav}>

        <a href="#about">
          About
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#skills">
          Skills
        </a>

        <a href="#contact">
          Contact
        </a>

      </nav>

    </header>
  );
}