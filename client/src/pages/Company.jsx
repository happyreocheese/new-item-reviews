import React from 'react';
import ItemPopup from './../components/ItemPopup';


const Company = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">スターバックス</h2>
        <p className="text-gray-600 mt-2 ml-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut tempore necessitatibus odio? Omnis, voluptas aperiam numquam, eaque architecto laboriosam nisi expedita enim provident placeat alias ullam officia accusamus distinctio?
        </p>
      </div>
      <div className="">
        <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
					<ItemPopup
						imageSrc="./img/stb1.jpg"
						rating={5.0}
						price="¥700"
						itemName="ラブ & ピーチ フラペチーノ"
					/>
					<ItemPopup
						imageSrc="https://asset.menu.starbucks.co.jp/public/sku_images/4524785569966/4524785569966_1_m.jpg"
						rating={5.0}
						price="¥690"
						itemName="イチゴ バナナ フラペチーノ"
					/>
					<ItemPopup
						imageSrc="https://asset.menu.starbucks.co.jp/public/sku_images/4524785557185/4524785557185_1_m.jpg"
						rating={5.0}
						price="¥510~640"
						itemName="ほうじ茶 ＆ クラシックティー ラテ"
					/>
					<ItemPopup
						imageSrc="https://asset.menu.starbucks.co.jp/public/sku_images/4524785461062/4524785461062_1_m.jpg"
						rating={5.0}
						price="¥680"
						itemName="スターバックス ストロベリー フラペチーノ"
					/>
					<ItemPopup
						imageSrc="https://asset.menu.starbucks.co.jp/public/sku_images/4524785539013/4524785539013_1_m.jpg"
						rating={5.0}
						price="¥790"
						itemName="ピーチ パンナコッタ & アール グレイ ティー フラペチーノ"
					/>
        </div>
      </div>
    </div>
  );
};

export default Company;