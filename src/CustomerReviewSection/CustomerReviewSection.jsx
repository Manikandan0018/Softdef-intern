import React from "react";
import StarRating from "../Home/StarRating"; // Reusing our StarRating component
import reviewsData from "../data/reviewsData"; // Import the review data

// --- Sub-Component: Individual Review Card ---
const ReviewCard = ({ review }) => {
  // Glassmorphism styles for the card
  const glassMorphismClasses =
    "p-6 rounded-3xl border border-white/10 shadow-xl backdrop-blur-sm bg-black/10 flex flex-col h-full";

  return (
    <div className={glassMorphismClasses}>
      <div className="flex items-center space-x-4 mb-4">
        {/* Avatar */}
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
        />
        <div>
          <h3 className="text-xl font-semibold text-white">{review.name}</h3>
          <StarRating rating={review.rating} />{" "}
          {/* Using our StarRating component */}
        </div>
      </div>
      <p className="text-base text-white/70 leading-relaxed flex-grow">
        {review.reviewText}
      </p>
    </div>
  );
};

// --- Main Component ---
function CustomerReviewSection() {
  return (
    <div className="min-h-screen bg-[#1F271D] py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header / Title */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-extrabold text-white pb-1 relative">
            Customer Review
            {/* Styling the underline/border effect */}
            <span className="absolute left-1/2 bottom-0 w-2/3 h-0.5 bg-yellow-400 transform -translate-x-1/2 rounded-full"></span>
          </h2>
        </div>

        {/* Reviews Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerReviewSection;
