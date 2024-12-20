import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSliceReducer";
import MenuItem from "./MenuItem";

const RestaurantMenuItemList = (props) => {
  const { menuItemList } = props;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {menuItemList.map((item) => {
        return (
          <div key={item.card.info.id}>
            <button
              className="p-1 border-solid border-2 border-gray-400"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
            <MenuItem menuItem={item} />
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuItemList;
