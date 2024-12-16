import { RESTAURANT_API, CORS_PROXY_URL, CORS_API_KEY } from "./constants.js";
import resObj from "./mockData.js";
import { useState, useEffect } from "react";

const useRestaurantMenu = (params) => {
  let restaurantGridElements =
    resObj[4].card.card.gridElements.infoWithStyle.restaurants;
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(CORS_PROXY_URL + RESTAURANT_API + params.resId, {
      headers: {
        "x-cors-api-key": CORS_API_KEY,
      },
    }).catch((error) => {
      console.log("Error: ", error);
    });
    if (!data) {
      const data = {};
      setResInfo(data);
      return;
    }
    const jsonData = await data.json();
    setResInfo(jsonData);
  };
  return resInfo;
};

export default useRestaurantMenu;
