import React from 'react'

const Footer = () => {
	return (
		<>
			<footer>
				<div className='flex flex-col h-auto px-14 py-4 my-auto mt-auto border-t-4 border-gray-300 items-center md:h-32'>
					<div className="flex flex-col md:flex-row md:space-x-8">
						<a href="#" className="text-base">お問い合わせ</a>
						<a href="#" className="text-base">使用条件</a>
						<a href="#" className="text-base">ポリシー・制約一覧</a>
						<a href="#" className="text-base">サイトマップ</a>
					</div>
					<div className='flex items-center space-x-4 my-auto md:ml-auto'>
						<a href="#"><img src="./img/line.png" alt="a" class="w-12 h-12" /></a>
						<a href="#"><img src="./img/x.png" alt="a" class="w-12 h-12"/></a>
						<a href="#"><img src="./img/instagram.png" alt="a" class="w-12 h-12"/></a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;