import { useState, useEffect } from "react";
import { json } from "react-router-dom";

const RestaurantMenu = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
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
    console.log(jsonData);

    setResData(jsonData.data?.homeLandingPageStores?.storeList[0].data.stores);
  };

  return (
    <div className="res">
      <h1>Restaurant Name</h1>
      <h2>description</h2>
      <div>
        <h3>Menu</h3>
        <ul>
          <li>Burger</li>
          <li>Pizza</li>
          <li>Pops</li>
          <li>Sandwich</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
