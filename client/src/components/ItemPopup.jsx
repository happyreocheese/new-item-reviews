import React from 'react'
import StarRating from './StarRating'

// const ItemPopup = () => {
//   return (
// 		<div className="bg-white p-6 rounded-lg shadow-lg">
// 			<img src="./img/stb1.jpg" alt="商品画像" className="h-40 w-full object-cover rounded-t-lg" />
// 			<div className='m-2'>
// 				<StarRating totalStars={5} />
// 			</div>
// 			<div className="mt-4">
// 				<p className="text-lg font-semibold text-gray-800">商品名</p>
// 				<p className="text-gray-600 mt-2">金額</p>
// 			</div>
// 		</div>
//   );
// };

const ItemPopup = ({ imageSrc, rating, price, itemName }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={imageSrc} alt="商品画像" className="h-40 w-full object-cover rounded-t-lg" />
      <div className='m-2'>
			<StarRating totalStars={rating} />
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold text-gray-800">{itemName}</p>
        <p className="text-gray-600 mt-2">{price}</p>
      </div>
    </div>
  );
};

export default ItemPopup;

./client/src/components/ItemPopup.jsx
./client/src/components/StarRating.jsx
./client/src/components/StarRatingView.jsx
./client/src/pages/Company.jsx
