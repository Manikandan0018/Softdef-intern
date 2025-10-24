import React from "react";
import { ShoppingBag, Search, Menu, Play, ChevronDown } from "lucide-react";
import logo from "../image/logo.png"
import bg from "../image/bg.png";
import p1 from "../image/p1.png"
import p2 from "../image/p3.png";
import p3 from "../image/p2.png";
import tp1 from "../image/tp1.png";
import TrendyPlantsSection from "./TrendyPlantsSection";

// Sample data for the testimonial and plant card
const testimonial = {
  name: "Ronnie Hamill",
  text: "I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.",
  rating: 5,
  avatarUrl: tp1, // Placeholder - replace with a real image path
};

const featuredPlant = {
  name: "Aglaonema plant",
  type: "Indoor Plant",
  imageUrl: p1, // Placeholder - replace with your plant image
};

// --- Sub-Component: Star Rating ---
// This is a simple component to render the 5-star rating
const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-500"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.636-.921 1.936 0l1.258 3.851a1 1 0 00.95.691h4.06c.969 0 1.371 1.243.588 1.81l-3.298 2.391a1 1 0 00-.364 1.118l1.258 3.851c.3.921-.755 1.688-1.538 1.118l-3.298-2.391a1 1 0 00-1.176 0l-3.298 2.391c-.783.57-1.838-.197-1.538-1.118l1.258-3.851a1 1 0 00-.364-1.118L2.003 9.279c-.783-.567-.381-1.81.588-1.81h4.06a1 1 0 00.95-.691l1.258-3.851z" />
        </svg>
      ))}
    </div>
  );
};

function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-[#1F271D]">
      {/* BACKGROUND IMAGE / OVERLAY */}
      {/* We use a complex background to match the design's dark, earthy look */}
      <div className="absolute inset-0 z-0 opacity-100">
        {/* The main green blur/texture overlay */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          {/* Optional: Dark green overlay for deep contrast */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- TOP NAVIGATION --- */}
        <header className="flex justify-between items-center py-6 border-b border-white/10">
          <div className="flex items-center space-x-2">
            {/* Logo/Brand Name */}
            <span className="text-2xl font-bold text-white tracking-widest flex items-center">
              <img
                src={logo}
                alt="FloraVision Logo"
                className="w-6 h-6 mr-2"
              />{" "}
              {/* Placeholder */}
              FloraVision.
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10 text-lg font-medium">
            <a href="#" className="hover:text-green-300 transition-colors">
              Home
            </a>
            <div className="relative group">
              <button className="flex items-center hover:text-green-300 transition-colors">
                Plants Type <ChevronDown size={16} className="ml-1" />
              </button>
              {/* Dropdown Placeholder */}
            </div>
            <a href="#" className="hover:text-green-300 transition-colors">
              More
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              Contact
            </a>
          </nav>

          {/* Icons (Search, Cart, Menu) */}
          <div className="flex items-center space-x-6">
            <Search className="h-6 w-6 cursor-pointer hover:text-green-300 hidden sm:block" />
            <ShoppingBag className="h-6 w-6 cursor-pointer hover:text-green-300" />
            <Menu className="h-6 w-6 cursor-pointer md:hidden" />
          </div>
        </header>

        {/* --- HERO BODY CONTENT (Splits into 2/3 and 1/3) --- */}
        <div className="pt-20 lg:pt-32 pb-20 grid lg:grid-cols-3 gap-12">
          {/* 1. LEFT COLUMN: Text, CTAs, and Testimonial (2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-7xl md:text-8xl font-black leading-tight max-w-4xl">
              Earth's Exhale
            </h1>
            <p className="text-xl max-w-xl text-white/80">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-6 pt-4">
              <button className="px-8 py-3 bg-green-700 hover:bg-green-600 transition-colors duration-200 font-semibold text-lg rounded-lg shadow-lg">
                Buy Now
              </button>
              <button className="flex items-center space-x-2 p-3 text-lg font-medium text-white/90 rounded-full border border-white/50 hover:bg-white/10 transition-colors">
                <Play className="h-5 w-5 fill-white" />
                <span>Live Demo...</span>
              </button>
            </div>

            {/* Testimonial Card (Glassmorphism Effect) */}
            <div className="w-full max-w-md p-6 mt-16 rounded-xl border border-white/20 shadow-2xl backdrop-blur-md bg-white/5">
              <div className="flex items-center space-x-4 mb-3">
                {/* Avatar */}
                <img
                  src={
                    testimonial.avatarUrl || "https://via.placeholder.com/50"
                  }
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          </div>

          {/* 2. RIGHT COLUMN: Featured Product Card (1/3 width on desktop) */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            {/* Featured Plant Card (Glassmorphism Effect) */}
            <div className="relative w-80 h-[500px] p-6 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-md bg-white/5 flex flex-col items-center justify-end">
              {/* Plant Image */}
              <div className="absolute top-[-100px] w-[350px] h-[350px]">
                <img
                  src={
                    featuredPlant.imageUrl || "https://via.placeholder.com/350"
                  }
                  alt={featuredPlant.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text and Button at the bottom */}
              <div className="w-full text-center space-y-4">
                <p className="text-sm text-white/70">{featuredPlant.type}</p>
                <h3 className="text-3xl font-light tracking-wide">
                  {featuredPlant.name}
                </h3>
                <button className="w-full px-6 py-3 border border-white/70 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Buy Now
                </button>

                
              </div>

              
            </div>
          </div>
        </div>
      </div>

     <TrendyPlantsSection/>
    </div>
  );
}

export default Home;
