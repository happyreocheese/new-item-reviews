import React from 'react';
import './starRating.css'; // SCSSからCSSに変換した場合のインポート

const MAX_STAR_COUNT = 5;

function StarRatingView({ score, showsScore = true }) {
  return (
    <div className="star-rating">
      <div
        className="stars-bg"
        role="img"
        aria-label={`${MAX_STAR_COUNT}点中${score}点の評価`}
      >
        <div
          className="stars"
          style={
            score >= MAX_STAR_COUNT
              ? undefined
              : { width: `${(score / MAX_STAR_COUNT) * 100}%` }
          }
        ></div>
      </div>
      {showsScore && <span className="score">{score.toFixed(1)}</span>}
    </div>
  );
}

export default StarRatingView;
