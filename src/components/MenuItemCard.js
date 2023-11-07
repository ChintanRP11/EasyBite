import { useDispatch } from "react-redux";
import placholder_logo from "../../public/images/logo-bnw.png";
import { addToCart } from "../utils/store/cartSlice";

const MenuItemCard = (props) => {
  const { name, description, centsPrice, imageUrl } = props.itemData;
  console.log(props.listOfItems);
  const dispatch = useDispatch();
  const handleCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="menu-item flex p-1 flex-row justify-between h-28 bg-white hover:shadow-lg border-b-[1px]">
      <div className="menu-item-details p-1 w-9/12 text-left">
        <h3 className="item-name font-bold p-1 overflow-hidden h-8">{name}</h3>
        <p className="item-description text-sm p-1 max-w-full overflow-hidden truncate ">
          {description}
        </p>
        <h4 className="item-price p-1">
          {centsPrice ? "Price: $" + centsPrice / 100 : ""}
        </h4>
      </div>
      <div className="inline-flex w-3/12 place-items-end border-l-[1px] p-[2px] pl-2">
        <div className="absolute ">
          <button
            className="bg-black text-white p-[5px] rounded-r-xl"
            onClick={() => handleCart(props.itemData)}>
            Add+
          </button>
        </div>
        <img
          className="max-h-full p-0.5 m-auto"
          src={imageUrl ? imageUrl : placholder_logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default MenuItemCard;
