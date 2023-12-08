import { useState } from "react";
import "./NavBar.css";
const NavBar = ({ numOfItemsInCart }) => {
  return (
    <nav id="navBar">
      <div id="storeTitle">The Shoe Store</div>
      <div id="navBarLinks">
        <button className="shop button">Shop</button>
        <img id="cartIcon" src="images/shopping-cart.png" alt="cart" />
        <div>{numOfItemsInCart}</div>
      </div>
    </nav>
  );
};

export default NavBar;
