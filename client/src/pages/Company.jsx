import React from 'react';
import ItemPopup from './../components/ItemPopup';


const Company = ({ companyName, stringP, items }) => {
  const myVarile = process.env.MY_VARIABLE;
  const filteredItems = items.filter(item => item.company === 'マクドナルド');
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">

      <div className="flex mb-4">
                <img src="https://d3vgbguy0yofad.cloudfront.net/common/images/header/logo.svg" alt="商品画像" className="mx-2 lg:mx-10 w-full sm:w-1/2 md:1/3 lg:w-1/4 rounded-t-lg" />
                <div className=''>
                    <h2 className="text-2xl font-bold text-gray-800">{companyName}</h2>
                    <p className="text-gray-600 mt-2 ml-2">
                        {stringP}
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
              path={item}
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

export default Company;