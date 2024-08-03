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
    <a href="#" className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 duration-500">
      <img src={imageSrc} alt="商品画像" className="h-100 w-full object-cover rounded-t-lg" />
      <div className='m-2'>
			<StarRating totalStars={rating} />
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold text-gray-800">{itemName}</p>
        <p className="text-gray-600 mt-2">{price}</p>
      </div>
			<div className='mg-auto'>
				<div className='flex mt-3 text-green-500 items-center hober:text-green-800'>
					レビューを見る
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
							fill="currentColor"
						/>
					</svg>
				</div>
			</div>
    </a>
  );
};

export default ItemPopup;
