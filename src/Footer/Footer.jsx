import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import logo from "../image/logo.png";

function Footer() {
  // Defines the dark green background consistent with the rest of the site
  const darkGreenBg = "bg-[#1F271D]";

  return (
    <footer
      className={`text-white ${darkGreenBg} py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1. Left Column: Logo, Tagline, and Social Links */}
        <div className="col-span-2 lg:col-span-1 space-y-6">
          {/* Logo/Brand Name with Image Placeholder */}
          <div className="flex items-center space-x-2 border border-white/50 p-2 w-max">
            <img
              src={logo}
              alt="FloraVision Logo"
              className="w-12 h-12"
            />
            <span className="text-3xl font-bold tracking-widest">
              FloraVision.
            </span>
          </div>

          {/* Tagline */}
          <p className="text-base text-white/80 max-w-xs">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>

          {/* Social Icons (using Lucide icons) */}
          <div className="flex space-x-6 pt-4">
            <Facebook className="w-6 h-6 hover:text-green-400 transition-colors cursor-pointer" />
            <Twitter className="w-6 h-6 hover:text-green-400 transition-colors cursor-pointer" />
            <Linkedin className="w-6 h-6 hover:text-green-400 transition-colors cursor-pointer" />
            {/* The design uses 'FB', 'TW', 'LI' as text, but modern design often prefers icons. 
                            If you want the text: 
                            <span className="font-bold">FB</span> <span className="font-bold">TW</span> <span className="font-bold">LI</span>
                        */}
          </div>
        </div>

        {/* 2. Middle Column: Quick Links */}
        <div className="col-span-1 space-y-4">
          <h4 className="text-xl font-bold mb-4">Quick Link's</h4>
          <nav className="space-y-3 text-lg font-medium text-white/80">
            <a
              href="#"
              className="block hover:text-green-400 transition-colors underline-offset-4 hover:underline"
            >
              Home
            </a>
            <a
              href="#"
              className="block hover:text-green-400 transition-colors underline-offset-4 hover:underline"
            >
              Type's Of Plant's
            </a>
            <a
              href="#"
              className="block hover:text-green-400 transition-colors underline-offset-4 hover:underline"
            >
              Contact
            </a>
            <a
              href="#"
              className="block hover:text-green-400 transition-colors underline-offset-4 hover:underline"
            >
              Privacy
            </a>
          </nav>
        </div>

        {/* 3. Right Column: Newsletter Subscription */}
        <div className="col-span-2 lg:col-span-2 space-y-4">
          <h4 className="text-xl font-bold mb-4">For Every Update.</h4>
          <div className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 bg-black/30 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-green-400 rounded-l-lg"
            />
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-r-lg hover:bg-gray-200 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center lg:text-right">
        <p className="text-sm text-white/60">FloraVision © all right reserve</p>
      </div>
    </footer>
  );
}

export default Footer;
