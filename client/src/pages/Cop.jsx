import React from 'react';
import ItemPopup from './../components/ItemPopup';
import { useLocation } from 'react-router-dom';


const Cop = ({ companyName, stringP, items }) => {
  const myVarile = process.env.MY_VARIABLE;
  const location = useLocation();
  const { path2 } = location.state || {};
  const filteredItems = items.filter(item => item.company === path2.company);


  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">

      <div className="flex mb-4">
                <img src={path2.image_path} alt="商品画像" className="mx-2 lg:mx-10 w-full sm:w-1/2 md:1/3 lg:w-1/4 rounded-full" />
                <div className='m-auto'>
                    <h2 className="text-7xl font-bold text-gray-800 mb-6">{path2.company}</h2>
                    <p className="text-xl text-gray-600 mt-2 ml-2">
                        {path2.intro}
                    </p>
                </div>
      </div>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 py-4 gap-4">
          
          {filteredItems.length > 0 ? (
          filteredItems.map(item => (
              <ItemPopup
              itemName={item.name}
              imageSrc={item.image_path}
              price={item.price}
              rating={item.rate}
              />
          ))
        ) : (
          <p>No items found.</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default Cop;