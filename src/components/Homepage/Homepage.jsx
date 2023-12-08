import NavBar from "../Navigation/NavBar";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import { useState, useEffect } from "react";
import "./homepage.css";

const Homepage = () => {
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);
  const [featuredItems, setFeaturedItems] = useState([]);

  //fetch photos from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing?limit=3")
      .then((response) => response.json())
      .then((result) => {
        setFeaturedItems(result);
        console.log(result);
      });
  }, []);

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
        <div id="secondaryContent">
          <div id="secondaryContentTitle">Featured Items</div>
          <div id="featuredItems">
            {featuredItems.map((featuredItem) => {
              return (
                <FeaturedItem
                  key={featuredItem.id}
                  imageId={featuredItem.id}
                  imageUrl={featuredItem.image}
                  itemTitle={featuredItem.title}
                  itemPrice={featuredItem.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
