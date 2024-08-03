import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Company from "./pages/Company";
import Product from "./pages/Product";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={
            <Company
              companyName="スターバックス"
              stringP="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut tempore necessitatibus odio? Omnis, voluptas aperiam numquam, eaque architecto laboriosam nisi expedita enim provident placeat alias ullam officia accusamus distinctio?"
              />
          }/>
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
