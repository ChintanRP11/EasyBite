import { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const MenuGroup = (props) => {
  const { name } = props.grpData;

  const menuList = props.grpData?.menuItems;
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
