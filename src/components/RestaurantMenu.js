import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const params = useParams();
  const resInfo = useRestaurantMenu(params);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ShimmerUI />;
  const menuItems =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards;
  const { name, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;
  const categoryData =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categoryCards = categoryData?.filter(
    (item) =>
      item?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="w-6/12 mx-auto">
      <h1 className="font-bold text-xl">{name}</h1>
      {categoryCards?.map((item, index) => {
        return (
          <RestaurantCategory
            category={item}
            setShowIndexFromChild={() => setShowIndex(index)}
            showItems={index === showIndex && true}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
