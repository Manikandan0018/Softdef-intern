import React from "react";

// Star icon is imported from lucide-react (assuming you install it)
// If you don't use lucide-react, you can use the SVG provided below directly.
import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  // Ensure rating is between 0 and 5
  const normalizedRating = Math.max(0, Math.min(5, rating));

  return (
    <div className="flex space-x-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          // If the index (i) is less than the rating, the star is gold, otherwise it's gray.
          className={`w-4 h-4 fill-current ${
            i < normalizedRating ? "text-yellow-400" : "text-gray-500/70"
          }`}
          // Tailwind's fill-current makes the SVG take the text color
          strokeWidth={0}
        />
      ))}
    </div>
  );
};

export default StarRating;
