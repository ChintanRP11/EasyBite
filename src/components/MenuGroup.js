import { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const MenuGroup = (props) => {
  const { name } = props.grpData;
  const { showItem, setShowItem } = props;

  const handleClick = () => {
    setShowItem();
  };

  const menuList = props.grpData?.menuItems;
  return (
    <div className="flex-col menu-group w-[600px] mx-2 my-2 bg-gray-200 p-2">
      <div
        className="flex justify-between mx-1 my-1 cursor-pointer"
        onClick={handleClick}>
        <span className="text-lg font-bold px-1">
          {name} {"("}
          {menuList.length}
          {")"}
        </span>
        <span className="text-xl">{showItem ? "▽" : "▷"}</span>
      </div>
      <div className="menu-item-list w-auto border rounded-2xl overflow-hidden">
        {showItem &&
          menuList.map((item) => (
            <MenuItemCard key={item.id} itemData={item} />
          ))}
      </div>
    </div>
  );
};

export default MenuGroup;
