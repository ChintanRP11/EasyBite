import { useState, useEffect } from "react";
import ResShimmer from "./ResShimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);

  console.log(useEffect);

  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data2 = await fetch(
      "https://api.skipthedishes.com/customer/v1/graphql",
      {
        credentials: "omit",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0",
          Accept: "*/*",
          "Accept-Language": "en",
          "content-type": "application/json",
          "User-Token": "33fd86c1-4359-4c6a-b384-af911701fbdc",
          parameters:
            "customerId=a19fba7d-eab8-4327-9719-7be334b8bb59&filterBy=&isCuisineSearch=false&isSorted=false&search=",
          "App-Token": "d7033722-4d2e-4263-9d67-d83854deb0fc",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-site",
        },
        referrer: "https://www.skipthedishes.com/",
        body: '{"operationName":"QueryRestaurantsCuisinesList","variables":{"city":"windsor","province":"ON","latitude":42.304485,"longitude":-83.0574898,"isDelivery":true,"dateTime":0,"search":"","language":"en","customerId":"a19fba7d-eab8-4327-9719-7be334b8bb59"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"43375ca22e77a4fc96174783b3a0d52143c8034ebfee962a31c02b2d466639e6"}}}',
        method: "POST",
        mode: "cors",
      }
    );

    const jsonData = await data2.json();
    setListOfRes(jsonData.data?.restaurantsList?.openRestaurants);

    setFilteredListOfRes(jsonData.data?.restaurantsList?.openRestaurants);
  };

  return listOfRes.length === 0 ? (
    <ResShimmer />
  ) : (
    <div className="body">
      <div className="option-bar">
        <div className="search-bar">
          <input
            type="text"
            className="search-box"
            value={searchText}
            placeholder="Search..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRes = listOfRes.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(filteredRes);
              setFilteredListOfRes(filteredRes);
            }}>
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = listOfRes.filter((res) => res.skipScore > 95);
            setFilteredListOfRes(filteredRes);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
