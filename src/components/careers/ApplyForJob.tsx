import React, { useState } from "react";

const JobApplicationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-gradient-to-br from-white to-blue-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white shadow-xl rounded-2xl">
        <h1 className="text-3xl font-bold mb-2 text-blue-700">Apply for Job</h1>
        <p className="mb-6 text-gray-500">We’re excited to meet talented people like you! Please fill out the form below to get started.</p>
        {submitted ? (
          <div className="text-center py-10">
            <svg className="mx-auto mb-4 w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-xl font-semibold mb-2 text-green-600">Application Submitted!</h2>
            <p className="text-gray-600">Thank you for applying. Our team will review your application and get back soon.</p>
          </div>
        ) : (
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Full Name</label>
              <input required type="text" className="w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Email Address</label>
              <input required type="email" className="w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Phone Number</label>
              <input required type="tel" className="w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">LinkedIn Profile (optional)</label>
              <input type="url" className="w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Resume / CV</label>
              <input required type="file" accept=".pdf,.doc,.docx" className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-200 transition" />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Why are you a good fit? <span className="text-xs text-gray-400">(optional)</span></label>
              <textarea className="w-full px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" rows={3}></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg transition"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default JobApplicationForm;
