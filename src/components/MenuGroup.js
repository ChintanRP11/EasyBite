import { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const MenuGroup = (props) => {
  const { name } = props.grpData;
  console.log(props.grpData);

  const [menuList, setMenuList] = useState(props.grpData?.menuItems);
  console.log(menuList);
  return (
    <div className="menu-group">
      <h2>{name}</h2>
      <div className="menu-item-list">
        {menuList.map((itemList) => (
          <MenuItemCard key={itemList.id} listOfItems={itemList} />
        ))}
      </div>
    </div>
  );
};

export default MenuGroup;
