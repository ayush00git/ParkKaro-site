import React from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-white pt-28 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Terms and Conditions</h1>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                        <p>Welcome to ParkKaro. These Terms and Conditions govern your use of our website and mobile application. By accessing or using our service, you agree to be bound by these terms.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. User Accounts</h2>
                        <p>To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Parking Services</h2>
                        <p>ParkKaro connects drivers with parking space owners. We do not own or operate the parking spaces listed on our service. We are not responsible for the security or condition of any parking space.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payments</h2>
                        <p>All payments are processed securely through our third-party payment processors. ParkKaro charges a service fee for each booking, which is displayed before you confirm your booking.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cancellation Policy</h2>
                        <p>Cancellations are subject to the specific policy set by the parking space owner. Please review the cancellation policy for each listing before booking.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law, ParkKaro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Changes to Terms</h2>
                        <p>We reserve the right to modify these terms at any time. We will always post the most current version on our website. By continuing to use the service after changes become effective, you agree to be bound by the revised terms.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us at support@parkkaro.com.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
