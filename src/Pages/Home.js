import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ReactTyped } from "react-typed";
import { personalDetails } from "../Details";

function Home() {
  const { tagline } = personalDetails;

  const h12 = useRef();
  const h13 = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(h12.current, {
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: "Power3.easeOut",
    }).from(
      h13.current,
      {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "Power3.easeOut",
      },
      "<"
    );
  }, []);

  return (
    <main className="container mx-auto max-width section flex flex-col items-center justify-center text-center h-screen relative -mt-12">
      <div>
        
        <h1
          ref={h12}
          className="text-3xl text-white md:text-5xl xl:text-6xl xl:leading-tight font-extrabold"
        >
          <ReactTyped
            strings={["Gregorius William Koswari"]}
            typeSpeed={80}
            backSpeed={50}
            loop={false}
            showCursor={true}
          />
        </h1>

     
        <h2
          ref={h13}
          className="text-xl text-white md:text-3xl xl:text-4xl xl:leading-tight font-semibold mt-4"
        >
          {tagline}
        </h2>
      </div>
    </main>
  );
}

export default Home;
