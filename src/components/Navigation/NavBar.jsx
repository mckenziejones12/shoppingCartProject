import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ numOfItemsInCart }) => {
  return (
    <nav id="navBar">
      <div id="storeTitle">The Store</div>
      <div id="navBarLinks">
        <div className="navBarShop shopButton">
          <Link to="shop">Shop</Link>
        </div>
        <img id="cartIcon" src="images/shopping-cart.png" alt="cart" />
        <div id="inCartContainer">{numOfItemsInCart}</div>
      </div>
    </nav>
  );
};

export default NavBar;
