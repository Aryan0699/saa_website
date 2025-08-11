'use client';

import React from 'react';
import ParticlesBg from './ParticlesBg'; // background file you gave
import { Helmet } from 'react-helmet';

export default function InternBridge() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Meta tags */}
      <Helmet>
        <title>Intern Bridge</title>
        <meta name="description" content="Welcome to the Intern Bridge website" />
      </Helmet>

      {/* Particle background */}

      {/* Foreground content */}
      <main className="relative z-10 max-w-3xl px-6 py-10 text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-500 drop-shadow-lg">
          Welcome to the Intern Bridge
        </h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          This is the official Intern Bridge page. The background is an animated particles effect that adapts to light/dark theme.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition">
          Learn More
        </button>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-400 text-sm z-10">
        © {new Date().getFullYear()} Intern Bridge. All rights reserved.
      </footer>
    </div>
  );
}
