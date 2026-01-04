import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "Aditya Roy",
    role: "Verified User",
    location: "Mumbai",
    rating: 5,
    text: "I used to circle CP for 20 mins every morning. Now I book my spot while waiting for the elevator. This app literally gave me my mornings back.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Traveler",
    location: "Goa",
    rating: 5,
    text: "The UI is so much better than Google Maps for parking. It actually shows you the entry gate, not just the building center. Lifesaver!",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Daily Commuter",
    location: "Bangalore",
    rating: 4,
    text: "FastTag deduction is seamless. I enter the mall parking, the barrier opens, and I get a notification. No cash, no receipt, just smooth.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Priya Sethi",
    role: "Resident",
    location: "Delhi NCR",
    rating: 5,
    text: "I rent out my driveway when I'm at work. The passive income covers my own petrol costs for the month. Highly recommend for homeowners.",
    date: "1 month ago"
  }
];

const Reviews = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">

      {/* --- Dynamic Background --- */}
      {/* Soft gradient blobs moving slowly behind the cards */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[100px]"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-100/50 rounded-full blur-[100px]"
        ></motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* --- Header & Controls --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Loved by <span className="text-orange-500">Locals</span>. <br />
              Trusted by <span className="text-purple-600">Travelers</span>.
            </h2>
            <p className="text-xl text-gray-500">
              See why we are rated #1 on the App Store.
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* --- Scroll Container --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 scrollbar-hide -mx-6 px-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >

          {/* Card 0: Trust Summary (Static Stats) */}
          <div className="snap-start flex-shrink-0 w-[300px] md:w-[350px] bg-gray-900 rounded-[2.5rem] p-8 flex flex-col justify-between text-white shadow-xl shadow-gray-900/20">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <ShieldCheck size={24} className="text-green-400" />
              </div>
              <div className="text-5xl font-black mb-2">4.9</div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-gray-400 text-sm">Based on 500 reviews</p>
            </div>
            <div className="pt-8 border-t border-gray-800">
              <p className="font-bold text-lg">"Best Utility App 2025"</p>
              <p className="text-gray-500 text-sm">— TechDaily India</p>
            </div>
          </div>

          {/* Review Cards Loop */}
          {reviews.map((review) => (
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              key={review.id}
              className="snap-start flex-shrink-0 w-[350px] md:w-[450px] bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col justify-between group hover:border-purple-100 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < review.rating ? "fill-orange-400 text-orange-400" : "fill-gray-200 text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{review.date}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-normal mb-4">
                  "{review.text}"
                </h3>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-50 mt-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    {review.role} • {review.location}
                  </p>
                </div>
                <Quote size={48} className="ml-auto text-gray-100 group-hover:text-purple-50 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;