import "./inventoryItem.css";

const InventoryItem = ({
  imageId,
  imageUrl,
  itemTitle,
  itemPrice,
  onAddToCartClick,
  onCardClick,
}) => {
  return (
    <div className="inventoryItemCard">
      <div
        className="inventoryItemDetails"
        onClick={() => onCardClick(imageId)}
      >
        <img src={imageUrl} height="200px" width="175px" />
        <div className="itemTitle">{itemTitle}</div>
        <div className="itemPrice">${itemPrice}</div>
      </div>
      <button
        className="addToCartButton"
        onClick={() => onAddToCartClick(imageId)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default InventoryItem;
