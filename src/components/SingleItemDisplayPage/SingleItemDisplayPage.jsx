import ClickedItemCard from "../ClickedItemCard/ClickedItemCard";
import { useState } from "react";
import NavBar from "../Navigation/NavBar";

const SingleItemDisplayPage = () => {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);

  return (
    <div>
      <NavBar numOfItemsInCart={numOfItemsInCart}></NavBar>
      <div>The clicked item card will go here</div>
    </div>
  );
};
export default SingleItemDisplayPage;
