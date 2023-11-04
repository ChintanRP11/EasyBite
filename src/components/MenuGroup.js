import MenuItemCard from "./MenuItemCard";

const MenuGroup = (props) => {
  const { name } = props.grpData;

  const menuList = props.grpData?.menuItems;
  return (
    <div className="flex-col menu-group w-[600px] m-3">
      <h2 className="text-xl font-bold px-3">{name}</h2>
      <div className="menu-item-list p-2">
        {menuList.map((itemList) => (
          <MenuItemCard key={itemList.id} listOfItems={itemList} />
        ))}
      </div>
    </div>
  );
};

export default MenuGroup;
