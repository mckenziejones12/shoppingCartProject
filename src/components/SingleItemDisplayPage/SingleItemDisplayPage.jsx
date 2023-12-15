import ClickedItemCard from "../ClickedItemCard/ClickedItemCard";
import { useState, useEffect } from "react";
import NavBar from "../Navigation/NavBar";
import { useParams } from "react-router-dom";

const SingleItemDisplayPage = () => {
  const { itemId } = useParams();
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);
  const [clickedItem, setClickedItem] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((response) => response.json())
      .then((result) => {
        setClickedItem(result);
        console.log(result);
      });
  }, []);

  const handleAddToCartClick = () => {
    setNumOfItemsInCart(numOfItemsInCart + 1);
  };

  if (!clickedItem) return null;

  return (
    <div>
      <NavBar numOfItemsInCart={numOfItemsInCart}></NavBar>
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
