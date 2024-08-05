import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import StarRating from './../components/StarRating';

function Product() {
  const location = useLocation();
  const { path } = location.state || {};
  const [formData, setFormData] = useState({
    name: '',
    rate: '',
    message: ''
  });
  const [reviews, setReviews] = useState([]);

  // フォームの入力を管理する関数
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 評価変更の処理
  const handleRatingChange = (newRating) => {
    setFormData({ ...formData, rate: newRating });
  };

  // フォームの送信処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/submit', formData);
      console.log('Response:', response.data);
      fetchReviews(); // 新しいレビューを取得する
      setFormData({ name: '', rate: '', message: '' }); // フォームをリセットする
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // 既存のレビューを取得する関数
  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="bg-gray-100 mx-auto p-4">
      <div className='flex flex-col md:flex-row my-10'>
        <div className='bg-white shadow-md w-full md:w-1/3 p-6 rounded-lg mx-8'>
          <img src={path.image_path} className="w-full h-auto mb-4 rounded-lg" alt="Product" />
          <StarRating score={path.rate} totalStars={5} onChange={() => {}} />
          <p className="text-lg mb-2 mt-2">{path.name}</p>
          <p className="text-lg mb-2">¥{path.price}</p>
          <p className="text-base mb-4">{path.intro}</p>
        </div>
        <div className='w-full md:w-2/3 p-6'>
          <div className="flex flex-wrap">
            {reviews.map((review) => (
              <div key={review.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white shadow-md rounded p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <StarRating score={review.rate} totalStars={5} onChange={() => {}} />
                  </div>
                  <div className="text-lg mb-2">
                    {review.comment}
                  </div>
                  <div className="text-sm text-right text-gray-600">
                    {`- ${review.name}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h3 className='mb-4 font-semibold text-base'>レビューを書く</h3>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            名前:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rate">
            評価:
          </label>
          {/* <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            min="1"
            max="5"
            required
          /> */}
          <StarRating score={Number(formData.rate)} onChange={handleRatingChange} totalStars={5} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            コメント:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Product;
