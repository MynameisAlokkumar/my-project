import React from "react";
import coin from "../assets/coin_image.png";
const CoinBalance = ({ totalCoins }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={coin} alt="" width="100px" />
      <h2 className="font-bold text-xl text-neutral-500">Total Coins Earned</h2>
      <p className="font-bold text-4xl">{totalCoins}</p>
    </div>
  );
};

export default CoinBalance;
