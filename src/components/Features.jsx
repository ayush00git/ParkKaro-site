import React from 'react';
import {
  MapPin,
  CreditCard,
  CalendarClock,
  ShieldCheck,
  Zap,
  Heart,
  User,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const ParkKaroLanding = () => {
  const parkingSpots = [
    {
      id: 1,
      title: "Sharma Parking",
      location: "Dev Pal Chowk,Hamirpur",
      type: "Open Parking",
      price: "58",
      area: "200 sq.ft",
      host: "Rahul Waghmare",
      liveBookings: 6,
      image: "https://t4.ftcdn.net/jpg/03/30/78/77/240_F_330787755_RSUhTI7LvN3UUvGWus7t90Sh8yACJ8Lb.jpg"
    },
    {
      id: 2,
      title: "Planet i Parking",
      location: "Kohta , Hamirpur",
      type: "Open Parking",
      price: "145",
      area: "20 sq.ft",
      host: "Sachin Pawar",
      liveBookings: 12,
      image: "https://t4.ftcdn.net/jpg/06/04/96/89/240_F_604968950_2DLaiGU4qQZFWAx8RwDeVOFoGazaR13l.jpg"
    },
    {
      id: 3,
      title: "Arpit Covered Space",
      location: "Pratab Nagar, Hamirpur",
      type: "Covered Parking",
      price: "130",
      area: "180 sq.ft",
      host: "Arpit Singh",
      liveBookings: 4,
      image: "https://media.istockphoto.com/id/1191167782/photo/carport-of-modern-and-luxury-house.jpg?s=612x612&w=0&k=20&c=0m2l3unVVHKCV5KD42Zh-R9H02bl3ZJe_ufYK9soLfA="
    }
  ];

  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">

      {/*SECTION 1: FEATURES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-bold mb-6">
              <Zap size={14} className="fill-orange-500" />
              <span>Premium Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Parking reimagined for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                the modern driver.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Feature 1: Smart Navigation */}
            <motion.div variants={itemVariants} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 cursor-pointer">
              <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1573108724029-4c46571d6490?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-white mb-6">
                  <MapPin size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Smart Navigation</h3>
                <p className="text-gray-200 text-lg">Navigate directly to open spots with live tracking in 50+ cities.</p>
              </div>
            </motion.div>

            {/* Feature 2: Frictionless Payments */}
            <motion.div variants={itemVariants} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 cursor-pointer">
              <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-purple-800/20 mix-blend-multiply opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full z-10">
                <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/30">
                  <CreditCard size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Zero-Touch Payments</h3>
                <p className="text-purple-100 text-lg">Automatic deductions via FastTag or UPI. Exit without waiting.</p>
              </div>
            </motion.div>

            {/* Feature 3: Reserve in Advance (RESTORED) */}
            <motion.div variants={itemVariants} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 bg-white border border-gray-100">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-[80px] opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-[80px] opacity-40"></div>
              <div className="relative z-10 h-full flex flex-col justify-between p-10">
                <div>
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 border border-purple-100">
                    <CalendarClock size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Reserve in Advance</h3>
                  <p className="text-gray-500 text-lg">Secure your spot for concerts or flights days before you leave home.</p>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "75%" }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-gradient-to-r from-orange-400 to-purple-500" />
                </div>
              </div>
            </motion.div>

            {/* Feature 4: Verified Safety (RESTORED) */}
            <motion.div variants={itemVariants} className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 cursor-pointer">
              <motion.img whileHover={{ scale: 1.05 }} src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-green-400 font-bold uppercase text-xs tracking-widest">Verified Secure</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Safety First</h3>
                <p className="text-gray-300 text-lg">24/7 surveillance and well-lit environments for your peace of mind.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/*SECTION 2: FREQUENTLY BOOKED*/}
      <section className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
                Frequently <span className="text-orange-500">Booked</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-xl">
                Discover the most trusted and highly-rated parking spaces chosen by ParkKaro users.
              </p>
            </motion.div>
            <motion.button whileHover={{ x: 5 }} className="flex items-center gap-2 text-purple-600 font-bold group">
              Explore Map <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {parkingSpots.map((spot) => (
              <motion.div
                key={spot.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-200/30 border border-gray-100 group flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden">
                  <img src={spot.image} alt={spot.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    LIVE BOOKINGS: {spot.liveBookings}
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors">
                    <Heart size={18} />
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-lg shadow-lg uppercase tracking-wider">
                      {spot.type}
                    </span>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight group-hover:text-orange-600 transition-colors">{spot.title}</h3>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <MapPin size={12} />
                        <span className="truncate w-32">{spot.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-gray-400 font-black uppercase tracking-tighter">Host</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] font-bold text-gray-700">{spot.host.split(' ')[0]}</span>
                        <div className="w-7 h-7 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 border border-purple-100">
                          <User size={14} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="bg-gray-50 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-md border border-gray-100 flex items-center gap-1">
                      <ShieldCheck size={12} className="text-green-500" /> Host Approval
                    </span>
                    <span className="bg-gray-50 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-md border border-gray-100">
                      Security+
                    </span>
                  </div>

                  <div className="mt-auto border-t border-gray-100 pt-6 flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rate</p>
                      <p className="text-2xl font-black text-gray-900">₹{spot.price}<span className="text-xs text-gray-400 font-medium ml-1">/day</span></p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Space</p>
                      <p className="text-sm font-bold text-gray-700">{spot.area.split(' ')[0]} sqft</p>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-purple-600 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-orange-100"
                  >
                    Book Space Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ParkKaroLanding;