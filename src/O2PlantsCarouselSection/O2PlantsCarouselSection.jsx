import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import o2PlantsData from "../data/o2PlantsData"; // Import the data

function O2PlantsCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? o2PlantsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === o2PlantsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const currentPlant = o2PlantsData[currentIndex];

  // Glassmorphism styles for the card
  const glassMorphismClasses =
    "p-8 rounded-3xl border border-white/10 shadow-xl backdrop-blur-sm bg-black/10 transition-all duration-500 ease-in-out";

  return (
    <div className="min-h-[80vh] bg-[#1F271D] py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header / Title */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-extrabold text-white pb-1 relative">
            Our Best O2
            {/* Styling the underline/border effect */}
            <span className="absolute left-1/2 bottom-0 w-2/3 h-0.5 bg-green-400 transform -translate-x-1/2 rounded-full"></span>
          </h2>
        </div>

        {/* Carousel Card */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${glassMorphismClasses}`}
        >
          {/* Left: Plant Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <img
              src={currentPlant.imageUrl}
              alt={currentPlant.title}
              className="w-full max-w-[700px] h-auto object-contain rounded-2xl"
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-4xl font-semibold text-white leading-tight">
              {currentPlant.title}
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              {currentPlant.description}
            </p>
            <p className="text-base text-white/60 leading-relaxed">
              {currentPlant.details}
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 pt-4">
              <button className="px-8 py-3 border border-white/70 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
                Explore
              </button>

              {/* Carousel Navigation */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-full bg-white/5 border border-white/20 text-white hover:bg-green-700 hover:text-white transition-colors duration-200"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} strokeWidth={1.5} />
                </button>
                <span className="text-lg font-medium text-white/80">
                  {`0${currentIndex + 1}/0${o2PlantsData.length}`}
                </span>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-full bg-white/5 border border-white/20 text-white hover:bg-green-700 hover:text-white transition-colors duration-200"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {o2PlantsData.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                slideIndex === currentIndex
                  ? "bg-white"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default O2PlantsCarouselSection;
