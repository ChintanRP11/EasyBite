import { useParams } from "react-router-dom";

import MenuGroup from "./MenuGroup";
import ResShimmer from "./ResShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showItem, setShowItem] = useState(null);
  const { cleanUrl } = useParams();

  const { resMenuData, menuGroups } = useRestaurantMenu(cleanUrl);

  if (resMenuData === null || menuGroups === null) {
    return <ResShimmer />;
  }

  return (
    <div className="res-menu flex flex-col m-2.5 text-center min-h-full">
      <h1 className="text-5xl font-bold mx-auto my-4 p-2 text-center">
        {resMenuData.shortName}
      </h1>
      <div className="menu-group w-auto m-auto">
        {menuGroups
          .filter((grp) => grp.name !== "Allergies & Intolerances")
          .filter((grp) => grp.name !== "Age Verification")
          .filter((grp) => grp.name !== "Important Alcohol Information")
          .filter((grp) => grp.name !== "")
          .map((grp, index) => (
            <MenuGroup
              key={grp.id}
              grpData={grp}
              showItem={index === showItem ? true : false}
              setShowItem={() => setShowItem(index)}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
