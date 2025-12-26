import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "How does Park Karo work?",
    answer: "It's simple. Search for a location, choose a parking spot that fits your needs (price, distance, amenities), and book it instantly. You'll receive a digital pass to enter and exit the spot—hassle-free."
  },
  {
    question: "Can I cancel my booking if my plans change?",
    answer: "Yes! We offer free cancellation up to 1 hour before your booking starts. Refunds are processed instantly to your original payment method."
  },
  {
    question: "Is my vehicle safe in these parking spots?",
    answer: "Safety is our priority. We only list 'Verified' spots that meet our strict security criteria, including adequate lighting, fencing, and often CCTV or security guard presence."
  },
  {
    question: "How do I pay? Do you accept FastTag?",
    answer: "We support all major payment methods including UPI, Credit/Debit cards, and Net Banking. Yes, select malls and garages on our platform now support automatic FastTag deduction for seamless entry/exit."
  },
  {
    question: "How do I list my empty driveway or garage?",
    answer: "Listing is easy and free. Simply go to the 'Host' section in our app, upload photos of your space, set your availability schedule, and choose your hourly or monthly pricing. Your spot will be live after a quick verification check."
  },
  {
    question: "How and when do I get paid for my bookings?",
    answer: "Earnings are automatically transferred to your linked bank account or UPI ID on a weekly basis. You can track all your past and upcoming bookings, as well as your total revenue, directly from the host dashboard."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden">

      {/* --- Background Decor --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        ></motion.div>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">

        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need to know about the product and billing.
          </p>
        </motion.div>

        {/* --- Accordion --- */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className={`group rounded-3xl border transition-all duration-300 overflow-hidden ${openIndex === index
                  ? 'bg-white border-purple-200 shadow-xl shadow-purple-900/5'
                  : 'bg-white border-gray-100 hover:border-gray-200'
                }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'
                  }`}>
                  {item.question}
                </span>
                <span className={`ml-6 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                    ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white rotate-180'
                    : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                  }`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 md:px-8 pb-8 text-gray-500 leading-relaxed text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* --- Contact Support Box --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 text-center"
        >
          <h4 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h4>
          <p className="text-gray-500 mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors"
            >
              <MessageCircle size={18} />
              Chat with us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:border-purple-200 hover:text-purple-600 transition-colors"
            >
              <Mail size={18} />
              Email Support
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;