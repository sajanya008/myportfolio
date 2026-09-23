import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
        <Projects />
      <Education />
      <Contact
       />
    </main>
  );
}