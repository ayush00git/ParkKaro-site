import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* --- Logo Section --- */}
        <Link to="/" className="flex-shrink-0 cursor-pointer group">
          <span className="text-2xl font-black tracking-tighter text-gray-900">
            Park<span className="text-orange-500 group-hover:text-purple-600 transition-colors duration-300">Karo</span>
          </span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center gap-10">

          {/* Links with animated underline */}
          <div className="flex items-center gap-8 text-sm font-semibold text-gray-600">
            {[{ name: 'Home', path: '/' }, { name: 'How it works', path: '/how-it-works' }, { name: 'Our Customers', path: '/our-customers' }].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group py-2 hover:text-gray-900 transition-colors"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 font-bold text-sm hover:bg-gray-900 hover:text-white hover:shadow-lg transition-all duration-300"
          >
            <Download size={16} />
            <span>Get App</span>
          </motion.button>
        </div>

        {/* --- Mobile Menu Button --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-900 hover:bg-gray-100 rounded-xl transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Dropdown --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-white top-[70px] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {[{ name: 'Home', path: '/' }, { name: 'How it works', path: '/how-it-works' }, { name: 'Our Customers', path: '/our-customers' }].map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.name}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-xl font-bold text-gray-900 border-b border-gray-100 pb-4"
                  >
                    {item.name}
                    <ChevronRight size={20} className="text-gray-300" />
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full flex items-center justify-center gap-2 px-5 py-4 mt-4 rounded-xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition"
              >
                <Download size={20} />
                Download App
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;