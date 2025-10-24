import React from "react";
import { ShoppingBag } from "lucide-react";
import plantsData from "../data/plantsData.js"; // Import the data file

// --- Sub-Component: Individual Plant Card ---
const PlantCard = ({ plant }) => {
  const glassMorphismClasses =
    "relative p-5 rounded-3xl border border-white/10 shadow-xl backdrop-blur-sm bg-black/10 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl hover:bg-black/20";

  const handleBuyNow = (name) => {
    console.log(`Adding ${name} to cart.`);
  };

  return (
    <div className={`${glassMorphismClasses} mt-25 w-80 relative overflow-visible`}>
      {/* Plant Image (pop out from top) */}
      <div className="absolute -top-46 left-1/2 transform -translate-x-1/2 w-90 h-90">
        <img
          src={plant.imageUrl}
          alt={plant.name}
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      {/* Card content with spacing to avoid overlap */}
      <div className="pt-24 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">{plant.name}</h3>
        <p className="text-sm text-white/70 h-16 mb-4 overflow-hidden">
          {plant.description}
        </p>

        <div className="flex justify-between items-center pt-2 px-2">
          <span className="text-2xl font-bold text-green-400">
            {plant.price}
          </span>
          <button
            onClick={() => handleBuyNow(plant.name)}
            className="p-3 rounded-full bg-white/5 border border-white/20 text-white hover:bg-green-700 hover:text-white transition-colors duration-200 shadow-md"
            aria-label={`Add ${plant.name} to cart`}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};



// --- Main Component ---
function PlantListingGrid() {
  return (
    // Outer container matching the dark background from FloraHero
    <div className="min-h-screen bg-[#1F271D] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header / Title */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-4xl font-extrabold text-white pb-1 relative">
            Our Top Selling Plants
            {/* Styling the underline/border effect exactly like the image */}
            <span className="absolute left-1/2 bottom-0 w-2/3 h-0.5 bg-white transform -translate-x-1/2"></span>
          </h2>
        </div>

        {/* Grid Layout (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plantsData.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlantListingGrid;
