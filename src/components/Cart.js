import { useDispatch, useSelector } from "react-redux";
import MenuItemCard from "./MenuItemCard";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart text-centers p-3 m-auto">
      <p className="font-bold text-xl m-auto p-4 text-center ">Cart</p>
      {cartItems.length === 0 ? (
        <p className="m-auto text-center">
          Cart is empty. Add some items to cart.
        </p>
      ) : (
        <div className="cart-items w-6/12 m-auto text-center">
          <button
            className="clear-cart m-2 p-2 bg-black text-white rounded-xl"
            onClick={handleClearCart}>
            Clear Cart
          </button>
          {cartItems.map((item, index) => (
            <MenuItemCard key={item.id} itemData={item} />
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Cart;
