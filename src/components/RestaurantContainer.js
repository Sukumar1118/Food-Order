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

  if (!onlineStatus) return <h1>Looks like you're offline!!!</h1>;

  //* Conditional Rendering
  return resCards?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <div className="my-3">
        <input
          className="mx-2 border-solid border-2 border-gray-400 rounded-2xl"
          value={searchText}
          placeholder=" Search..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 mx-2 border-solid border-2 border-gray-400 rounded-2xl"
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
          className="px-4 mx-2 border-solid border-2 border-gray-400 rounded-2xl"
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
      <div className="flex flex-wrap">
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
    <div className="w-64 m-4">
      <div className="hover:m-2">
        <img
          className="h-40 w-64 rounded-xl"
          alt=""
          src={CDN_LINK + info.cloudinaryImageId}
        />
        <div className="pl-2">
          <h1 className="font-bold text-lg mt-2">{info.name}</h1>
          <h4 className="font-medium">
            <span>
              {" "}
              <span className="text-green-500">⭐</span> {info.avgRating}
            </span>
            <span>{" " + info.sla.slaString}</span>
          </h4>
          <h4 className="text-gray-500 font-medium">
            {info.cuisines?.join(", ")}
          </h4>
          <h4 className="text-gray-500 font-medium">{info.costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantContainer;
