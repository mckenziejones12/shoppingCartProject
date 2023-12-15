import "./navBar.css";
import { Link } from "react-router-dom";
import { SaleCount } from "../SaleCount/SaleCount";
import ShoppingCart from "../../../images/shopping-cart.png";

const NavBar = ({ numOfItemsInCart }) => {
  return (
    <nav id="navBar">
      <Link to="/" id="storeTitle">
        The Store
      </Link>
      <div id="navBarLinks">
        <div className="navBarShop shopButton">
          <Link to="/shop">Shop</Link>
        </div>
        <img id="cartIcon" src={ShoppingCart} alt="cart" />
        <SaleCount count={numOfItemsInCart} />
      </div>
    </nav>
  );
};

export default NavBar;
