import resObj from "../utils/mockData";
import {
  CDN_LINK,
  SWIGGY_API,
  CORS_PROXY_URL,
  CORS_API_KEY,
} from "../utils/constants.js";
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

export const RestaurantContainer = () => {
  let restaurantGridElements =
    resObj[4].card.card.gridElements.infoWithStyle.restaurants;
  const [resCards, setResCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [displayResCards, setDisplayResCards] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();

    // const timer = setInterval(() => {
    //   console.log("setInterval - RestaurantContainer");
    // }, 1000);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  const fetchData = async () => {
    const data = await fetch(CORS_PROXY_URL + SWIGGY_API, {
      headers: {
        "x-cors-api-key": CORS_API_KEY,
      },
    }).catch((error) => {
      console.log("error:", error);
    });

    const jsonData = await data.json();
    const resData =
      jsonData.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResCards(resData);
    setDisplayResCards(resData);
  };

  if (!onlineStatus) return <h1>Looks like you're offline!!!</h1>

  //* Conditional Rendering
  return resCards?.length === 0 ? (
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
        {displayResCards?.map((resEle) => (
          <Link key={resEle.info.id} to={"/resMenu/" + resEle.info.id}>
            <RestaurantCard resName={resEle} />
          </Link>
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
