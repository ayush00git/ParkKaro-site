import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, ArrowRight, Heart, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-gray-400 font-sans relative overflow-hidden"
    >

      {/* --- Background Decor --- */}
      {/* A faint gradient glow at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">

        {/* --- Top Section: CTA & Brand --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 border-b border-gray-800 pb-12">

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Ready to park <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">
                smarter?
              </span>
            </h2>
            <p className="text-lg max-w-md">
              Join the community of multiple drivers saving time and money every day.
            </p>

          </div>

          <div className="lg:pl-20">
            <h3 className="text-white font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="mb-6 text-sm">Get the latest parking hacks and exclusive discounts delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-xl w-full focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-purple-600 p-3 rounded-xl text-white hover:opacity-90 transition-opacity"
              >
                <ArrowRight size={24} />
              </motion.button>
            </div>
          </div>

        </div>

        {/* --- Middle Section: Links --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="text-2xl font-black tracking-tighter text-white mb-4">
              Park<span className="text-orange-500">Karo</span>.
            </div>
            <p className="text-sm leading-relaxed">
              Making cities more accessible, one parking spot at a time. Designed with ❤️ in India.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a> <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded ml-2">Hiring</span></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Find Parking</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">List Your Space</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Business Solutions</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                <a href="#" className="hover:text-white transition-colors">hello@parkkaro.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gray-500" />
                <a href="#" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gray-500 mt-1" />
                <span>123, Startup Hub, Cyber City, Gurugram, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-gray-500">
            &copy; {new Date().getFullYear()} Park Karo Technologies Pvt Ltd. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <span>Made with</span>
            <Heart size={14} className="fill-orange-500 text-orange-500 animate-pulse" />
            <span>in India</span>
          </div>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;