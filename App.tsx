
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar />
      <main className="flex-grow pt-16">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services">
          <Services />
        </section>

        <section id="why-me">
          <WhyChoose />
        </section>

        <section id="about" className="bg-slate-50">
          <About />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="contact" className="bg-slate-50">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
