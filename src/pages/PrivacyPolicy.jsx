import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white pt-28 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
                        <p>We collect information you provide directly to us, such as when you create an account, update your profile, make a booking, or communicate with us. This may include your name, email address, phone number, and payment information.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our services, including to process transactions, send you related information, and verify your identity.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
                        <p>We may share your information with parking space owners to facilitate your bookings. We do not sell your personal information to third parties.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Location Data</h2>
                        <p>If you consent, we may collect information about your actual location to provide location-based services, such as finding nearby parking spaces.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
                        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies</h2>
                        <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Changes to This Policy</h2>
                        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at privacy@parkkaro.com.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
