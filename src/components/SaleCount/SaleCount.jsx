import "./SaleCount.css";

export const SaleCount = ({ count }) => {
  let displayNumberOfItems = count;
  if (count > 9) {
    displayNumberOfItems = "9+";
  }

  return <div id="inCartContainer">{displayNumberOfItems}</div>;
};
