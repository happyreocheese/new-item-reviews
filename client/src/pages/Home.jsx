import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarRatingView from './../components/StarRatingView'

const Home = ({items,items2}) => {
    const topRatedItems = items
    .sort((a, b) => b.rate - a.rate)
    .slice(0, 10);

    const topNumItems = items
    .sort((a, b) => b.rev_num - a.rev_num)
    .slice(0, 12);

    const copImage=items2
  return (
    <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
      <div className='flex flex-col md:flex-row m-auto'>
        <div className='bg-gray-50 rounded-lg text-center w-full md:w-1/3 p-4'>
          <h2 className='mb-4 text-xl font-bold'>評価の高い商品</h2>
          <div className='space-y-4'>
                        {topRatedItems.map(item => (<ItemRank key={item.id} itemName={item.name} imageSrc={item.image_path}rate={item.rate} path={item}/>))}
                        

          </div>
        </div>
        <div className='flex-1 ml-5'>
          <div className='flex bg-gray-50 p-4 mb-3 rounded-lg justify-center space-x-8'>
            {copImage.map(item=>(<Icon imageSrc={item.image_path} path2={item}/>))}
          </div>
					<div className='bg-gray-50 rounded-lg p-4'>
						<h2 className='text-center mb-4 text-xl font-bold'>人気の商品</h2>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>

                {topNumItems.map(item => (<HomeItemPopup key={item.id} itemName={item.name} imageSrc={item.image_path}rate={item.rate} path={item}/>))}
						</div>
					</div>
        </div>
      </div>
    </div>
  );
};

const ItemRank = ({ imageSrc, rate, itemName, path }) => {
    const navigate = useNavigate();

    return (
        <a
            onClick={() => navigate("/Product", {
                state: {path}
            })}
            className='flex bg-white p-4 rounded-lg shadow-lg hover:bg-gray-100 duration-500'
        >
            <img src={imageSrc} alt="商品画像" className="w-1/3 object-cover rounded-lg" />
            <div className='m-auto'>
							<StarRatingView score={rate} showsScore={true} />
                <p className='text-gray-600'>{itemName}</p>
            </div>
        </a>
    );
};


const HomeItemPopup = ({ imageSrc, rate, itemName ,path}) => {
	const navigate = useNavigate();
	const text = "Hello";

	return (
		<a onClick={() => navigate("/Product", {
			state: {
				path
			}
		})} className='bg-white p-4 shadow-lg rounded-lg hover:bg-gray-100 duration-500'>
			<img src={imageSrc} alt="商品画像" className="w-full h-32 object-cover rounded-lg mb-4" />
			<StarRatingView score={rate} showsScore={true} />
			<p className='text-gray-600'>{itemName}</p>
			<div className='flex mt-3 text-green-500 items-center hover:text-green-800'>
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
		</a>
	);
};

const Icon = ({ imageSrc,path2 }) => {
	const navigate = useNavigate();

  return (
		<a onClick={() => navigate("/Cop", {
			state: {
				path2
			}
		})} className='w-20 h-20 overflow-hidden rounded-full'>
			<img src={imageSrc} alt="企業アイコン" className='rounded-full'/>
		</a>
  );
};

export default Home;