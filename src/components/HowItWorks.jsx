import React from 'react';
import { motion } from 'framer-motion';
import { Search, CalendarCheck, Car, ArrowRight } from 'lucide-react';

// --- Data for the steps ---
const stepsData = [
    {
        id: 1,
        title: "Find your perfect spot",
        description: "Enter your destination and instantly see real-time availability. Filter by price, distance, or amenities like EV charging.",
        icon: Search,
        image: "https://ik.imagekit.io/40tzr6cnyf/swappy-20260112-011639.png", // Car navigation
        color: "orange"
    },
    {
        id: 2,
        title: "Book in seconds",
        description: "Choose your spot and reserve it ahead of time. Pay securely via UPI or card to guarantee your space before you even leave home.",
        icon: CalendarCheck,
        image: "https://ik.imagekit.io/40tzr6cnyf/swappy-20260112-012719.png", // Mobile payment
        color: "purple"
    },
    {
        id: 3,
        title: "Park seamlessly",
        description: "Navigate directly to the entrance. Use your digital pass for ticketless entry and exit. No cash, no waiting queues.",
        icon: Car,
        image: "https://ik.imagekit.io/40tzr6cnyf/swappy-20260112-012531.png", // Modern parking garage
        color: "orange"
    }
];


// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom easing for smooth finish
    }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 1, ease: "easeOut" }
    }
};


const HowItWorks = () => {
    return (
        <section className="py-24 bg-white overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- Section Header --- */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">
                        As easy as <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
                            one, two, three.
                        </span>
                    </h2>
                    <p className="text-xl text-gray-500">
                        We've simplified the parking experience down to just a few taps on your phone.
                    </p>
                </motion.div>

                {/* --- Steps Container --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="space-y-24 md:space-y-32"
                >
                    {stepsData.map((step, index) => {
                        const isEven = index % 2 !== 0;
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.id}
                                variants={itemVariants}
                                // Apply reverse flex direction if it's an even index step
                                className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 relative`}
                            >

                                {/* --- Connecting Line (Desktop Only) --- */}
                                {/* Only show if not the last item */}
                                {index !== stepsData.length - 1 && (
                                    <div className={`hidden md:block absolute top-1/2 ${isEven ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} w-px h-32 bg-gradient-to-b from-gray-200 to-transparent -z-10 transform translate-y-1/2`}></div>
                                )}


                                {/* --- Text Content Side --- */}
                                <div className="flex-1 text-left space-y-8 relative">
                                    {/* Big Number Background */}
                                    <div
                                        className={`absolute -top-20 -left-10 text-[150px] font-black leading-none opacity-5 select-none z-0 
                      ${step.color === 'orange' ? 'text-orange-500' : 'text-purple-600'}`}
                                    >
                                        0{step.id}
                                    </div>

                                    <div className="relative z-10">
                                        {/* Icon Pill */}
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-sm
                        ${step.color === 'orange' ? 'bg-orange-100 text-orange-600' : 'bg-purple-100 text-purple-600'}`}>
                                            <Icon size={32} />
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-xl text-gray-500 leading-relaxed max-w-md">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* --- Image Visual Side --- */}
                                <div className="flex-1 relative w-full">
                                    {/* Decorative Gradient Blob behind image */}
                                    <div
                                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-3xl opacity-30 -z-10
                      ${step.color === 'orange' ? 'bg-orange-200' : 'bg-purple-200'}`}
                                    ></div>

                                    {/* The Image Card */}
                                    <motion.div
                                        variants={imageVariants}
                                        className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border-4 border-white aspect-[4/3] md:aspect-auto md:h-[500px]"
                                    >
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />


                                    </motion.div>
                                </div>

                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};

export default HowItWorks;