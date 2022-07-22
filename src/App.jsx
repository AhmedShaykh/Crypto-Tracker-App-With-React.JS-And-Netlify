import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Coins from './Components/Coins';
import Coin from './Routes/Coin';

function App() {

  const [coins, setCoins] = useState([]);

  const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    axios.get(api).then((response) => {
      setCoins(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;