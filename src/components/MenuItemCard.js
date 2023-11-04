import placholder_logo from "../../public/images/logo-bnw.png";

const MenuItemCard = (props) => {
  const { name, description, centsPrice, imageUrl } = props.listOfItems;
  return (
    <div className="menu-item flex p-1 flex-row justify-between m-1 h-28 bg-white hover:shadow-lg rounded-2xl">
      <div className="menu-item-details p-1 w-[350px] text-left">
        <h3 className="item-name font-bold p-1 overflow-hidden h-8">{name}</h3>
        <p className="item-description text-sm p-1 max-w-full overflow-hidden truncate ">
          {description}
        </p>
        <h4 className="item-price p-1">
          {centsPrice ? "Price: $" + centsPrice / 100 : ""}
        </h4>
      </div>
      <div className="w-[200px] inline-flex place-items-end border-solid border-[1px] border-gray-200 rounded-xl">
        <div className="absolute ">
          <button className="bg-black text-white p-2 rounded-bl-xl">
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
