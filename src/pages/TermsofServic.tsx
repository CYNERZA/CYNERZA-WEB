import React from "react";
import { Link } from "react-router-dom";

const TermsOfService: React.FC = () => (
    <div className="max-w-3xl mx-auto px-4 py-10 text-slate-800 dark:text-slate-300">
        <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-200">Terms of Service</h1>
        <p className="mb-4">
            Welcome to <strong>Cynerza</strong> . By accessing or using our AI tools and digital solutions, you agree to these Terms of Service. Please read them carefully before using our services.
        </p>

        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Use of Services</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>You must be at least 18 years old to use our platform.</li>
                <li>Use Cynerza’s AI tools, apps, and related content lawfully and in accordance with these terms.</li>
                <li>Do not misuse, reverse engineer, or attempt to gain unauthorized access to any part of our service.</li>
            </ul>
        </div>

        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Accounts & Security</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>divtain the confidentiality of your account credentials.</li>
                <li>Notify us immediately if you suspect unauthorized use or security breaches related to your account.</li>
            </ul>
        </div>

        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Acceptable Use</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>No posting of offensive, illegal, or infringing content through our platform.</li>
                <li>No attempts to disrupt, spam, or overload our systems.</li>
                <li>No use of Cynerza products for fraudulent or malicious activities.</li>
            </ul>
        </div>

        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Intellectual Property</h2>
            <p>
                All software, content, graphics, and branding on this site rediv the property of Cynerza or its licensors. Do not copy, reuse, or distribute Cynerza’s technology or trademarks without permission.
            </p>
        </div>

        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Services & Modifications</h2>
            <p>
                We may update, suspend, or discontinue any service feature at any time. Notice will be provided for material changes whenever possible.
            </p>
        </div>

        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Liability & Disclaimers</h2>
            <ul className="list-disc list-inside space-y-1">
                <li>Cynerza offers services “as is” and “as available,” and does not guarantee uninterrupted or error-free operation.</li>
                <li>Cynerza is not liable for indirect or consequential losses resulting from platform use.</li>
            </ul>
        </div>

        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Termination</h2>
            <p>
                We reserve the right to terminate or suspend accounts that violate these Terms or applicable laws, at our sole discretion.
            </p>
        </div>

        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-200">Contact</h2>
            <p>
                For questions about these Terms, contact us at <Link to="/contact" className="text-blue-600 underline">our contact page</Link>.
            </p>
        </div>

        <p className="text-sm text-gray-500 mt-8">Last updated: August 26, 2025</p>
    </div>
);

export default TermsOfService;
