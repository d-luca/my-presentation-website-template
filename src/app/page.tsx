import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import LookingFor from "@/components/LookingFor";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import sectionsVisibilityData from "@/data/sectionsVisibility.json";

export default function Home() {
  const {
    about,
    contact,
    experience,
    footer,
    hero,
    lookingFor,
    navigationHeader,
    projects,
  } = sectionsVisibilityData;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      {navigationHeader && <Nav />}
      <main id="main-content" className="flex flex-1 flex-col">
        {hero && <Hero />}
        {about && <About />}
        {experience && <Experience />}
        {lookingFor && <LookingFor />}
        {projects && <Projects />}
        {contact && <Contact />}
      </main>
      {footer && <Footer />}
    </>
  );
}
