import resObj from "../utils/mockData";
import { CDN_LINK } from "../utils/constants.js";
import { useState } from "react";

export const RestaurantContainer = () => {
  let restaurantGridElements =
    resObj[4].card.card.gridElements.infoWithStyle.restaurants;
  const [resCards, setResCards] = useState(restaurantGridElements);
  return (
    <div>
      <button
        className="topRatedResBtn"
        onClick={() => {
          let filteredTopRatedRes = resCards.filter(
            (res) => res.info.avgRating > 4.3
          );
          setResCards(filteredTopRatedRes);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="resContainer">
        {resCards.map((resEle) => (
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
