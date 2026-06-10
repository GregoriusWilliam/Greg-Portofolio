import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ReactTyped } from "react-typed";
import { personalDetails } from "../Details";

function Home() {
  const { tagline, name } = personalDetails;

  const h12 = useRef();
  const h13 = useRef();
  const container = useRef();
  const fishingLine = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(h12.current, {
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: "bounce.out",
    }).from(
      h13.current,
      {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "Power3.easeOut",
      },
      "-=0.5"
    );

    // Create bubbles
    const bubbleCount = 20;
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      const size = Math.random() * 20 + 10 + "px";
      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.left = Math.random() * 100 + "vw";
      bubble.style.setProperty("--duration", Math.random() * 10 + 5 + "s");
      bubble.style.setProperty("--drift", (Math.random() - 0.5) * 200 + "px");
      bubble.style.animationDelay = Math.random() * 5 + "s";
      container.current.appendChild(bubble);
    }

    // Fishing line animation
    gsap.to(fishingLine.current, {
      height: "60vh",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <main 
      ref={container}
      className="bg-sunset-gradient min-h-[150vh] flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* Sunset Sky Area */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0">
        {/* The Sun - Scaled for mobile */}
        <div className="absolute top-32 md:top-40 left-1/2 -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 bg-[#feb47b] rounded-full sunset-glow animate-pulse"></div>
        
        {/* Clouds - Hidden on small mobile to reduce clutter */}
        <div className="hidden sm:block absolute top-32 left-[10%] w-32 h-8 bg-white/20 pixel-border border-white/10"></div>
        <div className="hidden sm:block absolute top-48 right-[15%] w-48 h-12 bg-white/10 pixel-border border-white/5"></div>

        {/* The Pier/Dock (Dave sits here) - Responsive width */}
        <div className="absolute bottom-[20vh] left-0 w-3/4 md:w-1/2 h-12 md:h-16 bg-[#2D1B14] pixel-border z-10 flex items-center justify-start px-4 md:px-10">
          <div className="absolute -top-16 md:-top-20 right-4 md:right-10 w-20 h-20 md:w-24 md:h-24 z-20 scale-75 md:scale-100 origin-bottom-right">
            {/* Detailed Dave Silhouette (Back view) */}
            <div className="relative w-full h-full">
              {/* Head with Hood */}
              <div className="absolute top-2 left-6 w-10 h-10 bg-[#1a1a1a] pixel-border border-r-[#feb47b]"></div>
              
              {/* Body / Torso */}
              <div className="absolute top-11 left-4 w-14 h-12 bg-[#1a1a1a] pixel-border border-r-[#feb47b]">
                {/* Scuba Tank on Back */}
                <div className="absolute top-1 left-[-4px] w-4 h-10 bg-[#111] pixel-border border-l-gray-600"></div>
              </div>

              {/* Dangling Legs */}
              <div className="absolute top-[58px] left-6 w-4 h-8 bg-[#1a1a1a] pixel-border"></div>
              <div className="absolute top-[58px] left-12 w-4 h-8 bg-[#1a1a1a] pixel-border"></div>

              {/* Fishing Rod */}
              <div className="absolute -right-16 top-6 w-24 h-1 bg-[#000] origin-left -rotate-12">
                 <div className="absolute -left-1 -top-1 w-3 h-3 bg-gray-800 rounded-full"></div>
                 {/* Fishing Line */}
                 <div 
                    ref={fishingLine}
                    className="absolute right-0 top-0 w-[2px] bg-white/40 origin-top h-0 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                 >
                   <div className="absolute bottom-0 -left-1">
                      <div className="w-3 h-4 border-b-2 border-l-2 border-white/60 rounded-bl-lg"></div>
                      <div className="absolute -bottom-2 -left-4 w-8 h-2 bg-white/20 rounded-full animate-ping"></div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Fish Bucket */}
            <div className="absolute bottom-0 left-[-20px] w-8 h-8 bg-gray-600 pixel-border z-30">
              <div className="w-full h-2 bg-black/40"></div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-3 border-2 border-black rounded-t-lg"></div>
            </div>
          </div>
        </div>

        {/* Sea Level Surface with swimming fish */}
        <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-[#2575fc]/40 backdrop-blur-sm border-t-4 border-white/30 z-20 overflow-hidden">
          <div className="w-full h-full animate-wave relative">
            {/* Animated Fish in Water - Scaled down for mobile */}
            <div className="absolute top-10 left-1/4 opacity-40 animate-fish-swim scale-75">
               <div className="w-6 h-3 bg-yellow-400 pixel-border"></div>
            </div>
            <div className="absolute top-20 left-2/3 opacity-30 animate-fish-swim [animation-delay:2s] scale-75">
               <div className="w-8 h-4 bg-orange-400 pixel-border"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="z-30 px-4 mt-[30vh] md:mt-[20vh]">
        <h1
          ref={h12}
          className="text-4xl md:text-6xl xl:text-8xl font-title tracking-widest drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        >
          <ReactTyped
            strings={[name]}
            typeSpeed={100}
            backSpeed={50}
            loop={false}
            showCursor={false}
          />
        </h1>

        <h2
          ref={h13}
          className="text-xl md:text-4xl xl:text-5xl font-pixel mt-6 md:mt-8 drop-shadow-lg uppercase tracking-[0.1em] md:tracking-[0.2em]"
        >
          {tagline}
        </h2>
        
        <div className="mt-20 md:mt-32 animate-bounce scale-75 md:scale-100">
          <p className="text-white font-pixel text-xl md:text-2xl mb-4 tracking-widest uppercase">DIVE INTO THE BLUE HOLE</p>
          <svg className="w-10 h-10 md:w-12 md:h-12 text-dave-sun mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Underwater Bubbles (Will be visible when scrolling) */}
      <div className="absolute bottom-[-100vh] w-full h-[100vh]">
        {/* Bubbles generated by useEffect will be here */}
      </div>
    </main>
  );
}

export default Home;
