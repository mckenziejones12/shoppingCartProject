import NavBar from "../Navigation/NavBar";
import { useState } from "react";

const ShopPage = () => {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);

  return (
    <div>
      <NavBar numOfItemsInCart={numOfItemsInCart}></NavBar>
      <h1>hello from the shop page!</h1>
      <p>more items will be listed here</p>
    </div>
  );
};

export default ShopPage;
