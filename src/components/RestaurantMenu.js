import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();
  const resInfo = useRestaurantMenu(params);
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
