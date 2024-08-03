import React from 'react';

const StarRatingView = ({ rating, totalStars = 5 }) => {
  const stars = Array.from({ length: totalStars }, (_, index) => {
    const fillPercentage = Math.min(Math.max((rating - index), 0), 1) * 100;
    return (
      <Star key={index} fillPercentage={fillPercentage} />
    );
  });

  return (
    <div className="flex space-x-1">
      {stars}
    </div>
  );
};

const Star = ({ fillPercentage }) => (
  <div className="relative w-6 h-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-full text-gray-400"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15 8 21 9 17 14 18 21 12 18 6 21 7 14 3 9 9 8 12 2" />
    </svg>
    <div
      className="absolute top-0 left-0 h-full text-yellow-500 overflow-hidden"
      style={{ width: `${fillPercentage}%` }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15 8 21 9 17 14 18 21 12 18 6 21 7 14 3 9 9 8 12 2" />
      </svg>
    </div>
  </div>
);

export default StarRatingView;
