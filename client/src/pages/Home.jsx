import React from 'react'


const Home = () => {
    return (
        <>
            <body className='bg-gray-100'>
                <div className="flex flex-grow px-10 mx-auto w-full">

                    <section className="flex">
                        <div className="border-solid border-8 md:">
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
                                    Button
                                </button>
                            </nav>
                        </div>
                    </section>

                    <div className="flex flex-col justify-end mx-auto overflow-x-auto">
                        <section className="w-full p-4 border-8 border-solid border-blue-500">
                            <div className="flex gap-4 justify-center">
                                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                    <img src="./img/mac.jpg" alt="a" className="w-20 h-20 object-cover rounded-full" />
                                </a>
                                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                    <img src="./img/mac.jpg" alt="a" className="w-20 h-20 object-cover rounded-full" />
                                </a>
                                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                    <img src="./img/mac.jpg" alt="a" className="w-20 h-20 object-cover rounded-full" />
                                </a>
                                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                    <img src="./img/mac.jpg" alt="a" className="w-20 h-20 object-cover rounded-full" />
                                </a>
                                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                                    <img src="./img/mac.jpg" alt="b" className="w-20 h-20 object-cover rounded-full" />
                                </a>
                            </div>
                        </section>
                        <section className="p-4">
                            <ul className="flex flex-wrap border-solid border-8 justify-center h-80 overflow-y-auto">
                                <li className="basis-2/5 text-center px-5 py-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl">
                                    <a href="https://example.com">
                                        <img src="./img/mac.jpg" alt="mac" className="w-28 mx-auto" />
                                    </a>
                                </li>
                                <li className="basis-2/5 text-center px-5 pt-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl">
                                    <a href="https://example.com">
                                        <img src="./img/mac.jpg" alt="mac" className="w-28 mx-auto" />
                                    </a>
                                </li>
                                <li className="basis-2/5 text-center px-5 pt-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl">
                                    <a href="https://example.com">
                                        <img src="./img/mac.jpg" alt="mac" className="w-28 mx-auto" />
                                    </a>
                                </li>
                                <li className="basis-2/5 text-center px-5 pt-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl">
                                    <a href="https://example.com">
                                        <img src="./img/mac.jpg" alt="mac" className="w-28 mx-auto" />
                                    </a>
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