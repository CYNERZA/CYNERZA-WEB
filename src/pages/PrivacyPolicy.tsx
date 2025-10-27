import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {

    const isDarkMode = useSelector((state: any) => state.theme.isDarkMode);
    return (
        <div className="relative pt-24 md:pt-28 w-full px-4 sm:px-6 lg:px-8">
            {/* Purple gradient background overlay */}
            {isDarkMode &&
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-5" />
            }
            {/* Content wrapper */}
            <div className="relative z-10">
                <div className="max-w-3xl mx-auto px-4 py-10 text-slate-800 dark:text-slate-300">
                    <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-200">Privacy Policy</h1>
                    <p className="mb-4 text-slate-800 dark:text-slate-300">
                        At <strong>Cynerza</strong>, your privacy is important to us. This Privacy Policy explains what information we collect from users of our AI tools and platform, how we use it, and your rights regarding your data.
                    </p>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Information We Collect</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Account details such as name, email address, and organization upon signup.</li>
                            <li>Usage data, including tools accessed (e.g., Ad Copy Generator, Script Creator, Summarizer, AI Image Generator, Background Remover, Image Enhancer, Text to Speech, Voice Cloner) and actions performed on the platform.</li>
                            <li>Technical data such as IP address, browser type, device information, and cookie data for analytics and security purposes.</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>To provide and improve AI tools and platform functionality for content, image, and speech generation.</li>
                            <li>For analytics, product improvements, security, and customer support.</li>
                            <li>To communicate about new features, updates, and offer personalized recommendations.</li>
                            <li>To prevent misuse and ensure fair use of our AI services.</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Cookies & Tracking</h2>
                        <p>
                            Cookies and similar technologies help enhance your experience, analyze site usage, and remember your preferences. You may control cookies through your browser tools.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Third-Party Services</h2>
                        <p>
                            We use trusted third-party services for hosting, analytics, payments, and platform enhancements, all of whom are required to meet our privacy and security standards.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Your Rights & Choices</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Access, update, or delete your personal data at any time via your account dashboard or by contacting us.</li>
                            <li>Opt out of non-essential communications and some portions of data collection via your settings or browser controls.</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Data Security</h2>
                        <p>
                            We utilize industry-standard measures (encryption, access control, periodic review) to protect your data from unauthorized access, alteration, or disclosure.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Contact Us</h2>
                        <p>
                            Questions about this Privacy Policy or our data practices? Please contact us through the website's <Link to="/contact" className="text-blue-600 underline">contact page</Link>.
                        </p>
                    </div>

                    <p className="text-sm text-gray-500 mt-8">Last updated: August 26, 2025</p>
                </div>
            </div>
        </div>
    )
}


export default PrivacyPolicy;
