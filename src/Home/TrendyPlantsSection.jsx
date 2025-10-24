import React from "react";
import { ShoppingBag } from "lucide-react";
import trendyPlantsData from "../data/trendyPlantsData"; // Import the data

// --- Sub-Component: Individual Trendy Plant Card ---
const TrendyPlantCard = ({ plant }) => {
  const glassMorphismClasses =
    "relative p-6 rounded-full border  border-white/10 shadow-xl backdrop-blur-xl bg-black/10";

  const isImageLeft = plant.imagePosition === "left";

  return (
    <div
      className={`grid grid-cols-1  md:grid-cols-2 gap-8 items-center ${glassMorphismClasses}`}
    >
      {/* Image (conditionally rendered first or second based on imagePosition) */}
      {isImageLeft && (
        <div className="flex ml-30 justify-center md:justify-start">
          <img
            src={plant.imageUrl}
            alt={plant.title}
            className="
    w-full max-w-[300px] h-auto object-contain rounded-2xl
    md:translate-x-[-20%] md:scale-[1.1]
    transition-transform duration-300
  "
          />
        </div>
      )}

      {/* Text Content */}
      <div className={`space-y-4 ml-20 ${isImageLeft ? "md:pl-8" : "md:pr-8"}`}>
        <h3 className="text-3xl font-semibold text-white">{plant.title}</h3>
        <p className="text-base text-white/70 leading-relaxed">
          {plant.description}
        </p>

        <div className="flex items-center space-x-6 pt-4">
          <span className="text-4xl font-bold text-green-400">
            {plant.price}
          </span>
          <button className="px-6 py-3 border border-white/70 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Explore
          </button>
          <button
            className="p-3 rounded-full bg-white/5 border border-white/20 text-white hover:bg-green-700 hover:text-white transition-colors duration-200 shadow-md"
            aria-label="Add to cart"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Image (conditionally rendered second if imagePosition is 'right') */}
      {!isImageLeft && (
        <div className="flex ml-30 justify-center md:justify-start">
          <img
            src={plant.imageUrl}
            alt={plant.title}
            className="
    w-full max-w-[300px] h-auto object-contain rounded-2xl
    md:translate-x-[-20%] md:scale-[1.1]
    transition-transform duration-300
  "
          />
        </div>
      )}
    </div>
  );
};

// --- Main Component ---
function TrendyPlantsSection() {
  return (
    <div className="min-h-screen bg-[#1F271D] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header / Title */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-extrabold text-white pb-1 relative">
            Our Trendy Plants
            {/* Styling the underline/border effect exactly like the image */}
            <span className="absolute left-1/2 bottom-0 w-2/3 h-0.5 bg-white transform -translate-x-1/2"></span>
          </h2>
        </div>

        {/* Loop through data to render cards */}
        <div className="space-y-24">
          {" "}
          {/* Large space between the two cards */}
          {trendyPlantsData.map((plant) => (
            <TrendyPlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendyPlantsSection;
