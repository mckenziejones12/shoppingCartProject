const FeaturedItem = ({ imageId, imageUrl, itemTitle, itemPrice, onClick }) => {
  return (
    <div>
      <img src={imageUrl} />
      <div>{itemTitle}</div>
      <div>{itemPrice}</div>
      onClick={() => onClick(imageId)}
    </div>
  );
};
