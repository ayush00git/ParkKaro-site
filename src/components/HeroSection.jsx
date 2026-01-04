import React from 'react';
import { MapPin, Download, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import PixelBlast from './PixelBlast';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans selection:bg-orange-100 selection:text-orange-900">

      {/* --- CSS for specific infinite float animations (kept for continuous movement) --- */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(10px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
      `}</style>

      {/* --- Main Content Container --- */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          pixelSize={12}
          color="#f97316"
          patternDensity={1.2}
          className="opacity-40 pointer-events-auto"
        />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-28 md:pt-36 pb-20 flex flex-col md:flex-row items-center pointer-events-none">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 space-y-8 relative z-20"
        >

          {/* Animated Badge - Live Status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50/80 backdrop-blur-sm border border-orange-100 text-orange-700 text-sm font-bold shadow-sm pointer-events-auto"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span>Live in 50 Cities</span>
          </motion.div>

          {/* Big Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 leading-[1.05]">
            Park smarter, <br />
            not <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
              harder.
              {/* Underline squiggle */}
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                className="absolute -bottom-4 left-0 w-full h-6 text-purple-300/50"
                viewBox="0 0 200 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 21.5C25.5 8 54 2 82.5 2C149.5 2 185 18 198 21.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </motion.svg>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-lg leading-relaxed md:pr-10"
          >
            Join other active users using <span className="font-bold text-gray-900">Park Karo</span> to find, book, and pay for parking in seconds. The city is yours.
          </motion.p>

          {/* High-Impact CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 pt-4 pointer-events-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-orange-500 hover:shadow-orange-500/40 transition-colors duration-300"
            >
              <Download size={22} />
              Download App
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer flex items-center justify-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-900 border-2 border-gray-200 rounded-2xl font-bold text-lg shadow-sm hover:border-orange-300 hover:text-orange-600 transition-colors duration-300"
            >
              <MapPin size={22} />
              Explore Map
            </motion.button>
          </motion.div>

          {/* Social Proof avatars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-8 flex items-center gap-4"
          >
            <div className="flex -space-x-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden relative">
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-gray-600">
              <span className="font-bold text-gray-900">1000</span> happy parkers today.
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Visual Element (Overlapping & Floating) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 mt-20 md:mt-0 relative h-[600px] perspective-1000 pointer-events-auto"
        >

          {/* Floating Elements adding depth */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute top-0 right-10 bg-white p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-30 animate-float-medium"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-500"><MapPin size={16} fill="currentColor" /></div>
              <span className="font-bold text-gray-900">₹40/hr</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, type: "spring" }}
            className="absolute bottom-20 left-0 bg-white p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-30 animate-float-slow animation-delay-2000"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"><CheckCircle2 size={16} fill="currentColor" /></div>
              <span className="font-bold text-gray-900">Booked!</span>
            </div>
          </motion.div>


          {/* The Main Phone Visual */}
          <motion.div
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="relative z-10 w-[340px] mx-auto md:ml-auto h-[680px] bg-gray-900 rounded-[3rem] border-[12px] border-gray-900 shadow-2xl shadow-purple-900/30 overflow-hidden rotate-[-6deg] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            {/* Screen Content Mockup */}
            <div className="w-full h-full bg-white relative flex flex-col">
              {/* Mockup Header */}
              <div className="p-6 flex justify-between items-center bg-white z-10 relative">
                <div className="font-bold text-xl">Park<span className="text-orange-500">Karo</span></div>
                <div className="w-8 h-8 rounded-full bg-gray-100"></div>
              </div>

              {/* Mockup Map Area (Gradient placeholder) */}
              <div className="flex-1 bg-slate-50 relative overflow-hidden">
                {/* Abstract map shapes */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full blur-xl"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200 rounded-full blur-xl"></div>
                </div>

                {/* Central Pin on map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-30"></span>
                    <div className="relative inline-flex rounded-full h-16 w-16 bg-gradient-to-r from-orange-500 to-purple-600 items-center justify-center shadow-lg">
                      <MapPin size={32} color="white" fill="white" />
                    </div>
                  </div>
                  <div className="mt-4 bg-white px-4 py-2 rounded-xl shadow-lg font-bold text-gray-900">
                    Target Location
                  </div>
                </div>
              </div>

              {/* Mockup Bottom Sheet */}
              <div className="bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] p-6 relative z-20 space-y-4">
                <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-2"></div>
                <div className="font-bold text-lg">Nearest Spot found!</div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl font-black text-purple-600">P</div>
                    <div>
                      <div className="font-bold">Regent Street Garage</div>
                      <div className="text-sm text-gray-500">2 min walk</div>
                    </div>
                  </div>
                  <div className="text-orange-600 font-bold">₹80</div>
                </div>
                <button className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold text-lg">
                  Swipe to book
                </button>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
};

export default HeroSection;