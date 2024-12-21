import resObj from "../utils/mockData";
import {
  SWIGGY_API,
  CORS_PROXY_URL,
  CORS_API_KEY,
} from "../utils/constants.js";
import { useContext, useEffect, useState } from "react";
import ShimmerUI from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import {
  RestaurantCard,
  withLabelPromotedRestaurantCard,
} from "./RestaurantCard.js";
import UserContext from "../utils/UserContext.js";

export const RestaurantContainer = () => {
  let restaurantGridElements =
    resObj[4].card.card.gridElements.infoWithStyle.restaurants;
  const [resCards, setResCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [displayResCards, setDisplayResCards] = useState([]);
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted =
    withLabelPromotedRestaurantCard(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

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
          data-testid="search-bar"
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
        <input
          placeholder="Logged in user..."
          className="mx-2 border-solid border-2 border-gray-400 pl-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap m-auto justify-center">
        {displayResCards?.map((resEle, index) => (
          console.log("resEle:", resEle),
          <Link key={resEle.info.id} to={"/resMenu/" + resEle.info.id}>
            {index % 3 === 0 ? (
              <RestaurantCardPromoted resName={resEle} />
            ) : (
              <RestaurantCard resName={resEle} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
