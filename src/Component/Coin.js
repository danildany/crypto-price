import React from "react";
import '../Component/Coins.css'
function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <h1>{name}</h1>
      <img className="iconImg" src={icon} />
      <h3> Price: {price}</h3>
      <h3> {symbol}</h3>
    </div>
  );
}

export default Coin;