import React, { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=1000")
      .then((response) => response.json())
      .then((json) => setCoins(json))
      .then(setLoading(false))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <h1>Coin Traker ({coins.length})</h1>
      {loading ? (
        <section>Loading..</section>
      ) : (
        <select>
          {coins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default App;
