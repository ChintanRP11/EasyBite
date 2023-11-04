import placholder_logo from "../../public/images/logo-bnw.png";

const MenuItemCard = (props) => {
  const { name, description, centsPrice, imageUrl } = props.listOfItems;
  return (
    <div className="menu-item flex p-1 flex-row justify-between m-2 h-40 bg-white rounded-3xl hover:shadow-lg">
      <div className="menu-item-details p-2 w-[350px]">
        <h3 className="item-name font-bold p-1">{name}</h3>
        <p className="item-description text-sm p-1 max-w-full overflow-hidden truncate ">
          {description}
        </p>
        <h4 className="item-price p-1">
          {centsPrice ? "Price: $" + centsPrice / 100 : ""}
        </h4>
      </div>
      <div className="m-1">
        <img
          className="max-w-[200px] max-h-full rounded-2xl"
          src={imageUrl ? imageUrl : placholder_logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default MenuItemCard;
