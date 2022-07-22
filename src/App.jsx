import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [coins, setCoins] = useState([]);

  const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios.get(api).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <h1>
        Crypto Tracker App With React.JS!
      </h1>
    </>
  );
}

export default App;