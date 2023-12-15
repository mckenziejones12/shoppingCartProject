import NavBar from "./NavBar";
import FeaturedItem from "./FeaturedItem";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Homepage.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ItemsCountContext } from "../ItemsCountContext";

const Homepage = () => {
  const navigate = useNavigate();
  const { itemCount } = useContext(ItemsCountContext);
  const [featuredItems, setFeaturedItems] = useState([]);

  const handleItemClick = (itemId) => {
    // Programatically push to shop page
    navigate(`shop/singleitemdisplay/${itemId}`);
  };

  //fetch photos from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing?limit=3")
      .then((response) => response.json())
      .then((result) => {
        setFeaturedItems(result);
      });
  }, []);

  return (
    <div>
      <NavBar numOfItemsInCart={itemCount}></NavBar>

      <div id="homepageContent">
        <div id="primaryContent">
          Don't just Talk the Talk...
          <br />
          <span id="emphasizedText">Walk the Walk.</span>
          <br />
          <Link to="/shop" className="homepageShop shopButton">
            Shop Now
          </Link>
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
                  onClick={handleItemClick}
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
