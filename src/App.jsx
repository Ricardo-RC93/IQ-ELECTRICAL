import React from "react";
import NavHeader from "./Componentes/NavHear";
import Hero from "./Body/Hero";
import Services from "./Body/Services";
import About from "./Body/About";
import Contact from "./Body/Contact";
import IqFooter from "./Componentes/IqFooter";

function App() {
  return (
    <div className="App">
      <NavHeader />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <Services />
        <About />
        <Contact />
      </main>
      <IqFooter />
    </div>
  );
}

export default App;
