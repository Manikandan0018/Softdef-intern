// src/data/trendyPlantsData.js
import p1 from "../image/p7.png";
import p2 from "../image/p4.png";

const trendyPlantsData = [
  {
    id: 1,
    title: "For Your Desks Decorations",
    description:
      "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: "Rs. 599/-",
    imageUrl: p1, // Placeholder for the top plant
    imagePosition: "left", // This will determine layout
  },
  {
    id: 2,
    title: "For Your Desks Decorations",
    description:
      "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.",
    price: "Rs. 399/-",
    imageUrl: p2, // Placeholder for the bottom plant
    imagePosition: "right", // This will determine layout
  },
];

export default trendyPlantsData;
