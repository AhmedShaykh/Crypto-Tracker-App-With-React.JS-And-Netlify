import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coins from './Components/Coins';
import Navbar from './Components/Navbar';

function App() {

  const [coins, setCoins] = useState([]);

  const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false";

  useEffect(() => {
    axios.get(api).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Coins coins={coins}/>
    </>
  );
}

export default App;