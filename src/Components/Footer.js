import React from "react";

function Footer() {
  return (
    <footer className="bg-black py-16 border-t-8 border-dave-sun relative overflow-hidden">
      {/* Fishing Animation in Footer */}
      <div className="absolute top-0 right-10 w-32 h-32 opacity-60 pointer-events-none">
        <div className="relative w-full h-full scale-75 origin-top-right">
          {/* Dave Silhouette */}
          <div className="absolute top-2 left-6 w-10 h-10 bg-[#1a1a1a] pixel-border border-r-gray-600"></div>
          <div className="absolute top-11 left-4 w-14 h-12 bg-[#1a1a1a] pixel-border border-r-gray-600"></div>
          
          {/* Rod with Cast & Reel Animation */}
          <div className="absolute -left-12 top-6 w-16 h-1 bg-black origin-right animate-cast-rod">
            {/* Fishing Line with Dynamic Scaling */}
            <div className="absolute left-0 top-0 w-[2px] bg-white/40 origin-top animate-cast-line shadow-[0_0_8px_rgba(255,255,255,0.4)]">
              {/* The Hook/Bait */}
              <div className="absolute bottom-0 -left-1 w-2 h-3 border-b-2 border-l-2 border-dave-coral rounded-bl-lg"></div>
              {/* Water Ripple Effect */}
              <div className="absolute -bottom-1 -left-3 w-8 h-2 bg-white/20 rounded-full animate-ping opacity-0 animate-ripple-sync"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="font-title text-dave-sun text-xl tracking-widest uppercase mb-4">
          Mission Complete!
        </p>
        <p className="font-pixel text-2xl text-white opacity-80">
          Developed by <span className="text-dave-teal">Gregorius William</span> 
          <span className="mx-4 text-gray-700">|</span> 
          © 2024 - Blue Hole Edition
        </p>
        <p className="font-pixel text-lg text-gray-500 mt-2 uppercase tracking-widest">
          All Rights Reserved
        </p>
        
        <div className="mt-8 flex justify-center gap-6">
          <div className="w-12 h-1 bg-dave-sun pixel-border"></div>
          <div className="w-12 h-1 bg-dave-coral pixel-border"></div>
          <div className="w-12 h-1 bg-dave-teal pixel-border"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes cast-rod {
          0% { transform: rotate(20deg); }    /* Pulling back */
          15% { transform: rotate(-60deg); }  /* Casting forward fast */
          20% { transform: rotate(-45deg); }  /* Settle */
          80% { transform: rotate(-45deg); }  /* Waiting for fish */
          100% { transform: rotate(20deg); }  /* Reeling back in */
        }
        
        @keyframes cast-line {
          0% { height: 0px; opacity: 0; }
          15% { height: 0px; opacity: 0; }
          25% { height: 80px; opacity: 0.6; } /* Line flies out */
          80% { height: 80px; opacity: 0.6; }
          100% { height: 0px; opacity: 0; }   /* Reeled back */
        }

        @keyframes ripple-sync {
          0%, 25% { opacity: 0; }
          30%, 75% { opacity: 1; }
          80%, 100% { opacity: 0; }
        }

        .animate-cast-rod {
          animation: cast-rod 6s ease-in-out infinite;
        }
        .animate-cast-line {
          animation: cast-line 6s ease-in-out infinite;
        }
        .animate-ripple-sync {
          animation: ripple-sync 6s step-end infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
