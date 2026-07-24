import styles from "./page.module.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";


export default function Home() {
  return (
    <main className={styles.main}>

      <Header />

      <Hero />

      <About />

      <Projects />

      <Skills />

      <Contact />

      <Footer />

    </main>
  );
}