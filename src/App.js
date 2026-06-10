import React, { useState, useEffect } from "react";  
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App selection:bg-dave-sun selection:text-black">
      <Header />

      <main className="bg-black">
        {/* UNDERWATER PHASE */}
        <section id="home" className="min-h-screen">
          <Home />
        </section>

        <section id="about" className="bg-dave-deep border-t-8 border-black">
          <About />
        </section>

        <section id="experience" className="bg-dave-deep/90 border-t-8 border-black">
          <Experience />
        </section>

        <section id="technologies" className="bg-dave-deep/80 border-t-8 border-black">
          <Technologies />
        </section>

        {/* SUSHI BAR PHASE */}
        <section id="projects" className="bancho-scenery border-t-8 border-dave-sun pt-20 relative">
          {/* Decorative Lanterns */}
          <div className="absolute top-10 left-10 w-12 h-16 bg-bancho-red pixel-border lantern-glow hidden md:block">
            <div className="w-full h-2 bg-black absolute top-2"></div>
            <div className="font-pixel text-white text-center mt-6 text-xs">SUSHI</div>
          </div>
          <div className="absolute top-10 right-10 w-12 h-16 bg-bancho-red pixel-border lantern-glow hidden md:block">
            <div className="w-full h-2 bg-black absolute top-2"></div>
            <div className="font-pixel text-white text-center mt-6 text-xs">OPEN</div>
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-6xl font-title text-dave-sun tracking-widest drop-shadow-lg">
                TODAY'S SPECIALS
              </h1>
              <p className="font-pixel text-2xl text-bancho-rice mt-4 uppercase italic">
                Freshly caught and ready for service
              </p>
            </div>
            <Projects />
          </div>
        </section>
      </main>

      <Footer />

      {/* OXYGEN BAR (Scroll Progress) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-64 h-8 bg-gray-900 pixel-border z-50 flex items-center px-1">
        <div className="absolute -left-12 font-pixel text-white text-xl">O2</div>
        <div 
          className={`h-4 transition-all duration-300 ${scrollProgress < 20 ? 'bg-red-500 animate-pulse' : 'bg-dave-teal'}`}
          style={{ width: `${Math.max(scrollProgress, 5)}%` }}
        ></div>
        <div className="absolute -right-16 font-pixel text-white text-xl">
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </div>
  );
}

export default App;
