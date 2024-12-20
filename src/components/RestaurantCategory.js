import RestaurantMenuItemList from "./RestaurantMenuItemList";

const RestaurantCategory = (props) => {
  const { category, setShowIndexFromChild } = props;
  const title = category?.card?.card?.title;
  const itemCards = category?.card?.card?.itemCards;

  return (
    <div>
      <div
        className="w-full m-2 cursor-pointer"
        onClick={() => {
            setShowIndexFromChild();
        }}
      >
        <div className="flex justify-between bg-gray-100 p-2 shadow-md rounded-md">
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
          </div>
          <div className="font-bold text-xl">+</div>
        </div>
        <div>
        <RestaurantMenuItemList menuItemList={itemCards} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
