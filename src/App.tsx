import { useSmoothScroll } from "./hooks/useSmoothScroll";
import CanopyGlow from "./components/CanopyGlow";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import CurrentlyExploring from "./components/CurrentlyExploring";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <CanopyGlow />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <CurrentlyExploring />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
