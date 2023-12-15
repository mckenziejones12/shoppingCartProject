import NavBar from "../Navigation/NavBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./ShopPage.css";
import { useContext } from "react";
import { ItemsCountContext } from "../../ItemsCountContext";

const ShopPage = () => {
  const navigate = useNavigate();
  const [allInventory, setAllInventory] = useState([]);
  const { itemCount, setItemCount } = useContext(ItemsCountContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing?limit=6")
      .then((response) => response.json())
      .then((result) => {
        setAllInventory(result);
      });
  }, []);

  const handleAddToCartClick = () => {
    setItemCount(itemCount + 1);
  };
  const handleCardClick = (itemId) => {
    navigate(`singleitemdisplay/${itemId}`);
  };

  return (
    <div>
      <NavBar numOfItemsInCart={itemCount}></NavBar>
      <div id="allInventory">
        {allInventory.map((featuredItem) => {
          return (
            <InventoryItem
              key={featuredItem.id}
              itemId={featuredItem.id}
              imageId={featuredItem.id}
              imageUrl={featuredItem.image}
              itemTitle={featuredItem.title}
              itemPrice={featuredItem.price}
              onAddToCartClick={handleAddToCartClick}
              onCardClick={handleCardClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopPage;
