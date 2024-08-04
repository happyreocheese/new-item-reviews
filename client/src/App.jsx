import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Company from "./pages/Company";
import Product from "./pages/Product";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);
  const [array2, setArray2] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/items"); // エンドポイントのURLを修正
      console.log(response.data);
      setArray(response.data);
    } catch (error) {
      console.error("Error fetching the API", error);
    }
  };

  const fetchAPI2 = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/corporates"); // エンドポイントのURLを修正
      console.log(response.data);
      setArray2(response.data);
    } catch (error) {
      console.error("Error fetching the API", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    fetchAPI2();
  }, []);

  return (
    <>
      <BrowserRouter>
      {<Header />}
        <Routes>
          <Route path='/' element={<Home items={array} items2={array2}/>} />
          <Route path='/company' element={
            <Company
              companyName="スターバックス"
              stringP="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut tempore necessitatibus odio? Omnis, voluptas aperiam numquam, eaque architecto laboriosam nisi expedita enim provident placeat alias ullam officia accusamus distinctio?"
              items={array}
              />
          }/>
          <Route path='/search' element={
            <Search
              items={array}
              />
          }/>
          <Route path='/product' element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;