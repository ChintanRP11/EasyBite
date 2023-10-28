import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter-bar">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = listOfRes.filter(
              (res) => res.averageRating > 4.6
            );
            setListOfRes(filteredRes);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
