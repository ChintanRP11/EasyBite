import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuGroup from "./MenuGroup";
import ResShimmer from "./ResShimmer";

const RestaurantMenu = () => {
  const { cleanUrl } = useParams();
  const [resMenuData, setResMenuData] = useState([]);
  const [menuGroups, setMenuGroups] = useState([]);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const url =
      "https://api-skipthedishes.skipthedishes.com/v1/restaurants/clean-url/" +
      cleanUrl +
      "?fullMenu=false&language=en&lat=42.304485&long=-83.0574898&order_type=DELIVERY";

    const data = await fetch(url, {
      credentials: "omit",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0",
        Accept: "application/json",
        "Accept-Language": "en",
        "App-Token": "d7033722-4d2e-4263-9d67-d83854deb0fc",
        "Content-Type": "application/json",
        "user-token": "33fd86c1-4359-4c6a-b384-af911701fbdc",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
      },
      referrer: "https://www.skipthedishes.com/",
      method: "GET",
      mode: "cors",
    });
    const jsonData = await data.json();

    setResMenuData(jsonData);
    setMenuGroups(jsonData.menu.menuGroups);
  };

  return resMenuData.length === 0 ? (
    <ResShimmer />
  ) : (
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
