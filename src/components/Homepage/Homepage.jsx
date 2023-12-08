import NavBar from "../Navigation/NavBar";
import { useState } from "react";
import "./homepage.css";

const Homepage = () => {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);

  return (
    <div>
      <NavBar numOfItemsInCart={numOfItemsInCart}></NavBar>

      <div id="homepageContent">
        <div id="primaryContent">
          Don't just Talk the Talk...
          <br />
          <span id="emphasizedText">Walk the Walk.</span>
          <br />
          <button className="homepageShop shopButton">Shop Now</button>
        </div>
        <div id="featuredItems">
          <div className="individualitem">thing 1</div>
          <div className="individualivtem">thing 2</div>
          <div className="individualivtem">thing 3</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
