import { useParams } from "react-router-dom";

import MenuGroup from "./MenuGroup";
import ResShimmer from "./ResShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { cleanUrl } = useParams();

  const { resMenuData, menuGroups } = useRestaurantMenu(cleanUrl);

  if (resMenuData === null || menuGroups === null) {
    return <ResShimmer />;
  }

  return (
    <div className="res-menu">
      <h1>{resMenuData.shortName}</h1>
      <div className="menu-group">
        {menuGroups.slice(1).map((grp) => (
          <MenuGroup key={grp.id} grpData={grp} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
