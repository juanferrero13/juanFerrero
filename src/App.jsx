import './App.css';
import { AboutMe, Contact, Footer, Home, Navbar, Projects, ScrollTopBtn, Technology } from "./components";

function App() {
  return (
    <>
      <Navbar />

      <section id="home" >
        <Home />
      </section>

      <section id="aboutme">
        <AboutMe />
      </section>

      <section id="technology">
        <Technology />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <ScrollTopBtn />
    </>
  );
}

export default App
