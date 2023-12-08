import "./navBar.css";
const NavBar = ({ numOfItemsInCart }) => {
  return (
    <nav id="navBar">
      <div id="storeTitle">The Store</div>
      <div id="navBarLinks">
        <button className="navBarShop shopButton">Shop</button>
        <img id="cartIcon" src="images/shopping-cart.png" alt="cart" />
        <div id="inCartContainer">{numOfItemsInCart}</div>
      </div>
    </nav>
  );
};

export default NavBar;
