import resObj from "../utils/mockData";
import { CDN_LINK } from "../utils/constants.js";
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer.js";

export const RestaurantContainer = () => {
  let restaurantGridElements =
    resObj[4].card.card.gridElements.infoWithStyle.restaurants;
  const [resCards, setResCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [displayResCards, setDisplayResCards] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const resData = jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    ?.restaurants;
    setResCards(resData);
    setDisplayResCards(resData);
    console.log("jsonData ", restaurantGridElements);
  };

  //* Conditional Rendering
  return resCards.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <div>
        <input
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let filteredItems = resCards.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setDisplayResCards(filteredItems);
          }}
        >
          Search
        </button>
        <button
          className="topRatedResBtn"
          onClick={() => {
            let filteredTopRatedRes = resCards.filter(
              (res) => res.info.avgRating > 4.3
            );
            setDisplayResCards(filteredTopRatedRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resContainer">
        {displayResCards.map((resEle) => (
          <RestaurantCard key={resEle.info.id} resName={resEle} />
        ))}
      </div>
    </div>
  );
};

export const RestaurantCard = (props) => {
  const { info } = props.resName;
  return (
    <div className="restaurantCard" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="resLogo" alt="" src={CDN_LINK + info.cloudinaryImageId} />
      <h3>{info.name}</h3>
      <h4>
        <span>{info.avgRating} stars</span>
        <span>{" " + info.sla.slaString}</span>
      </h4>
      <h4>{info.cuisines?.join(", ")}</h4>
      <h4>{info.costForTwo}</h4>
    </div>
  );
};

export default RestaurantContainer;
