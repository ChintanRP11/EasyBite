import { useState, useEffect } from "react";
import ResShimmer from "./ResShimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);

  const [searchText, setSearchText] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.doordash.com/graphql/homeLandingPageStores?operation=homeLandingPageStores",
      {
        credentials: "include",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/117.0",
          Accept: "*/*",
          "Accept-Language": "en-CA",
          "content-type": "application/json",
          "x-experience-id": "doordash",
          "x-channel-id": "marketplace",
          "apollographql-client-name":
            "@doordash/app-consumer-production-ssr-client",
          "apollographql-client-version": "2.2",
          "x-csrftoken": "",
          "sentry-trace": "05b41774ffdd42e48f58759e2def1f7c-ba4930175afc4265-0",
          "Alt-Used": "www.doordash.com",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
        },
        referrer: "https://www.doordash.com/en-CA",
        body: '{"operationName":"homeLandingPageStores","variables":{},"query":"query homeLandingPageStores {\\n  homeLandingPageStores {\\n    storeList {\\n      id\\n      data {\\n        totalStores\\n        stores {\\n          ...FeedServiceStoreResultFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment FeedServiceStoreResultFragment on Store {\\n  id\\n  name\\n  description\\n  averageRating\\n  numRatings\\n  numRatingsDisplayString\\n  priceRange\\n  priceRangeDisplayString\\n  displayDeliveryFee\\n  headerImgUrl\\n  url\\n  isConsumerSubscriptionEligible\\n  isSurging\\n  menus {\\n    popularItems {\\n      id\\n      imgUrl\\n      __typename\\n    }\\n    __typename\\n  }\\n  status {\\n    asapAvailable\\n    pickupAvailable\\n    scheduledAvailable\\n    asapMinutesRange\\n    asapPickupMinutesRange\\n    displayNextHours\\n    deliveryUnavailableReason\\n    __typename\\n  }\\n  badge {\\n    backgroundColor\\n    text\\n    __typename\\n  }\\n  storeBadges {\\n    type\\n    text\\n    backgroundColor\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
        method: "POST",
        mode: "cors",
      }
    );

    const jsonData = await data.json();

    // Optional Chaining
    setListOfRes(
      jsonData.data?.homeLandingPageStores?.storeList[0]?.data?.stores
    );
    setFilteredListOfRes(
      jsonData.data?.homeLandingPageStores?.storeList[0]?.data?.stores
    );
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
            const filteredRes = listOfRes.filter(
              (res) => res.averageRating > 4.6
            );
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
