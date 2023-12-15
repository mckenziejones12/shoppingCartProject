import ClickedItemCard from "../ClickedItemCard/ClickedItemCard";
import { useState, useEffect } from "react";
import NavBar from "../Navigation/NavBar";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ItemsCountContext } from "../../ItemsCountContext";

const SingleItemDisplayPage = () => {
  const { itemId } = useParams();
  const { itemCount, setItemCount } = useContext(ItemsCountContext);
  const [clickedItem, setClickedItem] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((response) => response.json())
      .then((result) => {
        setClickedItem(result);
      });
  }, []);

  const handleAddToCartClick = () => {
    setItemCount(itemCount + 1);
  };

  if (!clickedItem) return null;

  return (
    <div>
      <NavBar numOfItemsInCart={itemCount}></NavBar>
      <ClickedItemCard
        imageId={clickedItem.id}
        imageUrl={clickedItem.image}
        itemTitle={clickedItem.title}
        itemPrice={clickedItem.price}
        itemDescription={clickedItem.description}
        onClick={handleAddToCartClick}
      />
    </div>
  );
};
export default SingleItemDisplayPage;
