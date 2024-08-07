import React from 'react';
import './starRating.css'; // SCSSからCSSに変換した場合のインポート

const MAX_STAR_COUNT = 5;

function StarRatingView({ score, showsScore = true }) {
  // score を数値に変換し、デフォルト値を設定
  const numericScore = parseFloat(score) || 0;

  return (
    <div className="star-rating">
      <div
        className="stars-bg"
        role="img"
        aria-label={`${MAX_STAR_COUNT}点中${numericScore}点の評価`}
      >
        <div
          className="stars"
          style={
            numericScore >= MAX_STAR_COUNT
              ? undefined
              : { width: `${(numericScore / MAX_STAR_COUNT) * 100}%` }
          }
        ></div>
      </div>
      {showsScore && <span className="score">{numericScore.toFixed(1)}</span>}
    </div>
  );
}

export default StarRatingView;
