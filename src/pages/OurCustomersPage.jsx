import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Smile, Linkedin, Twitter, Github } from 'lucide-react';

const OurCustomersPage = () => {
    const stats = [
        { label: "Active Users", value: "1000", icon: Users, color: "text-blue-500" },
        { label: "Parking Spots", value: "300", icon: MapPinIcon, color: "text-orange-500" },
        { label: "Cities Covered", value: "50", icon: Award, color: "text-purple-500" },
        { label: "Happy Customers", value: "98%", icon: Smile, color: "text-green-500" },
    ];

    // Helper component for Icon to avoid ReferenceError if MapPinIcon is not imported or defined in stats loop
    // Actually I see I missed importing MapPinIcon or defining it. I'll use MapPin from lucide-react.

    const team = [
        {
            name: "Aditya Sharma",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            bio: "Visionary leader with a passion for urban mobility solutions."
        },
        {
            name: "Priya Patel",
            role: "CTO",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            bio: "Tech enthusiast driving the innovation behind ParkKaro."
        },
        {
            name: "Rohan Gupta",
            role: "Head of Operations",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            bio: "Ensuring smooth parking experiences for every user."
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
                    >
                        Trusted by Thousands
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        We're building the future of parking with a community that trusts us.
                        Here's the impact we've made together.
                    </motion.p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-md ${stat.color}`}>
                                {/* Using a generic rendered icon if possible, but for now assuming direct component typical usage */}
                                <stat.icon size={24} />
                            </div>
                            <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Team Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
                        <p className="text-gray-600">The passionate people behind ParkKaro.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {team.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                                    <img src={member.image} alt={member.name} className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold">{member.name}</h3>
                                    <p className="text-orange-400 font-medium mb-2">{member.role}</p>
                                    <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{member.bio}</p>

                                    <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                                        <a href="#" className="hover:text-orange-400 transition-colors"><Linkedin size={20} /></a>
                                        <a href="#" className="hover:text-orange-400 transition-colors"><Twitter size={20} /></a>
                                        <a href="#" className="hover:text-orange-400 transition-colors"><Github size={20} /></a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
// Small fix to ensure MapPinIcon is defined or imported. 
// I used MapPinIcon in the array but imported Users, Award, TrendingUp, Smile.
// Let me correct the imports in the file write.

import { MapPin } from 'lucide-react';
const MapPinIcon = MapPin; // Alias for the array usage

export default OurCustomersPage;
