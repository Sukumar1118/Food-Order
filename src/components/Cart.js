import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../store/cartSliceReducer";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cartSlice?.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="w-8/12 mx-auto">
      <div>
        <h1 className="font-bold text-xl">Cart</h1>
        <button
          className="border-2 border-solid border-gray-400 p-1 rounded-md"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </div>
      <div>
        {cartItems?.map((item, index) => {
          return cartItems.length ? (
            <MenuItem key={item.card.info.id + index} menuItem={item} />
          ) : (
            <div>No items in cart.</div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
