import React, { useState } from 'react';

const StarRating = ({ score, onChange, totalStars = 5 }) => {
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleClick = (index) => {
    onChange(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHoveredStar(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredStar(0);
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 cursor-pointer ${index < (hoveredStar || score) ? 'text-yellow-500' : 'text-gray-300'}`}
          viewBox="0 0 24 24"
          fill={index < (hoveredStar || score) ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <polygon points="12 2 15 8 21 9 17 14 18 21 12 18 6 21 7 14 3 9 9 8 12 2" />
        </svg>
      ))}
      <span className="text-gray-600 ml-2">{score.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
