import NavBar from "../Navigation/NavBar";
import { useState, useEffect } from "react";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./shopPage.css";
const ShopPage = () => {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);
  const [allInventory, setAllInventory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing?limit=6")
      .then((response) => response.json())
      .then((result) => {
        setAllInventory(result);
        console.log(result);
      });
  }, []);

  const handleAddToCartClick = (imageId) => {
    setNumOfItemsInCart(numOfItemsInCart + 1);
  };

  return (
    <div>
      <NavBar numOfItemsInCart={numOfItemsInCart}></NavBar>
      <div id="allInventory">
        {allInventory.map((featuredItem) => {
          return (
            <InventoryItem
              key={featuredItem.id}
              imageId={featuredItem.id}
              imageUrl={featuredItem.image}
              itemTitle={featuredItem.title}
              itemPrice={featuredItem.price}
              onClick={handleAddToCartClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopPage;
