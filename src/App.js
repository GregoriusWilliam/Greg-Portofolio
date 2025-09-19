import React from "react";  
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  return (
    <div className="App">
      <Header />

     
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="technologies">
          <Technologies />
        </section>

        <section id="projects">
          <Projects />
        </section>

        
      </main>

      <Footer />
    </div>
  );
}

export default App;
