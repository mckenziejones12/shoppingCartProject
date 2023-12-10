import "./featuredItem.css";
const FeaturedItem = ({ imageId, imageUrl, itemTitle, itemPrice, onClick }) => {
  return (
    <div className="featuredItemCard" onClick={() => onClick(imageId)}>
      <img src={imageUrl} height="200px" width="175px" />
      <div className="itemTitle">{itemTitle}</div>
      <div className="itemPrice">${itemPrice}</div>
    </div>
  );
};

export default FeaturedItem;
