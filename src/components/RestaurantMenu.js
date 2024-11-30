import { useEffect, useState } from "react";
import {
  CORS_PROXY_URL,
  CORS_API_KEY,
  RESTAURANT_API,
} from "../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";

const RestaurantMenu = () => {
  const params = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(CORS_PROXY_URL + RESTAURANT_API + params.resId, {
      headers: {
        "x-cors-api-key": CORS_API_KEY,
      },
    });
    const jsonData = await data.json();
    console.log("jsonData", jsonData);
    setResInfo(jsonData);
  };
  if (resInfo === null) return <ShimmerUI />;
  const menuItems =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards;
  const { name, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines}</p>
      {menuItems?.map((item) => {
        return (
          <div>
            <h2>{item.card.info.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
