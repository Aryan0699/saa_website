'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet';
// Assuming ParticlesBg is in the same folder or a subfolder
// import ParticlesBg from './ParticlesBg'; 

export default function Dashak() {
  return (
    // Make sure your root layout component toggles the 'dark' class for this to work
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* <ParticlesBg />  You can uncomment this if you have it configured */}

      {/* Meta tags */}
      <Helmet>
        <title>Dashak</title>
        <meta name="description" content="Welcome to the Dashak website" />
      </Helmet>

      {/* Foreground content */}
      <main className="relative z-10 max-w-3xl px-6 py-10 text-center">
        <h1 className="max-w-3xl text-center text-5xl font-semibold leading-tight text-gray-800 dark:text-gray-100 mb-10">
          Welcome to the{' '}
          <span className="relative whitespace-nowrap">
            <span className="relative text-white-600 dark:text-white-400">Dashak</span>
            <svg
              viewBox="0 0 190 60" // Adjusted for the word "Dashak"
              fill="none"
              className="absolute top-1/2 left-1/2 h-[500%] w-[129%] -translate-y-1/2 -translate-x-1/2"
            >
              {/* Light Mode Path (Blue) */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                strokeWidth="3"
                className="stroke-yellow-600 dark:hidden" // Visible in light mode
                d="M9,32 C25,5 165,5 181,32 C165,60 25,60 9,32"
              />
              {/* Dark Mode Path (Yellow) */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                strokeWidth="3"
                className="hidden stroke-yellow-400 dark:block" // Visible in dark mode
                d="M9,32 C25,5 165,5 181,32 C165,60 25,60 9,32"
              />
            </svg>
          </span>{' '}
          website
        </h1>

        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition">
          Learn More
        </button>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-500 dark:text-gray-400 text-sm z-10">
        © {new Date().getFullYear()} Dashak. All rights reserved.
      </footer>
    </div>
  );
}