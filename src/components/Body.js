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
        body: '{"operationName":"QueryRestaurantsCuisinesList","variables":{"city":"waterloo","province":"","latitude":0,"longitude":0,"isDelivery":true,"dateTime":0,"search":"","language":"en"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"6b688c899c706e79507ebd5f3d65479a49682e13dbea3aca289c4197e9d133e3"}}}',
        cache: "default",
        credentials: "omit",
        headers: {
          Accept: "*/*",
          "Accept-Language": "en",
          "App-Token": "d7033722-4d2e-4263-9d67-d83854deb0fc",
          "Content-Type": "application/json",
        },
        method: "POST",
        mode: "cors",
        referrerPolicy: "strict-origin-when-cross-origin",
      }
    );

    const jsonData = await data2.json();
    setListOfRes(jsonData.data?.restaurantsList?.openRestaurants);

    setFilteredListOfRes(jsonData.data?.restaurantsList?.openRestaurants);
  };

  return listOfRes.length === 0 ? (
    <ResShimmer />
  ) : (
    <div className="body bg-gray-200 flex-col w-full">
      <div className="option-bar flex justify-center p-1 ">
        <div className="search-bar mx-2 p-2">
          <input
            type="text"
            data-testid="searchInput"
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
            const filteredRes = listOfRes.filter((res) => res.skipScore > 98);
            totalPages = Math.ceil(filteredRes.length / itemsPerPage);
            setFilteredListOfRes(filteredRes);
            setCurrentPage(1);
          }}>
          Top Rated Restaurants
        </button>
        <div className="mx-2 p-2">
          <p>Username: </p>
          <input
            type="text"
            className="p-1"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="res-list m-2 flex flex-col">
        <div className="res-container p-2 m-2 flex flex-wrap justify-center ">
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
