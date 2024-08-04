import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {
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
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
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
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
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
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex flex-wrap">
        {reviews.map((review) => (
          <div key={review.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-md rounded p-4 mb-4">
              <div className="text-xl text-center mb-2">
                {`★★★★★ ${review.rate}`}
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
  );
}



export default Product;