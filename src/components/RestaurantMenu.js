import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { CATEGORY_FILETR_STRING } from "../utils/constants";

const RestaurantMenu = () => {
  const params = useParams();
  const resInfo = useRestaurantMenu(params);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ShimmerUI />;
  const { name } = resInfo?.data?.cards[2]?.card?.card?.info;
  const categoryData =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categoryCards = categoryData?.filter(
    (item) => item?.card?.card["@type"] === CATEGORY_FILETR_STRING
  );
  
  return (
    <div className="w-6/12 mx-auto">
      <h1 className="font-bold text-xl">{name}</h1>
      {categoryCards?.map((item, index) => {
        return (
          <RestaurantCategory
            key={item.card.card.title}
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
