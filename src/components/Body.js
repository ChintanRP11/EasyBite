import { useState, useEffect, useContext } from "react";
import ResShimmer from "./ResShimmer";
import RestaurantCard from "./RestaurantCard";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);

  const { setUserName, loggedInUser } = useContext(UserContext);

  const [searchText, setSearchText] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  let totalPages = Math.ceil(filteredListOfRes.length / itemsPerPage);

  let startIndex = (currentPage - 1) * itemsPerPage;

  let endIndex = startIndex + itemsPerPage;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
    <div className="body flex-col w-full">
      <div className="option-bar flex justify-center m-2 p-1 ">
        <div className="search-bar mx-2 p-2">
          <input
            type="text"
            className="search-box p-2 rounded-lg m-1"
            value={searchText}
            placeholder="Search..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn m-1 bg-blue-700 hover:bg-blue-800 rounded-lg p-2 text-white"
            onClick={() => {
              const filteredRes = listOfRes.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              totalPages = Math.ceil(filteredRes.length / itemsPerPage);
              setFilteredListOfRes(filteredRes);
              setCurrentPage(1);
            }}>
            Search
          </button>
        </div>

        <button
          className="top-rated-filter m-3 bg-green-700 hover:bg-green-800 rounded-lg p-2 text-white"
          onClick={() => {
            const filteredRes = listOfRes.filter((res) => res.skipScore > 95);
            totalPages = Math.ceil(filteredRes.length / itemsPerPage);
            setFilteredListOfRes(filteredRes);
            setCurrentPage(1);
          }}>
          Top Rated Restaurants
        </button>
        <div className="mx-2 p-2">
          <lable>Username: </lable>
          <input
            type="text"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="res-list m-2 flex flex-col">
        <div className="res-container p-2 m-2 flex flex-wrap justify-center ">
          {console.log(filteredListOfRes)}
          {filteredListOfRes.slice(startIndex, endIndex).map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
        <div className="page-nav justify-center text-center ">
          <button
            className="m-3 w-20 bg-teal-700 hover:bg-teal-800 rounded-lg p-2 text-white"
            onClick={prevPage}>
            Previous
          </button>
          <span className="text-lg">
            {currentPage} of{" "}
            {Math.ceil(filteredListOfRes.length / itemsPerPage)}
          </span>
          <button
            className="m-3 w-20 bg-teal-700 hover:bg-teal-800 rounded-lg p-2 text-white"
            onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
