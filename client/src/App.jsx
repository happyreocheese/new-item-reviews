import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    console.log(response.data.users);
    setArray(response.data.users);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Header />
      <main>
        <ul>
          {array.length > 0 ? (
            array.map((name, index) => <li key={index}>{name}</li>)
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </main>

      <body>
        <div className="container flex md:ml-auto">
          <section>
            <div className="border-solid border-8">
              <div className="font-medium text-xl px-20 pt-5">
                今のおすすめ
              </div>
              <nav className="flex flex-col mx-auto p-5">
                <li><a href="#" value="1">商品名</a></li>
                <li><a href="#" value="2">商品名</a></li>
                <li><a href="#" value="3">商品名</a></li>
                <li><a href="#" value="4">商品名</a></li>
                <li><a href="#" value="5">商品名</a></li>
              </nav>
            </div>
          </section>
          <section>

          <div className="flex">
            <div>
              <img src="./img.jpg" alt="a"></img>
            </div>
            <div>
              <img src="./img.jpg" alt="a"></img>
            </div>
            <div>
              <img src="./img.jpg" alt="a"></img>
            </div>
            <div>
              <img src="./img.jpg" alt="a"></img>
            </div>
            <div>
              <img src="./img.jpg" alt="b"></img>
            </div>
          </div>

          </section>

         
          <section className="justify-center">
            <ul className="flex flex-wrap border-solid border-8 justify-center">
              <li className="basis-2/5 text-center px-5 py-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl">
                <a href="https://example.com">
                  <img
                    src="./img/mac.jpg"
                    alt="mac"
                    className="w-28 mx-auto"
                  ></img>
                </a>
              </li>
              <li className="basis-2/5 text-center px-5 pt-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl">
                <a href="https://example.com">
                  <img
                    src="./img/mac.jpg"
                    alt="mac"
                    className="w-28 mx-auto"
                  ></img>
                </a>
              </li>
              <li className="basis-2/5 text-center px-5 pt-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl">
                <a href="https://example.com">
                  <img
                    src="./img/mac.jpg"
                    alt="mac"
                    className="w-28 mx-auto"
                  ></img>
                </a>
              </li>
              <li className="basis-2/5 text-center px-5 pt-5 m-1.5 border-solid border-8 border-teal-400 rounded-2xl">
                <a href="https://example.com">
                  <img
                    src="./img/mac.jpg"
                    alt="mac"
                    className="w-28 mx-auto"
                  ></img>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </body>
    </>
  );
}

export default App;
