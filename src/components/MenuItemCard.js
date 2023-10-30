import placholder_logo from "../../public/images/logo-bnw.png";

const MenuItemCard = (props) => {
  console.log(props);
  const { name, description, centsPrice, imageUrl } = props.listOfItems;
  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img
          className="item-image"
          src={imageUrl ? imageUrl : placholder_logo}
          alt=""
        />
      </div>
      <div className="menu-item-details">
        <h3 className="item-name">{name}</h3>
        <h4 className="item-description">{description}</h4>
        <h4 className="item-price">Price: ${centsPrice / 100}</h4>
      </div>
    </div>
  );
};

export default MenuItemCard;
