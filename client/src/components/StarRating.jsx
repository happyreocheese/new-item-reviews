import React, { useState } from 'react';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => setRating(index + 1)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 cursor-pointer ${filled ? 'text-yellow-500' : 'text-gray-400'}`}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15 8 21 9 17 14 18 21 12 18 6 21 7 14 3 9 9 8 12 2" />
  </svg>
);

export default StarRating;
