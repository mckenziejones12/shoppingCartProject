import "./clickedItemCard.css";

const ClickedItemCard = ({
  imageId,
  imageUrl,
  itemTitle,
  itemPrice,
  itemDescription,
  onClick,
}) => {
  return (
    <div className="clickedItemCard">
      <img src={imageUrl} height="300px" width="275px" />
      <div className="itemDetails">
        <div className="itemTitle">{itemTitle}</div>
        <div className="itemPrice">${itemPrice}</div>
        <div className="itemDescription">{itemDescription}</div>
        <button className="addToCartButton" onClick={() => onClick(imageId)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ClickedItemCard;
