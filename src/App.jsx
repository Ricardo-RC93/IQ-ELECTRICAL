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

      {/* Floating Emergency Call Button - Mobile Only */}
      <a
        href="tel:+12126960824"
        className="md:hidden fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Emergency Call"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span className="absolute -top-1 -right-1 bg-yellow-400 text-red-900 text-xs font-bold px-2 py-0.5 rounded-full">
          24/7
        </span>
      </a>
    </div>
  );
}

export default App;
