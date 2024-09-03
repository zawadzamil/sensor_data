import React from 'react';

function StarRating({ rating, totalReviews }) {
  const totalStars = 5;

  return (
    <div className="flex items-center space-x-1">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < rating ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-5 h-5 ${index < rating ? 'text-yellow' : 'text-yellow'}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
      <span className="!ml-3 text-sm text-neutral font-semibold mt-2">
        {rating.toFixed(1)} ({totalReviews})
      </span>
    </div>
  );
}

export default StarRating;

