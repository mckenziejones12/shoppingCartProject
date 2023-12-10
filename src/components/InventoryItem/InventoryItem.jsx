import "./inventoryItem.css";

const InventoryItem = ({
  imageId,
  imageUrl,
  itemTitle,
  itemPrice,
  onClick,
}) => {
  return (
    <div className="inventoryItemCard">
      <img src={imageUrl} height="200px" width="175px" />
      <div className="itemTitle">{itemTitle}</div>
      <div className="itemPrice">${itemPrice}</div>
      <button className="addToCartButton" onClick={() => onClick(imageId)}>
        Add to cart
      </button>
    </div>
  );
};

export default InventoryItem;
