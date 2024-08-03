import React from 'react'


const Home = () => {
    return (
        <>
            <body className='min-h-screen bg-gray-100'>
                <div className="flex px-10 mx-auto w-full">

                    <section className="flex mt-8">
                        <div className="border-solid border-8">
                            <div className="font-medium text-xl px-20 pt-5 text-center md:text-left md:text-xl">
                                今のおすすめ
                            </div>
                            <nav className="text-3xl flex flex-col mx-auto p-5 text-center leading-loose">
                                <li className='list-none'><a href="#">商品名</a></li>
                                <li className='list-none'><a href="#">商品名</a></li>
                                <li className='list-none'><a href="#">商品名</a></li>
                                <li className='list-none'><a href="#">商品名</a></li>
                                <li className='list-none'><a href="#">商品名</a></li>
                                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                                    もっと見る＞
                                </button>
                            </nav>
                        </div>
                    </section>

                    <div className="flex flex-col justify-end mx-auto mt-8">
                        <section className="w-full p-4 border-8 border-solid border-blue-500">
                            <div className="flex gap-4 justify-center">
                                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                    <img src="./img/mac.jpg" alt="a" className="w-20 h-20" />
                                    
                                </a>
                                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                    <img src="./img/mac.jpg" alt="a" className="w-20 h-20" />
                                </a>
                                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                    <img src="./img/mac.jpg" alt="a" className="w-20 h-20" />
                                </a>
                                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                    <img src="./img/mac.jpg" alt="a" className="w-20 h-20" />
                                </a>
                                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                    <img src="./img/mac.jpg" alt="b" className="w-20 h-20" />
                                </a>
                            </div>
                        </section>
                        <section className="p-4 mt-8">
                            <ul className="w-full grid grid-cols-1 gap-4 border-solid border-8 border-teal-400 h-96 overflow-y-auto">
                                <li className="flex flex-col text-center px-5 py-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl h-60">
                                    <a href="https://example.com">
                                        レビュー
                                    </a>
                                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-auto">
                                        もっと見る＞
                                    </button>

                                </li>
                                <li className="flex flex-col text-center px-5 py-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl h-60">
                                    <a href="https://example.com">
                                        レビュー
                                    </a>
                                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-auto">
                                        もっと見る＞
                                    </button>

                                </li>
                                <li className="flex flex-col text-center px-5 py-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl h-60">
                                    <a href="https://example.com">
                                        レビュー
                                    </a>
                                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-auto">
                                        もっと見る＞
                                    </button>

                                </li>
                                <li className="flex flex-col text-center px-5 py-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl h-60">
                                    <a href="https://example.com">
                                        レビュー
                                    </a>
                                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-auto">
                                        もっと見る＞
                                    </button>

                                </li>
                                <li className="flex flex-col text-center px-5 py-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl h-60">
                                    <a href="https://example.com">
                                        レビュー
                                    </a>
                                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-auto">
                                        もっと見る＞
                                    </button>

                                </li>
                                <li className="flex flex-col text-center px-5 py-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl h-60">
                                    <a href="https://example.com">
                                        レビュー
                                    </a>
                                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-auto">
                                        もっと見る＞
                                    </button>

                                </li>


                               
                               
                            </ul>
                        </section>

                    </div>

                </div>
            </body>
        </>
    );
};


export default Home;
