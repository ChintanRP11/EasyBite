import React from "react";
import ReactDOM from "react-dom/client";

import logo from "./public/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    id: "441526",
    name: "Neighbour Shawarma & Sub",
    description: "Pickup, Halal",
    averageRating: 4.505845069885254,
    numRatings: 3422,
    numRatingsDisplayString: "(3,400+)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/36a0b6e6-4ffc-4333-b0f3-af1028e0e70c.png",
    url: "/store/441526",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-48231282",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/36a0b6e6-4ffc-4333-b0f3-af1028e0e70c.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603694",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/25c3c5e8-289e-42d0-b726-62da1154ad8a-668953b7-49e8-4838-8f5d-892821ecdb18-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603695",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/033c068f-2ec1-4a38-a31b-a63330069f97-9a55e192-2d29-45dd-92cd-9505be9fde30-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603680",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/25c3c5e8-289e-42d0-b726-62da1154ad8a-668953b7-49e8-4838-8f5d-892821ecdb18-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603663",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ea828bdd-5d0d-4b93-af02-e6bc9e77da04-e8ad01e4-2606-4eed-a594-0da4d8a05ed9-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603711",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ea828bdd-5d0d-4b93-af02-e6bc9e77da04-e8ad01e4-2606-4eed-a594-0da4d8a05ed9-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603690",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/25c3c5e8-289e-42d0-b726-62da1154ad8a-668953b7-49e8-4838-8f5d-892821ecdb18-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603678",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e2939fe8-ff7e-4af3-a7d5-63a9ede87624-a4517183-362b-475b-8d35-6448231c1f39-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603718",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ea828bdd-5d0d-4b93-af02-e6bc9e77da04-e8ad01e4-2606-4eed-a594-0da4d8a05ed9-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603699",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d7c5d5a1-0827-4d08-a813-d3c2af814a6c-dae52ca7-a7d4-40f5-809f-16edf937ac42-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603674",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a0b9cbbf-fd5e-45a3-b0c5-3448918642ca-32e05c00-447e-490c-ba0c-c06361158a10-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603684",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/61533fd3-c084-41e6-90d1-1d39e37be4d4-c8b77b1f-2787-4f8d-9ff7-e12c04e67010-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603681",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/285344cd-c6b5-461f-8840-3fff678b7e18-7a265eed-a7a9-4185-9012-b1bbb54972ee-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603664",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1a0df494-db84-4573-8141-858081f3445a-0122929a-8e13-437d-b77e-ff24c89e8c8d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603730",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/89b761fb-424f-4eb4-83b1-417bf0f7b438-f04aeca1-569d-4c24-b5a7-898ce08f2c39-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603697",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a0b9cbbf-fd5e-45a3-b0c5-3448918642ca-32e05c00-447e-490c-ba0c-c06361158a10-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603679",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e2f9767d-bd4a-4f56-9791-1aa4a00a7f7e-52a82442-f7c2-4183-ad31-397e1a6a6190-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603704",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/25c3c5e8-289e-42d0-b726-62da1154ad8a-668953b7-49e8-4838-8f5d-892821ecdb18-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603710",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1e864427-b044-4f64-8224-66c16b4fd6d5-9a803f9b-cbb4-4854-b49f-12051cc29c8d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603712",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/033c068f-2ec1-4a38-a31b-a63330069f97-9a55e192-2d29-45dd-92cd-9505be9fde30-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603702",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/25c3c5e8-289e-42d0-b726-62da1154ad8a-668953b7-49e8-4838-8f5d-892821ecdb18-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603696",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/141d0368-9834-4d6e-b2e1-53e23dc8b634-be11b8c9-dcca-478a-86bc-6c5b90c6e846-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603693",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1a0df494-db84-4573-8141-858081f3445a-0122929a-8e13-437d-b77e-ff24c89e8c8d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603686",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7efe7257-8f53-4160-9014-c66ba6d16ee4-cb177aec-53e4-4f42-b698-11925db542ce-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "416603721",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ea828bdd-5d0d-4b93-af02-e6bc9e77da04-e8ad01e4-2606-4eed-a594-0da4d8a05ed9-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [34, 34],
      asapPickupMinutesRange: [15],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "858500",
    name: "Bombay Touch",
    description: "Indian, Curry",
    averageRating: 4.375805854797363,
    numRatings: 620,
    numRatingsDisplayString: "(620+)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8a4bc321-9b55-471b-b48b-8d9a579635f6.jpg",
    url: "/store/858500",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-160741022",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8a4bc321-9b55-471b-b48b-8d9a579635f6.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509072393",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a70f0db5-1958-4cdf-bc9b-ee2773acae68-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509068584",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/aa11e192-f093-40ff-91c5-427a22758495-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509057248",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d4493d83-b527-44fe-a17f-b4ac80b47fde-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509068590",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/92fcc9b0-da4d-4f89-8c46-40e57e286b3c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509058665",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/657edb37-581d-4954-a070-af0071392c53-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509074420",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/78136757-d159-41fc-b022-ee451a63b23a-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509071421",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6adae73b-543d-4d45-aa4c-20e63bd0cbe8-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509071422",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/aea5c532-dbe0-446e-bad0-172af6c535bc-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509058670",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/edcdcdbb-907b-4012-96c2-bdc58d850b1f-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509075398",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/09c00c6d-2eb6-4e98-9795-b9dcdc2fe751-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509058664",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9d00fcc9-1a90-4112-9b75-8788b9a6c5b7-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509075253",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7b2dbf01-0fa7-4b95-85c8-f30135637125-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509071409",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/33aca146-ad85-4bc5-b439-e32cad91a7a0-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509057247",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/480b051a-0ed0-43da-9322-17f62f65e4a4-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509071419",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d39f6d08-1b53-4e6c-a83d-c8d9e95f903f-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509035852",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6aa98b86-f710-46f5-ac20-faed685fdb9b-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8159834688",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/aa11e192-f093-40ff-91c5-427a22758495-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6509074418",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1093d3e6-f385-4a5a-9f22-0f62e8a39c45-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [42, 42],
      asapPickupMinutesRange: [25],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "1663718",
    name: "Mr Sub",
    description: "Sandwiches, Wraps",
    averageRating: 4.804511070251465,
    numRatings: 133,
    numRatingsDisplayString: "(133)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/0a3ac3e6-fc26-40af-922e-ab8e34a17896.jpg",
    url: "/store/1663718",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1028285291",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/0a3ac3e6-fc26-40af-922e-ab8e34a17896.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318608015",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8397fc34-5fb9-48e0-b7e7-b8ddf3f85b49-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318619085",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/faff3a59-8644-4f91-abb0-2b15f58eeaa6-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318608019",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/28fdc976-6697-4389-8625-e2bfd3d25af8-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8505014960",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cf3fef5d-7374-4e44-8581-e7447cfdabc2-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318614743",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bd7f5438-efdb-4366-9d84-136b323b0151-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318625473",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/729dbb5b-99c9-4303-a367-0d8ef914d4bf-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318619084",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/faff3a59-8644-4f91-abb0-2b15f58eeaa6-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318608021",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/090bfb9c-36f8-43ba-99dd-64a6a81d9136-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318608008",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/532673d0-20dc-4859-9281-b9e65d2f1db9-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318608014",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/16f7209a-5ecb-4f29-ac54-ac4ec65e7716-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318608004",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4f0cded9-9f75-4e4b-b3e1-a107273da592-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318608020",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/090bfb9c-36f8-43ba-99dd-64a6a81d9136-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8505021475",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/add74e88-21d3-4043-add3-84db6ca8c749-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318619089",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4d03386e-61aa-4319-95fa-98599df20ec6-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318619087",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f7475cce-9559-4ea6-907a-ed009bb382dd-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318608017",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/5d897b3a-822c-4823-a4df-ab7663ea5e6f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7318608023",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/37a9e134-c6bc-42b7-afdf-18fce81c851f-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [27, 27],
      asapPickupMinutesRange: [11],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "23360852",
    name: "Daawat",
    description: "Indian, Indian Contemporary",
    averageRating: 4.517676830291748,
    numRatings: 396,
    numRatingsDisplayString: "(396)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/c998dc35-b0f1-463e-ad96-951c3201567c.jpg",
    url: "/store/23360852",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1791586352",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/c998dc35-b0f1-463e-ad96-951c3201567c.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10363538318",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1d8e8fdb-a23b-4d7e-84ac-99fd0f0016af-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10363538309",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bfad4d49-e962-4d61-9c79-82d3c9932b60-retina-large.jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10363531753",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ae109f5b-140a-44dc-9a79-d1613e6ff310-retina-large.jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10363537113",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8fe97753-a968-4328-9c79-fc9dceb07699-retina-large.jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10363537109",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1af056b5-d07e-4ddb-b365-01147c417d17-retina-large.jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10363536167",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/69f6ecad-4736-4726-a4d0-0ee309bd2c4f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [44, 44],
      asapPickupMinutesRange: [22],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "20% off, up to $5",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "2687548",
    name: "McDonald's",
    description: "Burgers, Chicken",
    averageRating: 4.395183086395264,
    numRatings: 1121,
    numRatingsDisplayString: "(1,100+)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/15d358be-b41b-4fa9-9eb0-793940ffbead-retina-large.jpg",
    url: "/store/2687548",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1452944170",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/15d358be-b41b-4fa9-9eb0-793940ffbead-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927567165",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b266e4b9-81fc-4a41-8fd5-0a3ee01219f5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927567151",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/47424c9d-c71f-4805-98c1-41a5ddc15846-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927563590",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/355746b3-56d7-46e0-be87-27c4ba9fe9ea-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927538264",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e302521c-b775-4f2a-961b-16ff9cd9a8d6-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927538261",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ac558aa-4cce-4877-bd72-4676958b0fbd-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927555379",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/17810d82-c507-41e9-b97c-4fad445a2303-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927538260",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d2df08ec-f3de-44b0-88d4-cd2ea8b49aa4-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927567149",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/50437b2e-f9d8-46b0-a63d-89865d4c562e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927555378",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ce4940f2-61d2-4389-8780-091f91033366-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927567150",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/670e05d2-4a4b-4d31-9759-e4ce2ec5cc3c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927538269",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9379239a-c015-474d-b883-0d81d8134d2d-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927567145",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/63c515f2-6bf5-4fa6-83f4-0ce8048d0472-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927538271",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/418a96d7-1a74-492c-ae08-1d9b702c9727-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927567160",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/28fcfe28-ff8c-4a4d-95d1-63bcc0f861f9-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927567163",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e642d1b7-6cab-41dd-9099-ee02bd9f2040-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927560004",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64acb349-1899-4a84-9a4c-aba874bedaf2-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927555417",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0cd5f7bd-7929-4bb3-94c9-17642408f48c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927567161",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9f220fea-6570-41f8-8dff-6343340067d9-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927538268",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/33fa36f9-b31f-44ac-ac29-6b72360f43a2-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927555380",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7d180c82-8b9d-4342-ade3-62c92d9bbf07-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927555384",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5b94078b-1b56-4969-9f66-a3b58add088b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927567136",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7371e40a-ae42-4a4f-a895-2aa70ee8ad99-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927563591",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/71dd2dad-cde3-44d3-b5b6-81cb30d9aa5a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9927560002",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e0237bc9-49f9-4168-a20a-4604acf97b42-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: false,
      scheduledAvailable: false,
      asapMinutesRange: [22, 22],
      asapPickupMinutesRange: [10],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "24947717",
    name: "Wendy's",
    description: "Burgers, Chicken Sandwiches",
    averageRating: 4.526316165924072,
    numRatings: 19,
    numRatingsDisplayString: "(19)",
    priceRange: 1,
    priceRangeDisplayString: "$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/203052.png",
    url: "/store/24947717",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-4658468",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/203052.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582402719",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ce017366-422d-4964-9f1e-794482bb3b2b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8616350622",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1af54965-763e-45e8-9d30-90b0277d4388-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582388240",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7d5b7f55-0f96-4f5b-8e9a-9051cc9b93de-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582402888",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5c862c30-729a-4f61-8e49-f07d0737b083-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582385644",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8c166034-381d-44f4-a423-f3f1e9f885b6-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582403369",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0291094b-3842-4a5e-a367-5d55aec0d343-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8616357297",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/879907ba-d787-41c9-8eea-ccb503447cfa-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582380448",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ccb4ef3d-a6e7-45b0-ab18-9093bbebcafc-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582398145",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/af460b29-b60f-4378-91f1-54d8af5b8104-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582380445",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8d1593d4-3428-4829-a47a-1f21c7ca91ac-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582375266",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f5293161-7545-4b88-80fd-c149528ade69-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582382272",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a5fe4e8b-c778-4f7b-a291-e5aabef5630c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582402716",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/03431c2f-d743-4061-8345-096459c12c4c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582375264",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b5075382-156c-46a9-991a-b65fed418fce-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582380644",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/95615fe3-3512-4cf9-be88-eebf839f8691-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582393671",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fdbed2d2-8d7a-4243-819e-71b6df98d540-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582393420",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d880fc74-9485-4904-94ef-3f400fe029fb-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8582393422",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a820ef85-5b55-4861-bec6-4b94968c6f6a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [29, 29],
      asapPickupMinutesRange: [8],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "24711737",
    name: "Starbucks",
    description: "Coffee, Breakfast",
    averageRating: 4.445946216583252,
    numRatings: 74,
    numRatingsDisplayString: "(74)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c43c30c2-33ec-4283-bc22-fdd1e6713a17-retina-large.jpg",
    url: "/store/24711737",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1577013911",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c43c30c2-33ec-4283-bc22-fdd1e6713a17-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7595729955",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/69d3cb40-7ec7-4281-8b8a-eb8df3d33b6b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9008750934",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7f5bdf03-7f6e-4836-a77d-caaf6ef4db52-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8265077280",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1c36c01a-c58e-4e00-9c71-820ce020842b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7595729959",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/519edf88-75ae-444f-8ed6-c1358a5e5c2e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7595724383",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1e9b3313-744c-4b69-9f6c-89ca7c41a1ba-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7595729956",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/600818e6-bc10-4448-a2a9-1a2d966e9d50-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7595729958",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9a22cb0c-8078-4676-ba72-7d658f217185-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7595724384",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f5d0adac-93ab-4bae-856f-efe1a01a5a79-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7595729960",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b002da4d-bc56-41fd-8374-dca3757c20b4-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7595729957",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2871e52d-6dd8-40af-83c5-636671808c2f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7959251916",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cae425ab-3fb6-4c24-873e-b693322dcf2f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7959249558",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d06ffc7f-7d76-438e-aa77-9a6326d25893-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7865973164",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d0013682-83e9-4cf8-b490-df724d368739-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9740706162",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/480d2c03-179d-4f98-907c-3d20c33a8d47-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: false,
      scheduledAvailable: false,
      asapMinutesRange: [37, 37],
      asapPickupMinutesRange: [10],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "1148808",
    name: "Little Caesars Pizza",
    description: "Pizza, Deep Dish Pizza",
    averageRating: 4.625,
    numRatings: 272,
    numRatingsDisplayString: "(272)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/159c805e-839a-4b11-a97f-2feb9d14c555-retina-large.JPG",
    url: "/store/1148808",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1721773713",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/159c805e-839a-4b11-a97f-2feb9d14c555-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "198580774",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bc885751-ab1c-4ac4-9545-bb9b86bcb280-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "198580820",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/659f2764-613c-496b-b256-efcb9af60bf9-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "198580768",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/74b21691-ed7e-443f-a17b-354752f8e79c-retina-large.jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "198580824",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e3a03c6c-8f5c-40b8-9ae3-4d48f940a7c2-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "198580821",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9c21cbcb-e697-4711-8532-0d88f8c707e4-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "198580770",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c8326201-d338-40df-a09b-0147b0407ecc-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "492766593",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/47f83ea4-0e15-48b8-9b45-19640dc41667-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "198580782",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d159f4e7-6608-43d0-a685-ef30b9b59f8b-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "397569075",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bc885751-ab1c-4ac4-9545-bb9b86bcb280-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "198580832",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/31bd2a9c-3646-48f2-8ca2-1430b66b6898-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "198580810",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b58e9c05-be49-4cc4-8351-65af9688fb8d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "397569078",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e3a03c6c-8f5c-40b8-9ae3-4d48f940a7c2-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "198580783",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d67595e5-e721-48b3-a097-c25eb758b639-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "492768227",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c40ca621-be24-4521-a21f-b962a055e124-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "198580799",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2567b4da-d792-4625-a033-fd6aada7edd6-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: false,
      scheduledAvailable: false,
      asapMinutesRange: [30, 30],
      asapPickupMinutesRange: [18],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "860626",
    name: "Pita Pit",
    description: "Pita, Sandwiches",
    averageRating: 4.5714287757873535,
    numRatings: 203,
    numRatingsDisplayString: "(203)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/92f671b8-2c67-4570-a3ab-834b9acf5d6c-retina-large.JPG",
    url: "/store/860626",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1757029444",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/92f671b8-2c67-4570-a3ab-834b9acf5d6c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "-656472484",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b160ffd2-5d38-435d-944f-5d2d01ebbbd7-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463693345",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3ace0d92-eae9-47f4-8d18-4ef9e9905cef-bd35d3cd-a469-40ca-b740-cb7594cad3cb-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463693347",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3a26c51f-7475-4043-9971-11b1947e7c03-b3dbc57b-7023-46fd-ac50-d51a91ae2be5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463695764",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4a61f83c-9e1f-43bf-a26e-a7e79195c1e7-ff4c9f0a-33a0-4439-8699-e619898bf1f5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463693344",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e66fd40a-8a70-42d2-9133-999188fb625f-14ff441d-a94a-4fb3-a8d0-6a56dff3536a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463696510",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/464c59d7-9537-4350-bfec-77519b43ae0b-0d0f9040-ec59-4f2e-9f4d-f5b1b7957830-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9847566062",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c5efb641-60f0-4eb1-b55d-e3b9763f7758-dc4dc55b-afa7-4414-8365-274e1fbeaf39-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463695760",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/67241e34-2b4b-4b17-baaa-3a6106e655e8-c772b58f-2fc3-4ba3-8a8f-ea02f7f52d63-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463695761",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/60e65b86-e211-4cca-9386-4dda4b3b425e-272f8fd0-0495-4f05-b70f-cfd312861c64-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463693346",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a69b6df7-322d-4137-9584-62ef4a9a41e0-ed29be3a-d5a6-45f8-adc4-11ecbda7c476-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463696512",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bc4ae8b1-07ad-4c24-9e8b-269f2d676846-fa08813c-b35f-473f-9e88-f32395125caa-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463694851",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a8e504a6-189a-4cfd-9f4a-0cc440a2f9b8-ed486a55-f399-4c90-a225-7aaf5f0159a0-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463687662",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3fe7fa46-a20b-4547-8e63-854fda4d301b-9ac45b19-245a-427f-b01d-74945c63de98-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463695758",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1111642f-379f-489d-8274-66b8d196fecd-c179e80d-44dd-4676-8827-fc3cfe19b78b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463695763",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d8d8664f-36e4-404c-8372-3f75b96ec3a9-378dd6c6-e272-43d8-b68f-e55f7cea864b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463695765",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6c7e6a53-b1dc-4efe-8083-2cc2ff103b1c-7fe92515-fabe-4136-8cdd-a4d7dce3d840-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9463694850",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f0378f42-9e4d-4a8b-b3d9-0ab97421ca5c-98a88cfa-d3f3-4799-9df3-26d6084c8543-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [23, 23],
      asapPickupMinutesRange: [10],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "939431",
    name: "Real Fruit Bubble Tea (CANADA LOCATIONS)",
    description: "Bubble Tea, Boba",
    averageRating: 4.595667839050293,
    numRatings: 277,
    numRatingsDisplayString: "(277)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/6466ef3a-f8b0-4dda-8e80-d242f15826eb.jpeg",
    url: "/store/939431",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "60650955",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/6466ef3a-f8b0-4dda-8e80-d242f15826eb.jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "602983055",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/88b9d927-6f50-4d63-b54d-3c928c821329-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "598549551",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e2eb68cb-9173-4ab9-b899-dd07a035ce32-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "598549545",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b7e06ba7-0012-4e13-bdec-a33592096a60-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "598549544",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c663fdfb-fb57-46d1-bc04-4079f1c5656e-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "598549548",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b8e25b15-1d25-4b4a-ac5e-61e14ba75e88-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "598549529",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/02eead94-136e-40b6-a9d0-5cef94d33cff-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "598549533",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/57797134-45de-4d97-8cd1-1aa44708cbec-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "598549549",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/280bd998-e2e7-4e94-8201-bc82d230cf6d-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: false,
      scheduledAvailable: false,
      asapMinutesRange: [35, 35],
      asapPickupMinutesRange: [13],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "24532884",
    name: "desi by nature",
    description: "Vegan, Curry",
    averageRating: 4.42553186416626,
    numRatings: 47,
    numRatingsDisplayString: "(47)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/5b1e63fb-7fa5-4b8d-9264-20ddf4b92a0e.jpg",
    url: "/store/24532884",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "225953723",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/5b1e63fb-7fa5-4b8d-9264-20ddf4b92a0e.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434371970",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/300770c8-8be4-4372-a4e3-ffb99097ef73-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434369555",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5b2d06c5-80ce-4a6e-88dd-4dfcb3d98c43-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434365871",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7f336a86-79d8-48f9-a4e9-aa9779e6e88d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434371962",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b14456f8-0b5d-46db-81d5-c039167b4be2-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434371960",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e18b5781-641d-4702-91ad-9d0a145b80da-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434371967",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f5b495ae-4f92-4b06-8360-4e5a0aa89885-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434371968",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2724e81c-4e3b-4650-9ee8-d05fd573bee5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434369563",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9940681c-b881-425c-ae1b-1784722ed4a8-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434365060",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c5963344-4bb6-4ef6-96c6-0d9faeac99a5-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434381273",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/96ea0227-c80b-4508-8a94-8f346a05af84-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434371961",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b734b1e9-14c0-4b4e-829e-f4b36ccbe6fa-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434365870",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bb59a204-baf3-47cc-a674-b157fd6384c9-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434381276",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cd79dcab-46d9-4d07-9026-4aef22a8842f-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7688195737",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d606abfb-8ce7-46a0-8ddd-e45a727b8376-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434365059",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1f26e89b-1934-46f4-8675-286c48c97b1b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434371965",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/209b437a-d0f9-446e-b8b7-4917c3bea21d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434369557",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e2703a68-7861-4119-a659-9500169c9f9f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434381280",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d606abfb-8ce7-46a0-8ddd-e45a727b8376-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [52, 52],
      asapPickupMinutesRange: [28],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "1928606",
    name: "Taco Bell",
    description: "Fast Food, Tacos",
    averageRating: 4.28125,
    numRatings: 224,
    numRatingsDisplayString: "(224)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/e27aafe7-5abd-4fd1-bca8-fd358d3cb9b9.png",
    url: "/store/1928606",
    isConsumerSubscriptionEligible: false,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1857736195",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/e27aafe7-5abd-4fd1-bca8-fd358d3cb9b9.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "720702291",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/33e809f9-e94d-4a79-9b31-dec6786424e9-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433602073",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d0f319a9-8242-4050-b341-846f292f913b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433563940",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/42374eff-e52e-4a2b-8521-0b162679fdea-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433602074",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/24b3675c-ef00-4610-a070-63464ef9841b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433586380",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8bb05bec-5c99-48e3-a1f1-58787e2f2861-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433587036",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5b565604-a18c-4654-84f1-ba458acc6c9f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433585997",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8427b444-4a07-46d7-ae2d-ca4ffeb0db5f-retina-large.jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433556028",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6cc917dd-7f77-47be-a712-85ac6f738582-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "720702318",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ae7286e8-ea10-4131-8eb3-561d91e66e7c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433573753",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/47221676-0cc6-49e6-9f8b-9d10529afdf0-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433564393",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0b11d0e3-4121-47b9-87b9-19fbf741112a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433539584",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e2a9bf2b-389a-40ec-8f7f-9771b0b442ae-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433585996",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a0ea1e05-c782-4587-a787-4b80c24ddf05-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433500669",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ccc9bac4-6241-4f24-b588-a1e15654eb57-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433599301",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/54e81e54-d586-46f1-951c-17f0a8b331c4-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8885350481",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2bab7b7b-26b9-4ffc-a457-d9a6a949f7ed-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433582732",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/887b0f7d-fff1-41a6-85df-abd6af907ff7-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3433564392",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1f7efeeb-a4c4-4142-a663-9ee31af43cb0-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [43, 43],
      asapPickupMinutesRange: [10],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "1151864",
    name: "Popeyes Louisiana Kitchen",
    description: "Halal, Fried Chicken",
    averageRating: 4.272463798522949,
    numRatings: 345,
    numRatingsDisplayString: "(345)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/c030d27f-2b3f-4831-971c-956ba38b6e01.jpg",
    url: "/store/1151864",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1844408594",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/c030d27f-2b3f-4831-971c-956ba38b6e01.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963624",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ea136901-4cd4-478e-aa77-a0e77c0cb1cf-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963543",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3dc69d67-aad1-43d9-a48d-d6586d50328b-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963579",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c6c8f997-4da8-4cad-8773-609d9f9ce59b-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963644",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6511b1f1-76ad-4e11-86cb-e22a968c0086-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963580",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/101e5774-afe2-48c2-81f6-30987f303819-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963550",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/235104f7-587c-46b0-a109-74a88e23267e-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963545",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e285084c-fa9e-44f7-9223-181fdc24e570-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963522",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fd4b6104-7fb6-4011-8c10-f5f50a8d62dc-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963627",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d49f7679-2c59-4a21-a23e-679da6dcfaee-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963625",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/294416e2-48c0-40b6-9b45-3fa3863a23a3-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963578",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/60610caa-ad33-430f-8dfa-52b1e12c71c4-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963570",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fc7dbc7a-541b-41eb-a5de-782b50f56d4f-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963557",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/78915f19-a06e-4931-bd35-0672d26e3032-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963564",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c9643cc3-57ac-4589-9c84-a930f4159d2b-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963523",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/5cfaa321-ce74-42f7-af35-d03d74488567-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963571",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/21df4316-aecf-4e80-967b-55586c233e9f-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963552",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c9ff308e-0b50-4186-8bcc-b2033c2bced7-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10337249263",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/33673c08-d1aa-436b-95fe-289c4c839d18-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963541",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/79069186-c2c2-40be-9f1e-6be5573657ef-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963505",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2929a58c-38fa-4880-b5d1-b6fa2594297c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10337249264",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b847d4c9-1357-4f3f-8fcc-8368798d18cd-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963623",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5183e8ce-af8a-4bbb-a446-13d534d599f1-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963524",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f07eb5cb-6bcd-4a7b-8b07-884300d67632-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963512",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cc77c226-891c-4f73-8e3e-7f55f84be7ad-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9988963617",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f58258cf-aa4c-429f-a79b-8326ffb2753c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: false,
      scheduledAvailable: false,
      asapMinutesRange: [42, 42],
      asapPickupMinutesRange: [19],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "24177023",
    name: "Papa Johns Pizza",
    description: "Pizza",
    averageRating: 4.597403049468994,
    numRatings: 77,
    numRatingsDisplayString: "(77)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a39cc7df-e8cd-4b5a-88f0-5bbd6c1585fa-retina-large.png",
    url: "/store/24177023",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1607003108",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a39cc7df-e8cd-4b5a-88f0-5bbd6c1585fa-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6050057402",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6628f025-d846-4570-8d41-a1ac48d133be-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7791877065",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/84ccf643-833e-431f-9c21-5b7feebae7c2-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5227994012",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c1550f43-9bd8-4ed5-911f-ed12511e38ca-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6027261019",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9f82a6a5-7944-4181-a7ee-f6dbaf1b0901-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5228059252",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bc7de891-e840-44b0-b4f5-ffd7add88439-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6027265828",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/471fc4d2-9b6e-4774-988a-9f6fa8b8ce80-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6539857948",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/84ccf643-833e-431f-9c21-5b7feebae7c2-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6027270589",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9302505f-60fb-4b43-9725-cfd1b49eaacd-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6160420137",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d641c713-c799-490d-af3d-ec5de52eebed-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6160427074",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8d48dc9c-8be8-4f6f-9629-6fd0d8ef1dce-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6027270893",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3fcff4a2-ad27-4058-89b4-7fe8d3b31fa5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6160403061",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6fc1aaa6-bb1d-4e4f-b97f-ad6adfd9910b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8252953192",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/64e3b171-94da-4851-8674-fb5f9e322260-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8036556475",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c23ea684-09de-4dfe-a879-74b6e65277c5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8036550338",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0bcf47e0-9cc0-4e56-88e8-b17a0e294618-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8036546246",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/24b5d102-28b3-4ded-a2f1-831b5e2189c4-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7168994896",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d83c620e-6750-4d47-a478-ce85230d2a3c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6160406854",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/81da3b74-9066-4b36-abcb-0c0984299b0d-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [34, 34],
      asapPickupMinutesRange: [19],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "825558",
    name: "Chef Martin",
    description: "Japanese, Sushi",
    averageRating: 4.880795001983643,
    numRatings: 453,
    numRatingsDisplayString: "(453)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b7152efe-1901-462f-9888-63ef3e1e3d00.jpg",
    url: "/store/825558",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1587387986",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b7152efe-1901-462f-9888-63ef3e1e3d00.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [49, 49],
      asapPickupMinutesRange: [24],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "441531",
    name: "Wok Around Chinese Food",
    description: "Asian, Takeout",
    averageRating: 4.2155961990356445,
    numRatings: 436,
    numRatingsDisplayString: "(436)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/124c3a86-de57-469d-9483-e5a1204f07d1-retina-large.jpg",
    url: "/store/441531",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1402448022",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/124c3a86-de57-469d-9483-e5a1204f07d1-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144288",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/124c3a86-de57-469d-9483-e5a1204f07d1-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144275",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b30d9127-35ce-40ef-8ee6-3e30da4db659-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144291",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0bfeae4c-4572-4487-a530-6dbc19abad3d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144392",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b1f9f49b-7a65-4e50-bbea-b579d2804dbc-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144338",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f4e4b7c4-392c-45d6-84d9-e470aa0f5de3-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144260",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/dfaab4fa-2a37-4d00-aec0-1bf9a76cb30c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144386",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2375aa73-d04c-4c4e-94dd-bc6407140701-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144351",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d32ded5e-7c27-48bd-aaad-0b95d70dca66-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144282",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f03ddf0d-8c40-40ca-83f7-e3904597d1db-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144350",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c9e77ff3-2f05-47af-a019-352c05dbc91e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144302",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c854b5e8-0657-42d4-8d61-e35380a81a0e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144266",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bc4837bb-9e9c-4d0e-b326-62ec09d048b7-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144300",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/dfaab4fa-2a37-4d00-aec0-1bf9a76cb30c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144318",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/54647384-1407-4c03-96ef-3ed937b11ddc-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "775144357",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f920ce9d-364d-4816-b691-8963eeab6099-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [52, 52],
      asapPickupMinutesRange: [35],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "1283134",
    name: "Bring Me Some",
    description: "Vegan",
    averageRating: 4.8794121742248535,
    numRatings: 340,
    numRatingsDisplayString: "(340)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8c84f5a2-c156-4663-84a0-c83e1aad01f2.22",
    url: "/store/1283134",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1394716726",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8c84f5a2-c156-4663-84a0-c83e1aad01f2.22",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "351755828",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e39d9578-b6ce-408f-8c24-caffe42a3f63-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5763718458",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/67612a6b-abef-4f4f-a34e-13bdedb042b2-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "351756091",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/3d46d033-4ba0-49e3-852b-9628849faeb4-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "415455364",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2d6c0346-e5cf-4b2f-919a-9e7b69c6d849-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "351753291",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0b7c566e-ff40-4bfc-98cb-11a3ada3b661-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "351756539",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2d6c0346-e5cf-4b2f-919a-9e7b69c6d849-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "351755934",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d2fb947a-b3d8-4289-ad44-46e2697c0011-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "351755564",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a5b884d9-8ff9-4c23-9134-a18e61935f60-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "415452073",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f87f1895-013a-4404-b19b-cec3f9803a6b-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "351756249",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/bee2a552-e56c-484e-bad1-777c14e07544-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "685482183",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/da196ad8-5b02-44cf-b9ef-ccd3d6b1a4b0-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "351756904",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2d6c0346-e5cf-4b2f-919a-9e7b69c6d849-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [51, 51],
      asapPickupMinutesRange: [16],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "24397451",
    name: "Arby's",
    description: "Sandwiches, Roast Beef",
    averageRating: 4.361111164093018,
    numRatings: 108,
    numRatingsDisplayString: "(108)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/797c384b-a18e-4c99-a29d-05a4ac12d24d.jpeg",
    url: "/store/24397451",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-929124853",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/797c384b-a18e-4c99-a29d-05a4ac12d24d.jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434389432",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d1802bb6-a09f-402c-a9b5-64e8c8ea9390-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434409881",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d5b2275e-28e5-47db-aa4e-f59ca8e91245-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434394613",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e4a92649-785f-46a3-aa87-b42b7fed0560-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434389429",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4f7601a1-e78c-4495-b158-71ebfb5fdf11-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8506305752",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d392c389-6f21-4cbb-a228-e17296296cb0-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434393991",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fbe7a9f5-e5ad-43bb-9d5c-9732024bd662-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434409877",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f89507d8-ad7b-4b61-90d0-2dc0bebb906b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434389437",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e5e751c6-9e5d-458b-be8d-56a0570a00b7-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434393989",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/07dc64d4-097d-4730-80cd-ed96aa7b06ba-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434396775",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4739461a-f181-44f9-b4dd-60ee146738aa-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434396773",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5683f632-4980-48ac-8fe4-e321ff35a69a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434402582",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b4b2adf3-2002-49b9-81f1-4ccc54029846-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8506308722",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e4a92649-785f-46a3-aa87-b42b7fed0560-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434393164",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a292ce4a-b37f-4df2-91d5-377fa210d3ca-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434402581",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/09fa455c-7e07-4a2c-9572-362ed3d477a8-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8506305753",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/35020a32-4594-4ecf-935c-cf9fcaa0cc3a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434389433",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/78930d9d-bb26-420c-8799-738d503de7c8-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6434389434",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/02e42f87-d545-464b-be9a-9c3000d83329-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: false,
      scheduledAvailable: false,
      asapMinutesRange: [28, 28],
      asapPickupMinutesRange: [11],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "25139533",
    name: "Charc Shawarma",
    description: "Wraps, Salads",
    averageRating: 4.4285712242126465,
    numRatings: 28,
    numRatingsDisplayString: "(28)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/636976ce-baaf-40c3-bc46-08b541975e38.jpg",
    url: "/store/25139533",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "2035560139",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/636976ce-baaf-40c3-bc46-08b541975e38.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313833",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/116cc2ec-3238-4576-a39f-8972379d2b52-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313842",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/917a7138-c8f0-4910-b132-2227507921bf-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313847",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bba091b0-1aaa-4381-9878-ab47467000ea-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313829",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/116cc2ec-3238-4576-a39f-8972379d2b52-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313832",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1790f437-d933-4fad-8ffc-887e656ce891-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313828",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c4dd5071-7b83-448e-a482-0ef073c81059-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313837",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7aef1fbc-d94b-42f3-b48f-401083c5e130-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313862",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/78e29c9f-8ded-48b3-b7af-d1be72cfb8fe-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313865",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/17b21a96-083f-40ce-9b36-68c66dfe211a-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313851",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/432b81a6-0c41-40cc-a96b-20e59d40cb51-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313836",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9398daad-3e4f-42f7-8ed7-49a4f5060c43-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313830",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/18eca34b-8dc6-4c17-994c-7334c6613b69-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313846",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1a18069b-85d5-46a8-b163-6e47d4d76b98-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313864",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ad930374-f606-4c72-8c17-202d3fff3aa9-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313860",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2a16e2fa-1e68-472b-8478-077a151999ee-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313838",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/323b3964-6e1b-44cc-b2bf-5a9e33c060f1-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313870",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fac6970b-d0a2-4e9c-a05a-3b58aba9ce3a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9281313861",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2a16e2fa-1e68-472b-8478-077a151999ee-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [37, 37],
      asapPickupMinutesRange: [10],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "2497535",
    name: "Odd Burger",
    description: "Vegan, Vegetarian",
    averageRating: 4.724310874938965,
    numRatings: 798,
    numRatingsDisplayString: "(790+)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/2ba6317e-0505-4d16-a334-307364f15283.jpeg",
    url: "/store/2497535",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-422896290",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/2ba6317e-0505-4d16-a334-307364f15283.jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740837215",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/36f03d06-6640-4106-8db1-5504da44346f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740847996",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d5d836e0-e830-435e-a8dd-27fc7af5d29b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740837216",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1865740a-4bf2-432d-94b0-b223c4832d6e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740844371",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b54fe3fc-550e-4db0-aa30-bb21c02cf3c7-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740844374",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e049f9db-9871-435f-8e38-5f8b8f6f3b8e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740847421",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b6a31ba3-82d8-4a6f-a6e7-12a3d41bbfa1-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740847997",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6fbac0c8-88a8-42fe-99f9-6eff4ea09d9b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740834865",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8eb9a506-d43d-4c86-984c-4ca7681785de-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740847418",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/790ad7d5-aa09-4fbb-bf3f-c5aa1d5b2063-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740847422",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9224b396-d54b-49c0-99e9-40716c77e034-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740847417",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/705e351b-6409-433a-8217-58531db87279-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740862077",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7467ded8-bf1f-4abc-9758-e23ef0bbab53-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8754905919",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9ef29642-7257-45ce-a065-21d75535331c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740837220",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/641bda43-0623-4077-b06a-22acb51f2550-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740834864",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/54149478-3269-46c9-8f92-e71775d72118-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8754855651",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2fb42819-bd7c-4a45-88d4-252eae343e17-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8754905920",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8b537c49-7917-4e40-9fc6-fe212cfb9174-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8754870198",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/899b3e27-721e-4cec-aa9f-c55a97321f80-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8737082559",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cd5b26fa-dabe-4df6-bb65-0196c0b7f7ec-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740862076",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9609405f-e308-4342-9e66-06e821708c0f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7740849326",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9ee59246-38dc-42fc-a091-5ae15409da09-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8754856637",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/58290f54-80c9-4877-b06f-11b65d247ece-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [55, 55],
      asapPickupMinutesRange: [24],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "1328883",
    name: "Booster Juice",
    description: "Smoothies, Healthy",
    averageRating: 4.747787952423096,
    numRatings: 226,
    numRatingsDisplayString: "(226)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/19936.png",
    url: "/store/1328883",
    isConsumerSubscriptionEligible: false,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1618202786",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/19936.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8146949651",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ab61b84f-fdd6-462d-bd88-959ae1ea5e4c-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8146949583",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/04f24a2c-87ef-438e-8482-551955274214-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8146949566",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c6a2e21e-27fb-4098-b001-2404e9cf74bc-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8146949578",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f6f4021e-3687-43fd-b1b0-45286443ca79-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8146949581",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/895d9962-56fc-4af6-a405-9e0409c19a7b-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8261589626",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/499ad498-0316-4b97-9431-a04679c6edf0-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [27, 27],
      asapPickupMinutesRange: [13],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "900192",
    name: "Firehouse Subs",
    description: "Sandwiches, Roast Beef",
    averageRating: 4.67700719833374,
    numRatings: 548,
    numRatingsDisplayString: "(540+)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a72a62e3-4a2c-4b70-a426-895381f028c0-retina-large-jpeg",
    url: "/store/900192",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "2119200640",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a72a62e3-4a2c-4b70-a426-895381f028c0-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "1229774109",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/3802d7fb-b62e-419a-bda9-40561b71d439-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870887987",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/afdc6118-202f-4274-bfb6-b332d782f20b-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870887983",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/08671660-623b-4095-b8cd-52e379445dc1-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870887982",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cda2ccff-72bf-4a6c-8ca4-c60a96a17f4f-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870887988",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a6e69828-3ca5-42d8-96ed-0179a0108210-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870893159",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1ff20e67-9294-4700-913a-bca15a05d7e5-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870887989",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ecf0042d-f073-4c50-86a4-9cb97f54fc3b-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870887986",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b3b6e220-412a-430e-b39f-c1f74df66b2d-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870887992",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/586e55eb-2d37-42bf-a82c-5b8f57b8d2f6-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870887985",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/53e0fa5e-4d96-460e-980c-1129cfef0212-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870893158",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dbcaabc0-4384-4815-b5e8-e4f9f12cd1fb-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870887991",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3c584554-747c-4a05-9dde-44b2f77ea910-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870893163",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2ae83f1b-9093-4e8c-b801-6810c0cdb952-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870887990",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/400ce6c1-6356-4ddf-95e2-4562213d0202-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870902087",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/198f4295-a0f7-404a-af18-be6062e0bbb3-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870902093",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b2975b41-35ce-4493-bca2-d453bc8e29ca-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870887984",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cfc138d5-f5e8-454d-a69d-339457c9986a-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870902090",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4218023e-208e-43eb-80a1-e33d0a13ca6f-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870902088",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98ce363f-3dee-4039-b818-50244f3fda08-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870888960",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1b2bd583-3d42-48b8-b482-29aebe0365b5-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870893164",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/69235d8e-b6bf-4c65-97f8-5e7cdc994512-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7870888962",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/61c1c266-5b02-4dac-9cd1-d4135b29bdd5-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [38, 38],
      asapPickupMinutesRange: [21],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "$0 delivery fee",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "1220063",
    name: "Villa Madina",
    description: "Shawarma, Sandwiches",
    averageRating: 4.043478012084961,
    numRatings: 184,
    numRatingsDisplayString: "(184)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8e55f7d2-3ce3-41f9-861f-cb6ca0824934.jpg",
    url: "/store/1220063",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1985268726",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8e55f7d2-3ce3-41f9-861f-cb6ca0824934.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021765971",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/076b944b-7c20-43ef-bac3-39770e36a07a-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021765969",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/98a00c3d-81b7-4256-bc52-fa4558158dfd-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021763420",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7d3c553b-b48b-4cbb-86f1-587d631163bd-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021775290",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e5d11607-26b8-4396-bc0c-f44afcf1e736-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021760417",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4584f13f-d850-4897-9096-182c5d9a0b00-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021760419",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/363a9655-e8d0-4811-9440-e6f513af3ddf-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021765970",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2f2cfe5f-55e6-4d68-bcc4-85b274284d4a-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021752141",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f48a64d4-1704-46e5-b253-0937d61118d8-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021775292",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/32715aa5-ffd4-43b5-a25f-0cfc604ae7f2-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021760418",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/06b660c6-e633-4db1-b155-7d0269ea3b7e-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021775299",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2156ab27-a77e-41d8-b2bd-a6e6096f78d6-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021752140",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f5b7d7c5-aea1-4cba-9c98-54eaaa6e89ad-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021774313",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5f75350c-7bf6-4772-8293-e29198b020b9-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021733470",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/78d7a1d7-9d59-4607-822e-28574852bcfb-a980d880-4838-4f1e-9888-c9883fa49b92-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021763421",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7e670a78-990a-46b1-821c-d2c2e4f804ae-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021760420",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/290eaccc-4a73-4807-9d36-542d4655afa6-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021733471",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/541ebcee-3d1f-46cf-8805-4e2d8017a750-d04076dd-0578-46a9-ae2e-e433b62c8c5d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021763423",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cb213504-588e-42d6-a2f8-de8d8dcfb170-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021775294",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fd79f195-f450-447f-9301-8c35d7d41fab-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021775295",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fbf38425-b6fe-43d8-bf55-8ff4432fe0aa-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021774312",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/04148949-4b14-4fbc-8559-48a001107a85-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021752142",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/498956af-c84c-4b50-98f6-2077cccf05fd-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6021775297",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/413ba5b5-3b6b-4865-95a4-042734660669-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [62, 62],
      asapPickupMinutesRange: [16],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "25499073",
    name: "BarBurrito",
    description: "Quesadillas, Family Meals",
    averageRating: 4.3333330154418945,
    numRatings: 3,
    numRatingsDisplayString: "",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/eab852f7-f628-49c5-a880-183bc9b2f2a5.jpg",
    url: "/store/25499073",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1697851282",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/eab852f7-f628-49c5-a880-183bc9b2f2a5.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233768",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6374ef30-e424-4ae4-8ddb-6081484f094f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233797",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/11ff6a9f-6b97-4cce-a2dd-49c4b629600e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233795",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bd1e02a5-6b07-44dc-bffd-811f9e675fb5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233842",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1feb2739-8c98-4429-ac9e-581bb3f15cfd-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233841",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cc187779-b7c2-42d5-ba8a-3c7be3e3de60-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233763",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d3709c4b-b2d1-4e5f-8d27-678c35cdb1eb-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233843",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6643b9ad-bd9c-4d0e-a8e2-285682579d98-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233793",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/28fba863-84e9-486e-941f-0a17a0422eae-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233837",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a38e234c-6cfe-414b-9fa0-ec371c726702-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233761",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cc840574-4d38-48f2-b852-90b44f684fca-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233734",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/73b93a72-b60e-4f34-b430-816f31136eb3-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233769",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c8f41cca-b639-4340-86d8-12eb68eb38be-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233845",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2d929124-78c6-4508-af56-d04a1684e812-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233790",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/928a119f-bac7-48bf-9933-b7c245adef57-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233866",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6e697e7c-8c11-4cd3-8e2f-ee314d41c3d2-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233760",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/28f09f98-3f76-4888-8ef6-68109b8dc99f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233858",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/505515ef-2936-4e94-ae5d-9d6afcc24b36-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233759",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/92da79e4-4534-4008-8022-bba6162034fd-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975239473",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d69ae619-dd90-4284-abb6-6ebc55b34f63-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233776",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e1ad9e96-f2f7-4841-94cf-695670d7464e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233713",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3187da1f-53b7-4c92-9b33-0b8c71c6b874-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233765",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f5693e3f-8342-465d-9e14-1e93c64da80d-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9975233867",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/74cdee62-fbb9-4933-894f-b42cd5349e91-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [39, 39],
      asapPickupMinutesRange: [12],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "24910603",
    name: "Mary Brown's Chicken",
    description: "Fried Chicken, Sandwiches",
    averageRating: 4.706421852111816,
    numRatings: 109,
    numRatingsDisplayString: "(109)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b6674a4f-488b-4c75-8bda-2c59f34bd842.jpg",
    url: "/store/24910603",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1307982162",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b6674a4f-488b-4c75-8bda-2c59f34bd842.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670709968",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3f3833f4-1e4d-46a9-9c53-4ae82926fc89-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710076",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f0448a75-cf20-40a5-aacb-2371d2363a31-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670709974",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/63dc6e18-1755-48af-ac4e-2f0da375b553-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670709973",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f7a3d168-a3d3-4d4b-bba7-1f590af4ffa0-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710083",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/48bdfd7c-fcfa-493c-909a-60e2c088ca89-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670709987",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4577966a-391e-4040-863c-2ab871c51bcb-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710081",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bb11c40f-a6e9-4636-9257-cb2d2ede358d-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710079",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7ac96639-db7d-4edf-bf23-180542c6116f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670709975",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/85f616b2-717b-4656-bef8-ca329b6b46f1-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710069",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/53d59458-1d89-4e20-9740-19b154e0c410-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710086",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5bc2b798-6d77-4f84-92cf-c837e67cc935-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710082",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e2b6fb94-1ec7-42c3-8a12-e3411a39928e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710009",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ab8a605-b753-4951-b0ea-f034a18fef43-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3663202483",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b0212ee6-ac05-439d-b786-1820bb39c45c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710062",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/52b822ff-aec9-48dd-a9e7-6716a9b2fbaf-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670709980",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/407321fd-4c6c-4ec2-ae90-48ec692fef49-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670709970",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/27d6cf28-d635-46db-9baa-edbe02be70e9-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710007",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3210364d-2f42-4628-a24b-5df85c9922e7-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710006",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/23899970-2e97-4aee-ade1-fc1df657d22d-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2670710008",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e2bb19bb-e7bd-446b-9584-8d098b90d0b2-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [28, 28],
      asapPickupMinutesRange: [10],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "23061659",
    name: "Indian Spice",
    description: "Street Food, Lassi",
    averageRating: 4.181818008422852,
    numRatings: 253,
    numRatingsDisplayString: "(253)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/94e428d5-0901-41ed-9181-7e8d344afe5e.09",
    url: "/store/23061659",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1622750573",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/94e428d5-0901-41ed-9181-7e8d344afe5e.09",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2587519736",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e034c243-aa2f-4b58-a511-5d32ebf14ed7-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2963762893",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f6e8573b-314c-401b-a8ba-444bd3d05ec5-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2587519734",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7356c27c-c292-4abf-9803-6168dc7b9e50-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2963747260",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8c1ccb96-90bf-43e5-b811-61943ab88cf6-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2963762030",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d58e606c-49c6-402a-b59b-49f52f0e65d6-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3076425989",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/845f6ad7-93ce-403a-81bb-2d7ffa0a6dda-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2963748485",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0d43ca59-1eac-45c4-8731-4932c6bda390-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9872999454",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e034c243-aa2f-4b58-a511-5d32ebf14ed7-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9872384228",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e034c243-aa2f-4b58-a511-5d32ebf14ed7-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [55, 55],
      asapPickupMinutesRange: [18],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "212828",
    name: "Mountain Grill",
    description: "Pickup, Takeout",
    averageRating: 4.686812877655029,
    numRatings: 546,
    numRatingsDisplayString: "(540+)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/103e7e40-f351-4931-9bdf-5648c811f3fd-retina-large.jpg",
    url: "/store/212828",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1039751759",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/103e7e40-f351-4931-9bdf-5648c811f3fd-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55973343",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/103e7e40-f351-4931-9bdf-5648c811f3fd-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55970532",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/de449b97-502b-4cef-9bde-cb830b3c37eb-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55975138",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e421135b-1d4d-47ec-b2b4-672b1528ec2e-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55973825",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e076fe25-a59b-4f46-b2c9-9836b2d1660f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55974124",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/099c46a6-b1fc-417e-af1a-6ee851e6c405-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55969843",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f58cc783-758a-4d68-817b-5af152fb54a3-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55969745",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/27d2b045-82bc-415a-b180-dcfb5af237c7-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55973892",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b7f4444b-d17b-4e91-b225-5c2fda3da5d4-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55984166",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/86b88746-5500-4bc9-a3ac-7a0ebccf1e3d-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55974327",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/29546810-6640-4dd2-89d0-a125019670f3-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55970212",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0eee387c-6c55-4ba3-9043-a60fb759cbaf-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55970399",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/57a414be-42c0-4210-b5db-951abc32acb1-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55975381",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/1838ae77-dbf1-4c90-a355-158d3dcee8d4-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55975210",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4e6f4e8e-ad77-4336-ba4e-ad62915934a3-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55974151",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9eb7d25d-5041-4801-ad18-0a8f2f8e9246-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55984754",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2810ce3f-bf44-48dc-8b7d-572f7e391397-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55969877",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6a8c04b6-60d0-466a-b577-cef507831402-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55973911",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/575074e9-1996-41c2-9298-bcbe2313dd1e-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "143441509",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/55451af2-49f3-465f-9af8-a59a9341b6b7-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55971042",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5379990a-9d11-452c-9b4c-747559148d4e-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55979895",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/82d08493-4d10-4fea-ad05-5f3eb5c5ae0c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "55970253",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/150b5efd-4ee9-4c42-9088-c8d1ef9abf54-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [46, 46],
      asapPickupMinutesRange: [28],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "1208787",
    name: "Cinnabon",
    description: "Cinnamon Roll, Sweets",
    averageRating: 4.733788013458252,
    numRatings: 293,
    numRatingsDisplayString: "(293)",
    priceRange: 1,
    priceRangeDisplayString: "$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/259304.jpg",
    url: "/store/1208787",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "349512507",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/259304.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "212233341",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/49c3d8b7-ad6c-4a3d-9a6b-efd5d0435359-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "212233330",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e1f50a08-b5ce-4aee-bc63-7ef11a6bb733-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "312474783",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cb010cb9-e57f-43e7-b619-3cad91ca4354-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "212233339",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/357d82c8-f7f2-4241-bbb4-bc618b7489e2-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "212233333",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/95fcdadb-881a-45cd-a9c0-47d40b0b8293-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "212233335",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c849e5bc-e772-49a9-86ae-5bd20ce6edfb-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "224768182",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2c3c123a-1d8c-45c9-aa9d-92574979c678-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "212233331",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d16cfd33-06ac-4ae6-be89-3e06dada4ba4-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "212233342",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b44148a7-04f5-46e0-b897-830bb101878e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "212233334",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7ebb9b25-1fec-4f1f-8eae-f354af4e502a-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "212233345",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b44148a7-04f5-46e0-b897-830bb101878e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5632507452",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b44148a7-04f5-46e0-b897-830bb101878e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5635542254",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/75b571d7-cb8e-431d-a195-a77bbbb17ecc-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5635542252",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b44148a7-04f5-46e0-b897-830bb101878e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [49, 49],
      asapPickupMinutesRange: [8],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "277358",
    name: "Rony's Rotisserie",
    description: "Middle Eastern, Barbecue",
    averageRating: 4.690475940704346,
    numRatings: 42,
    numRatingsDisplayString: "(42)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/9266eeda-1987-4348-bec3-d8a59a124a32.jpg",
    url: "/store/277358",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "536702400",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/9266eeda-1987-4348-bec3-d8a59a124a32.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5420331221",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/aef31c5d-9385-409e-a07a-8138cb133492-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5420352982",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/812c3606-c8b2-4986-8438-0ba11999b816-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5420361213",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c87fc0dd-c778-4ac2-9fe4-787b657bc930-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5420350517",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/41563491-5998-4c89-947a-465b77c6a84c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5420331222",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/38b0eb27-281b-4280-b3fc-251b4d13cb1c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5420361212",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/db5ec735-4923-4a65-9397-782f0ce0bccc-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5420352983",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f5e6abad-bfb2-48a3-bb72-26c5314303ac-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [39, 39],
      asapPickupMinutesRange: [13],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "213090",
    name: "Mike's Submarine",
    description: "Juice & Smoothie, Milk Shakes",
    averageRating: 4.335024833679199,
    numRatings: 591,
    numRatingsDisplayString: "(590+)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/df87d8dd-374c-4227-9c71-7a769399ae13.jpg",
    url: "/store/213090",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-667782286",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/df87d8dd-374c-4227-9c71-7a769399ae13.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "136399070",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ccdd32be-469e-433b-aa85-068d17a1fd0f-retina-large.JPEG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "136399037",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/52690f80-bec2-4867-9c92-f8379346d08f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "136399067",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3ac1802d-c9bd-4a1a-bf85-fd8f046dd5c2-retina-large.JPEG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "136399060",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/52690f80-bec2-4867-9c92-f8379346d08f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "136399052",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/da4c7456-ccbc-4aec-b831-80569835808a-retina-large.PNG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "136399059",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b56d05e5-116b-4234-9d54-f09513444d6e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "136399036",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0b9bbbd9-121c-4df1-bb8f-a2387f04623e-retina-large.JPEG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "136399066",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5089046d-4d05-4f2e-9ce2-73bc9b5dc060-retina-large.JPEG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "136399054",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/27a1214b-12ea-4f97-87bb-d5909b9a1de8-retina-large.PNG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "136399032",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/705ba3f1-c800-448e-934c-5520f509bc37-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [43, 43],
      asapPickupMinutesRange: [14],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "1777708",
    name: "Harvey's",
    description: "Burgers, Chicken",
    averageRating: 4.379310131072998,
    numRatings: 261,
    numRatingsDisplayString: "(261)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/d20ea4f8-cfc0-401a-a2ca-7b329a6a4db2.jpg",
    url: "/store/1777708",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1531091478",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/d20ea4f8-cfc0-401a-a2ca-7b329a6a4db2.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064809",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/4b99f1d9-f010-4743-bae8-fd4398aea825-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064786",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9c346562-1cef-4549-bde9-da80f7eda2e9-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064875",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/1e6471fc-14ea-4e6f-818e-2a5d9906ec2c-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064791",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/77befb1d-c650-45ef-af98-50473925abc7-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064879",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f4e90529-25ba-4938-a50d-345638480f48-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064812",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/27f840ae-91c0-4a12-b31e-b0e14bb9d757-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064796",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/85e12a07-e431-4ac5-a280-c0fbfe3f32f5-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760065130",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/81d7ca95-4cc9-4324-b378-dd19c6d5479f-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064823",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2521ec34-f5b2-4391-9d95-0e8990fb8670-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064859",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/93bc6979-014f-4593-8e26-288aaf9f1914-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064822",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/98a1c1a0-45cd-4927-8103-4e79778a936f-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064800",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/909d9136-e02b-4ec6-a7ca-57da36f77fb7-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064774",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/fb4120f4-b881-451f-8286-2dcbcc673198-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064776",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/60cab8da-9181-4e12-bb92-22399f588392-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3669400702",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0697ac2b-e465-4844-888b-508d7b8fbd19-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064810",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/124910c6-a79b-4de1-b2ee-00a85ecc755a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2543735591",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/dbad68c3-022b-4cdb-8be2-72de20bc10e1-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064793",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9ac3fdbf-9cb5-40c8-9680-f57064e0336e-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064788",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/909d9136-e02b-4ec6-a7ca-57da36f77fb7-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2837964184",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b3cd42b6-a1cb-4021-b515-6a85dfbb6ec5-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2543735593",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/77fa4cdd-a451-4515-97ae-438594645e4b-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "760064778",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8036e30f-56af-4be8-ad4e-44d62d4fed44-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [37, 37],
      asapPickupMinutesRange: [17],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "842700",
    name: "Kelseys Original Roadhouse",
    description: "Burgers, Chicken Wings",
    averageRating: 4.480110168457031,
    numRatings: 729,
    numRatingsDisplayString: "(720+)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/0c6bb1e5-98ba-48af-ab39-05f2387ce4c5.png",
    url: "/store/842700",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-766748881",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/0c6bb1e5-98ba-48af-ab39-05f2387ce4c5.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7163223922",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e7328d84-75df-4166-9502-a01ab0e01f64-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "412145222",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f07f1555-bd00-453f-a204-e2e65d3013e9-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "412145221",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/fef64133-98fe-4b79-b4a0-7b619e58156b-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342270563",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/feba4754-056d-4bfc-8f16-b25c68e47ee0-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342265047",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ce407d61-ab95-433c-854f-0c59807894ac-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342272134",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fe6ba5e0-3368-4616-881d-97e32bbc7b8f-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342270561",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/be43545a-765e-4757-81b6-31fe9f9cfae9-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8024911615",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cb0590e4-75f0-4b10-b32c-0dea0fcb0a45-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342264636",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4c9d0a80-2d23-4d64-9af5-928d1ff1f85b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342269557",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4b284b6c-7726-4d98-8191-8ebea8493834-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342269555",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0671085a-ac76-4aca-9417-d9335554f26b-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "412145255",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c31df5f7-14f8-4dfb-bc3e-cefca30aed66-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342265045",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c3e6b702-d720-46c3-bec3-3fc7e295da75-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342285293",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e45a842f-4793-426f-a31d-2b47f02fbb7d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342285304",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7c2bff40-23e8-4493-b02f-f19e3c3a9bbe-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342264644",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1301fdf9-e80d-4ddd-be35-8a716cea2349-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342264635",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f3f73cf4-4ee0-42f5-8248-7abde935b4b7-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342265043",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/67721c64-1822-477d-acf8-28c4130954ed-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342264637",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7e7feda9-7c00-48ee-bcc3-769dc148cdf5-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342264640",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2e5f0b6b-90f4-4bb4-8c4a-9cac2a70b742-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "412145198",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/41a7b361-af46-4cc9-90ec-6ea8bb3bf02e-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8342285299",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bff9a880-c51d-482b-b60b-83fd9ec7d99e-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [43, 43],
      asapPickupMinutesRange: [21],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "1163871",
    name: "ManchuWOK",
    description: "Chinese, Noodles",
    averageRating: 4.563685894012451,
    numRatings: 369,
    numRatingsDisplayString: "(369)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1da37e89-bdf6-405a-8f98-c5d4d4d3cbb2-retina-large.JPG",
    url: "/store/1163871",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-118633677",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1da37e89-bdf6-405a-8f98-c5d4d4d3cbb2-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307521046",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0cfbcc31-e603-425f-bbf4-40fc74a6188a-d1dbd3bf-2048-427b-abb8-26df12285ae5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307521047",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/21d77620-77e7-46a0-b2ef-9a26c6796053-b81e9117-35b0-4648-a6fb-1e9151659bb5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307521045",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/324b16ec-a5d9-4838-bbbc-c159ed3e2771-454f01d9-caf9-4a4b-8c8e-f9bba2523787-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307490452",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/17b1b494-aa3f-474d-821e-9beed09aa60e-ec663923-6790-4298-ac97-041cb3323dcf-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307490453",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b0226c1d-c932-408d-b47f-f8ca4a1057f9-f5a9d449-32cf-4d4a-8a3e-1dc6d0d27982-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307490450",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4893a4ba-0307-485e-aab6-63b4669d8956-62fc59b1-9ad2-4e88-8a1a-a4e3821b40df-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307490445",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f444703f-774b-440f-9155-8015de5ce432-6d9c260f-c27c-4651-aedf-4464aa7fc655-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307540512",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/525cf4d3-52d6-4810-9cb2-3c633ed1a844-e57dc6ee-5309-4412-a6ef-bd597461a366-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307540510",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cd5144bd-3b11-402e-9f11-2d34d391a4b7-1635d400-8c3a-4ab4-a692-13e8bbd9d9f0-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307490447",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/167264fe-ef43-4185-a8b3-f243a6cf79af-5166e805-8378-4a49-8216-a7cfc0e2d360-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307490446",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7276d9a1-766c-404d-b0ed-e7d0c1b81b0d-68915a0e-4f6b-415e-8028-d92b39458406-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307490449",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d8b2920b-685e-46f1-acfb-97685fd5af7d-13a53230-5875-4775-b0ab-a1db690ef072-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307520195",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/61c2e1e2-29d9-4432-81f7-464a4a0b9bc4-96403c2e-08e6-4e5e-9901-baca9c31894a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9307490451",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5b892fbb-aa78-4e2e-ae4a-d9f79668e292-cb47e52b-a4fb-4cd9-b40d-16752d86c8c9-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [41, 41],
      asapPickupMinutesRange: [20],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "1555255",
    name: "Romana Pizza",
    description: "Pizza, Wings",
    averageRating: 4.655303001403809,
    numRatings: 792,
    numRatingsDisplayString: "(790+)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/f8bf3585-3782-4250-b558-854818300369.jpg",
    url: "/store/1555255",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-308072361",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/f8bf3585-3782-4250-b558-854818300369.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175111",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2186900a-b28f-451a-8231-8ed0f7481895-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175113",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cac4bfaf-7532-4ddc-81e9-9f59008bd262-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175110",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cac4bfaf-7532-4ddc-81e9-9f59008bd262-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175109",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2186900a-b28f-451a-8231-8ed0f7481895-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175129",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/128bea2e-e65e-486f-8c50-a49074870b42-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "448516499",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a5a5cc53-bb12-48dd-ada2-0a4f6567a482-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "447874939",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ded53f52-0e69-4303-95f9-553d32725b51-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175117",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cac4bfaf-7532-4ddc-81e9-9f59008bd262-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175118",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2186900a-b28f-451a-8231-8ed0f7481895-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175148",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/fc68fba3-62e8-490f-9126-97e6c1582bf2-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175159",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2d5bcebd-d1a1-4952-9afc-428c8ef6a397-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175115",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cac4bfaf-7532-4ddc-81e9-9f59008bd262-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175130",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/29cbad5f-dc20-45da-87e7-c8be7c8acfe8-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175114",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2186900a-b28f-451a-8231-8ed0f7481895-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175119",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cac4bfaf-7532-4ddc-81e9-9f59008bd262-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175131",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/29cbad5f-dc20-45da-87e7-c8be7c8acfe8-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175132",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/29cbad5f-dc20-45da-87e7-c8be7c8acfe8-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "449351498",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e89e7c22-cf3e-45dd-b899-afda983802e8-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175133",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/29cbad5f-dc20-45da-87e7-c8be7c8acfe8-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "434175134",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/29cbad5f-dc20-45da-87e7-c8be7c8acfe8-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [36, 36],
      asapPickupMinutesRange: [25],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "1043206",
    name: "Pizza Hut",
    description: "Pizza, Chicken Wings",
    averageRating: 4.597221851348877,
    numRatings: 216,
    numRatingsDisplayString: "(216)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ac8f50ba-c02f-4c43-952a-8e93a364968a-retina-large-jpeg",
    url: "/store/1043206",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "473595917",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ac8f50ba-c02f-4c43-952a-8e93a364968a-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "-766726608",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b3160b80-cb8d-408f-ae0d-f021cd1ef8e4-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "-2121403278",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7a3d2979-a3fb-4871-be1b-77fd5e2741c7-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "600473773",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8a1a53f9-5ee6-42be-8cde-c1f69c6e254e-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "-1391785008",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/15f6092b-182c-487b-8b60-b30825d2c2d1-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812548",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ce2088bf-6db8-41a4-a5c8-b01744848f97-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812474",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5e5a9bae-8cb8-487b-bd14-c24b94ae85e4-e2bcc5ad-a6d4-4e6c-aba2-4d1f8ebd25fa-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812522",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b8bcf5db-f8c8-4b1e-be58-5b42202bbd2b-70d02e71-6e11-4619-a609-7bb7afdb2ce8-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812562",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ce2088bf-6db8-41a4-a5c8-b01744848f97-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812554",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/63221109-f4e1-4e7c-b818-388230ca8d43-4c2ce086-e285-4836-b74b-2388c6386082-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812550",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ef75f05-d4a5-4b05-9718-b1414c6f0c59-fe3e3e76-e033-4841-92f9-893ebafec5d4-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812498",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/377c0112-ad01-4d02-8253-827a9b5b9556-e503e894-e95d-49ba-bfee-e5ab554e983a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812583",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ce2088bf-6db8-41a4-a5c8-b01744848f97-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812551",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9b5230de-25cf-485e-804a-2fb92f90b146-bdbffcfc-8ddc-442f-8aec-9ee3d57776ff-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812516",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/23fcee0a-f5fc-4779-af9c-b739f648184e-f8c2a81a-3b89-4a6b-b4fd-a16ae4f1177c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6223389040",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b0ebac76-467c-4514-a55e-4f4a17aa5733-dc5e849f-ce9d-4f49-8664-105084bf0568-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "4627213589",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fb90f0b5-3ba8-4627-9cc6-bc423312aaa6-fae1910e-cf61-44cd-bd39-53728ba11fda-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812477",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b8bcf5db-f8c8-4b1e-be58-5b42202bbd2b-70d02e71-6e11-4619-a609-7bb7afdb2ce8-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812575",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9cf7ea84-d26e-4e84-9aaf-50dec3a65863-1ad77099-e9f5-4a74-84b5-569cdf04fe5f-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812504",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9b5230de-25cf-485e-804a-2fb92f90b146-bdbffcfc-8ddc-442f-8aec-9ee3d57776ff-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3182611900",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2c73c6d5-a676-43b4-bf1f-af1db1ed1bb2-9034e29a-976b-4ca1-908f-9d95f96f3bf7-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812487",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7f7f561c-f22f-4d18-bee6-c0261592d2e7-8d36fb2d-f533-44df-80c2-9e25f10d41a0-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812520",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b8bcf5db-f8c8-4b1e-be58-5b42202bbd2b-70d02e71-6e11-4619-a609-7bb7afdb2ce8-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812527",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/23fcee0a-f5fc-4779-af9c-b739f648184e-f8c2a81a-3b89-4a6b-b4fd-a16ae4f1177c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812529",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ce2088bf-6db8-41a4-a5c8-b01744848f97-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "482812578",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/23fcee0a-f5fc-4779-af9c-b739f648184e-f8c2a81a-3b89-4a6b-b4fd-a16ae4f1177c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [32, 32],
      asapPickupMinutesRange: [23],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "25138364",
    name: "Burger King",
    description: "Burgers, Sandwiches",
    averageRating: 4.181818008422852,
    numRatings: 11,
    numRatingsDisplayString: "(11)",
    priceRange: 1,
    priceRangeDisplayString: "$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/25482b81-726c-40d4-9efa-8447101d20b3-retina-large-jpeg",
    url: "/store/25138364",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1579418601",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/25482b81-726c-40d4-9efa-8447101d20b3-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9722953541",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/53dfdaf7-4930-48c8-8798-3c1af74ecdd0-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713729144",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4a8548d2-bd59-4abe-846b-9bf12c05ced1-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713729149",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5487eaaa-7d08-479f-8b9c-77f1c06352d5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713719635",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/594a4b70-fef3-46cd-b2e7-6ce188831fa9-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713729171",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3dccdcb4-488d-40d3-9458-e419c6059093-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713729145",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c50d7304-ea0d-4c84-9c1b-9870ec472222-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9828987359",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3c6e56ba-7ec7-4614-897a-21912e050827-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713719638",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7511dcee-e39a-44d5-a034-13d7dac82c73-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713719634",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4c38b917-7f33-4403-83b2-fbc12cb8e67f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9722953540",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8f14bd86-b552-4e63-964d-3b0cf9050b93-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713729167",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fc093673-4c1f-4793-a81e-31ef63889d36-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713719637",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6a4650d2-d90e-417f-9e9c-3f968a68a5c8-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713735727",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a202dd84-9e3c-4feb-9c6d-d1e26a818ecf-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713719632",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e47492da-7fdd-4c26-970c-4751d2c3aed8-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713729146",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7bcbecac-3168-468b-9f79-7e21078e7486-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713735711",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2d1738ca-fdab-4f3d-8f43-29cc0fb78326-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713735709",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/239ab78a-1daf-4f57-af33-d4ea2ef187e8-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9828989552",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1f986803-3aa4-4297-836a-b41e115ac0cb-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713729123",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/58a96ba5-52f1-4edc-aa19-3d15aa8d6614-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713729185",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/aa63880b-475f-42a0-bd80-0c2145ead6a4-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713735714",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bdb9583e-a674-48dd-b1b1-6762256f89d0-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713729148",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/584c079b-454f-47b9-9706-c8ec354fd842-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713735730",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d8901f5d-c152-4d67-a315-b9fce48cd118-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9713735728",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e46718af-e4c6-4ac2-bbd3-465fbde0d34b-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [52, 52],
      asapPickupMinutesRange: [20],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "487293",
    name: "A&W Canada",
    description: "Burgers, Chicken",
    averageRating: 4.078516960144043,
    numRatings: 917,
    numRatingsDisplayString: "(910+)",
    priceRange: 1,
    priceRangeDisplayString: "$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/027de989-2c44-45de-a337-26f380d73705-retina-large-jpeg",
    url: "/store/487293",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "5115082638",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/027de989-2c44-45de-a337-26f380d73705-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082633",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a8ffac43-8dbd-475b-af68-bf2ae55aacfe-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082695",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/5ee951f2-ba56-4e6f-b58c-45864b7abbbc-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082644",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d32104fb-1b8b-4940-88a0-ef0165557042-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082694",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2d05480e-b62d-4556-87c6-431371a87d3a-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082658",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b85348e1-3483-47b8-a060-a0985589523a-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082677",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/1ec58c92-6b0b-45b2-b7e5-4865f7f43eea-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082635",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/204914d4-375c-4713-a3f0-50de617083e7-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082698",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/39c18054-f348-43b7-89a2-2a2d9401e8db-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082662",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d3dbd7e2-bd0a-44cc-aea6-655461a26089-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082636",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8c377371-ec53-40f7-9f04-864e9b7aabee-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082637",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b3c24230-74e8-4271-a28d-f5f6c74a365c-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082639",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d7cc6ade-a303-4199-8fd4-b1e4d5682ddf-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082668",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2dfb4c23-7f6e-4484-b05a-468c5ca5f2a8-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082696",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/be8c964b-e520-4329-91b4-3d1a5681919e-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082669",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d346429d-81ec-40fb-b55c-c6bffafd0ef2-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082663",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/3d6ec40e-25d1-49a4-9232-d820d77fc5ab-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082641",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/f1b28451-eccc-4b60-bd37-97e4feec7a46-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082673",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c4a3068f-9ac2-4774-9920-b3441a6b8290-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082642",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cbf4d99d-2691-4a7c-839c-ffdd168a331a-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082660",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7db935fb-6168-49ed-b77f-69c2547c0435-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "5115082671",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/630f9e26-30b9-49b1-b330-fbf5a416adb6-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: false,
      scheduledAvailable: false,
      asapMinutesRange: [28, 28],
      asapPickupMinutesRange: [17],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "360217",
    name: "Subway",
    description: "Sandwiches, Salads",
    averageRating: 4.3333330154418945,
    numRatings: 114,
    numRatingsDisplayString: "(114)",
    priceRange: 1,
    priceRangeDisplayString: "$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/44319106-8631-4fd1-9363-df1aa72350c3-retina-large.PNG",
    url: "/store/360217",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1167963546",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/44319106-8631-4fd1-9363-df1aa72350c3-retina-large.PNG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208056557",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d83e1bda-ffaf-46a4-8543-a7285813eda1-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208056554",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dc6e5304-41c7-4b96-aef7-5ba8dbaba233-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208056551",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f9648e64-3fd5-4d9f-b0ab-8aa3d8056050-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208056556",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ad8dead1-4a9e-4b22-a190-79c0c92107f2-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208056550",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/69eea81b-6e2d-4395-8602-4e38a823ce9d-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208056548",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c71d2151-d5e7-4497-ae48-b1d9c73217bf-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208056549",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b58d18f5-e6ca-4541-bccc-9fb294d545bf-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208057749",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fa1c9f1e-94cb-4c3e-901d-ec37b7a68df8-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208056103",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3cac1ebe-5f76-4771-b341-325a85a08680-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208057748",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4ba8c53a-6615-4b7f-92fe-824049c79db2-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208057746",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/41fe7556-9c09-4b44-afac-78881ac417d9-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208032863",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/21f563d3-eaf3-4896-8c34-09d410da9506-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208057745",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/31666ad3-5730-459a-b3a2-460248525c54-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208057751",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/27cb650b-e2dc-4c7c-b1e7-a848bfb27c00-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208057757",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/af256475-be27-4ca6-a068-30cd8f58b47b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10208057747",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/20cb9004-dede-49c0-a1e8-ac469fe77b0b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [32, 32],
      asapPickupMinutesRange: [12],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "24474645",
    name: "Red Swan Pizza",
    description: "Pizza, Chicken Wings",
    averageRating: 4.186440944671631,
    numRatings: 59,
    numRatingsDisplayString: "(59)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/69f4fcfd-4dff-4b06-8ba9-d636ca1433ec.jpg",
    url: "/store/24474645",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "2103792698",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/69f4fcfd-4dff-4b06-8ba9-d636ca1433ec.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966410",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6bd51a76-65cf-4b7b-b2f8-800f68e7b067-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966409",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ba9c6407-332d-434f-8218-009604c62132-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966396",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0cf85af8-359d-4ff2-98da-ed74c682df59-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966394",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ce70bd7-3d77-48a2-b7b7-82a097c95f25-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966411",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/99be2567-39c3-4649-bf88-7436f61bd87c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966393",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/384f87cc-9736-4e78-9d83-3841f1374081-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966399",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0a5b0edc-54d6-42ae-a41e-b461f47d2785-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966397",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/eae0bc2b-489e-400d-aa0a-ebdc477d81ab-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966405",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d727878e-b7b1-4182-bff5-d165bd4cd2e4-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966392",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/245be378-60e0-45e3-9f87-0159bd51a30a-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169099021",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0951130b-2542-44d4-a14c-a8ea77865569-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169098998",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0cc3a4d9-8a8d-4363-a837-35974f9a7254-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966391",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/794b0821-0a76-440a-92be-4cf066bf6066-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966459",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/544b0e55-03c0-4060-be48-b6b90a51dc7b-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966408",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1bc4c70b-7857-4473-a92a-4b9ec148874d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966378",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6136df0f-6e1a-4b48-bf6e-67bfd9c094fa-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966407",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/95b81af9-a8c7-4498-990c-d528de066565-retina-large.JPEG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966375",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ebae8ffb-dec8-4971-9f18-29fb2cf86beb-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6168966376",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6ef59b47-85bf-47ac-ab41-7dea693e1a97-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [35, 35],
      asapPickupMinutesRange: [16],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "24970890",
    name: "Tall Tree Sandwich Co",
    description: "Soup, Salads",
    averageRating: 4.692307949066162,
    numRatings: 13,
    numRatingsDisplayString: "(13)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/db043645-921b-4d6f-ad8d-fa118fb1f6c0.jpeg",
    url: "/store/24970890",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1525147203",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/db043645-921b-4d6f-ad8d-fa118fb1f6c0.jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169365952",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/99331d52-f842-40bd-823a-08b8aaf7b21e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169358336",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b97f8363-661b-444f-8036-f239f2284d00-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169358338",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/68f25ded-60d5-468d-bbe4-8ef8e124dace-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169365951",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ce0188aa-e752-46b9-a75c-9c84d8fc09c9-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169358342",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/68de6311-6d42-44fd-b199-2a60fb1b3b46-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169358910",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/aff23612-acd6-486c-bdcd-cecd2117aaf2-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169358337",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e6d5be46-86c5-4667-8f36-4887def01bc5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169358340",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/635b4331-ffb0-43c1-b49a-b9acb5925349-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169366529",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d60fac85-a670-4029-b9c2-6ac2c5466dac-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169358343",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/326b6a46-d6ed-4a74-84f0-55aa56eeae6a-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169366531",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6cb9a360-548d-4aa4-986a-f039488e7b2f-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169358339",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b194cc39-0dee-4f17-b543-a09f653e4141-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169366528",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/87d2ba6e-bb8e-482d-88d0-4ee1df43bb2e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169358341",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/23cb185f-af79-413f-a67c-049cf1234c6d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169358911",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e0a73e1e-a00e-4942-902f-69d3de5c1a74-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169366530",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9aa9bde8-6daf-4516-ac62-398e8e3c3eda-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "6169364505",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b194cc39-0dee-4f17-b543-a09f653e4141-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [35, 35],
      asapPickupMinutesRange: [12],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "674769",
    name: "East Side Mario's",
    description: "Pizza, Sandwiches",
    averageRating: 4.345730781555176,
    numRatings: 1183,
    numRatingsDisplayString: "(1,100+)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/28189.jpg",
    url: "/store/674769",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-762315470",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/28189.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10070749277",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/94f66d37-94c7-4d93-82ce-8f9894eb42ac-52903e38-ca15-4b44-bd88-c4d096363864-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10070749333",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b672b080-bd3e-474f-8e1a-392706e56474-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10259198882",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/dca321ff-b69e-41d6-af33-7ccea444c5ff-c0b7981b-07ac-446e-b61e-8bd25b652ffb-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10264193694",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/593bcca8-6474-41d7-81c4-8ace3e9e5b8f-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10259170070",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e09be73c-9344-4b5d-a0c2-b397752b94a1-341c42b8-db6b-409e-9395-a97a7a62267d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10070728635",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3ecd7316-d1a1-4275-b2b8-28bc94c00f9f-998fb931-a00d-4b16-8d0a-ec9e5d59821b-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10259180403",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/95dc6de0-8b09-4e1e-9d89-f16dbaecdae1-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10070745688",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/21752f90-eb30-467a-ac23-133b5745e222-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10259188371",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/530dfdaa-6382-401a-9f4e-0b5df7f0ae90-804d323c-3d33-4065-9f97-4a4067d5459f-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10259170072",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9d08a0ad-334e-4921-bc88-b0ac560b70c8-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10070725391",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a63c6747-89ee-4b02-a801-20da61945b7f-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9397193406",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0f63549e-c84e-42bd-92ab-0a2dc1ef9e0e-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10240079666",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7f04c62e-ec86-49d3-ac1f-098a5fbfb398-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10259198874",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4ddf19b0-294f-45d9-bad2-a7ef30ccb87f-2517d91e-6cb8-44bf-b7c4-439b8787fe3e-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10070745543",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/84ea9b82-d700-4bc5-9690-8c7e15dcaef6-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9397193407",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/502017cc-01ce-4edb-b2b4-a1f4c7801a55-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10259188373",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a13c63a2-bdfb-4a14-97fb-adb6181091c8-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10259188378",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c3ee7d63-5a7c-4b3c-8078-029cb716c185-40867c46-406d-49b2-9eaa-f78138ef32cb-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10259188368",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1eee25ae-4d9a-4095-9fc2-d0ec53fa9d84-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10259188374",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/240504e2-f8b7-4c31-9401-f5d60c8a701c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10264193693",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/3d0b4693-47b5-41b8-bf39-47e5ec7d8abf-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10264193695",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9e0ea87b-d468-425e-9837-9cf0e111dafb-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10259188376",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/34529af8-9802-4cd7-84f7-5ce02ff796f1-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [52, 52],
      asapPickupMinutesRange: [31],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "277410",
    name: "Red Rockets",
    description: "Sandwiches, Chicken Wings",
    averageRating: 4.632727146148682,
    numRatings: 275,
    numRatingsDisplayString: "(275)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/84d2f3dc-9a54-4f3b-be20-73c4d973ec31.jpg",
    url: "/store/277410",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "12525427",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/84d2f3dc-9a54-4f3b-be20-73c4d973ec31.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409000297",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8044e4fc-2b07-4158-bab9-86b8d0f57ee2-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409000288",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/14883afa-8485-4f45-98b1-f8f112597b88-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409000285",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/2f040e36-0e73-4622-bc33-a7114515996d-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409004777",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/91ddaafe-0322-4e76-b05d-d91524cf715c-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409004781",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/23e112a8-4617-4961-b29c-cefbc57c4ebb-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409004772",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/36daff19-2627-420b-9db3-57331bd28cc5-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409004775",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4bacf823-d892-460b-93b3-5fe9d20d3ad9-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409004779",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0bb91077-ea6f-4be1-bdcc-ad665bd38c38-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409000291",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/763f57d6-145e-46a3-b4b3-7eb9a647e1eb-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409000529",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/450f8594-31fb-448c-8a57-e91640a49999-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409000713",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9ea71b40-c36d-4de0-bceb-b48fdf072e59-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409000709",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/55eeb291-5c55-4db2-a328-5ec520eb38dc-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2408999999",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0b3cb032-77f9-4965-b4c8-5b6101e36279-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409000432",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0eddf50b-01c1-452a-9f31-62326fa5ec18-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2408999997",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ada53ec3-3994-4c1a-a7bf-00fe33b76ae7-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409004787",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/bfe016b6-f62f-4f49-887c-c6a380ad0047-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409000001",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/294fe0b3-06df-486b-90aa-1c96c3ab5e60-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409000002",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/4ae6a5e1-bc5e-4629-aaf0-271dee1b1b33-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2409000294",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/9435a112-45d5-453a-82b3-8536c1a42324-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [43, 43],
      asapPickupMinutesRange: [21],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "784835",
    name: "The Parm House",
    description: "Italian, Salads",
    averageRating: 4.425000190734863,
    numRatings: 120,
    numRatingsDisplayString: "(120)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/1e88a40d-985f-4c8d-9366-aafade065e88.jpg",
    url: "/store/784835",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "789529822",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/1e88a40d-985f-4c8d-9366-aafade065e88.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721293",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8e2f34a5-ae00-4b5a-95dd-75fae441203b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721276",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c5dde2eb-d884-4949-b412-0ac92a636f2b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721299",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/50b51ec2-0a6a-4f79-8401-0efef5f333c9-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721269",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/dab1cd99-f229-450e-a2a1-0b29ed236b9f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721258",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/07e3c7f1-f12a-4c08-ab2b-49da59140f6f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721256",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c610a69e-4cc1-4434-95dc-f46ae98254d3-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721267",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/40a6a7f4-4258-4117-84a6-62d3457fb9b0-retina-large.PNG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721301",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c1c394ce-9be3-45f9-967a-6e8aa7069a24-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721257",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/2f6c9994-8d14-49c5-a537-52da51b8116c-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721302",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/54342311-5a58-4f15-85af-ce2b2f3fb8dd-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721285",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/fb211115-189d-46d9-b201-6b98929051c4-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721298",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c333b795-ec6e-4dab-b549-4e3b697917ac-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "111721300",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/fa20f39d-e031-4cf3-9174-6a989352fc65-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [33, 33],
      asapPickupMinutesRange: [12],
      displayNextHours: "Accepting orders until 3:10 p.m.",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "669093",
    name: "Cedar Falafel & Shawarma",
    description: "Lebanese",
    averageRating: 4.735694885253906,
    numRatings: 367,
    numRatingsDisplayString: "(367)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8d2b5d2b-1364-4357-8359-5f6b752dbebc.jpg",
    url: "/store/669093",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1363896494",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8d2b5d2b-1364-4357-8359-5f6b752dbebc.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: false,
      scheduledAvailable: false,
      asapMinutesRange: [36, 36],
      asapPickupMinutesRange: [13],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "1026921",
    name: "New York Fries",
    description: "Hot Dogs, Fries",
    averageRating: 4.255474090576172,
    numRatings: 137,
    numRatingsDisplayString: "(137)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/3830b758-0c4a-4134-945b-d359176fb5c2.jpg",
    url: "/store/1026921",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-2081415679",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/3830b758-0c4a-4134-945b-d359176fb5c2.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444095",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a795244d-75aa-4f26-b503-dfef7a5a0da0-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444084",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/e510d96a-fab6-43a8-8a89-cf6b33544bc9-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444089",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0855339c-70e9-4b78-ba22-cc0439f6689b-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444096",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/8bb5481b-e04b-41f4-b756-a6752f2e568a-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444074",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b9f2e42e-04f3-482a-919d-a434e84cd3e1-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8566882271",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ddff2393-abe3-4ca4-9fd1-6af96b31fb05-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444086",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/da948d3b-bb98-4161-a10f-bc33f4d96396-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444090",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/36a503d2-777b-4590-849e-8b71c1fccff4-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444087",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/fdac7e8d-f004-4503-8857-8539f99d6f16-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444085",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9335c74a-86ff-4d54-904f-dd120b9f9f96-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8566882257",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5a06bff4-54e2-407e-b2d8-8576324cd824-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444098",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0047823a-0193-484e-b9b4-40a9b12e286c-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444091",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/0cb164a2-693d-411e-b699-9f22547d31f8-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444093",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/fbfe1033-9b77-4c27-958d-44201146ce67-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444081",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9335c74a-86ff-4d54-904f-dd120b9f9f96-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444082",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/7bfa34db-ff16-46fd-bb6d-a9db2476b741-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570064668",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/a5f4ebde-2944-48ee-b717-1f7901ec3bfc-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444094",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c87cdbdc-b7e0-4b24-9804-cfdee033044d-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8570444088",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/1cb5554e-3c41-4943-b456-9d0a2730e457-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [32, 32],
      asapPickupMinutesRange: [13],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "24631785",
    name: "Dairy Queen",
    description: "Burgers, Ice Cream",
    averageRating: 4.525926113128662,
    numRatings: 135,
    numRatingsDisplayString: "(135)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/dcdb45b7-b1cc-41fb-84cf-261d6bfd4c07.jpeg",
    url: "/store/24631785",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1049492336",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/dcdb45b7-b1cc-41fb-84cf-261d6bfd4c07.jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "494621183",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b8a10886-a147-4fae-b8cb-efcdc0c95c25-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "494621175",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/433d6bbc-1ebe-4879-81c7-f8b6447bbe99-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "494621186",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/c054281d-8709-4c21-adc1-ea385dd34cb6-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "494621172",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/00613173-2ad4-454c-916f-e4ca2098fd73-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "494621196",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/01f9a920-5f77-4cdf-8c50-c1a3ae95dfd1-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7704719487",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d2402550-9d34-4247-8e45-4b5690906cb3-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "494621180",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a7473f1c-0a88-4d92-a812-e2180793b3a3-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "4432370211",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1b4c29c4-6676-4e40-8d38-d7dff9ed4f5a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "494621173",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/38ad58e6-3143-4a5b-9cf3-a97e30d66603-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "494621184",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/3c795a63-a0a5-4a4d-bb62-e56770ad9e7a-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "494621176",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6919976e-b8ac-4375-b635-ddcf89063489-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "494621185",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/815b97b8-1913-4aa2-bbb9-80dc3f9bc1fe-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7704719489",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3bf1d827-a56d-4872-b7eb-798960c8d408-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7704719486",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/59ba383e-07b0-46a4-ac46-5b96a945c927-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "2591387035",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8ac0e6ca-df4d-4db5-8788-162681f3def5-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "4432370212",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6e43bf46-f056-44a3-a04d-1162b652770a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "494621187",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/84335dc9-8d65-4e3f-8392-a3f84e607253-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "9743522632",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/cf9b6e32-5bdc-4ea5-8e77-ea7d5a73e4d5-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "8894673702",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8a3a660a-4cf8-479f-9555-ad5c4cd7854c-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "4432370213",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/089fa012-74f5-48a3-adaf-9aa32a2cf8fd-54badb07-e373-40a5-afd7-ac8ffa1c4995-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "7704719488",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ae606207-8bca-4543-a25d-2d6704b2eeec-retina-large.png",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [31, 31],
      asapPickupMinutesRange: [9],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "20% off, up to $5",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "212940",
    name: "Bedrock Bistro Family Restaurant",
    description: "Burgers, Breakfast",
    averageRating: 4.56240701675415,
    numRatings: 1346,
    numRatingsDisplayString: "(1,300+)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/335271eb-41b2-45a1-a18c-24b1b26f1382-retina-large-jpeg",
    url: "/store/212940",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1598952564",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/335271eb-41b2-45a1-a18c-24b1b26f1382-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "3036125814",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/49f3bb63-f85b-4b97-adcf-a7b5096a5b72-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [34, 34],
      asapPickupMinutesRange: [17],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [
      {
        type: "offer",
        text: "HOLI3: 25% off, up to $10",
        backgroundColor: "00838AFF",
        __typename: "Badge",
      },
    ],
    __typename: "Store",
  },
  {
    id: "1431639",
    name: "Yimee's",
    description: "Pizza, Falafel",
    averageRating: 4.75,
    numRatings: 188,
    numRatingsDisplayString: "(188)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/47455872-2c3f-40e8-96f9-215de3ba0a30.jpg",
    url: "/store/1431639",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "1394725846",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/47455872-2c3f-40e8-96f9-215de3ba0a30.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153696",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/21dcccda-dc13-4b4b-86a2-59a8901d3671-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153694",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/96d9a1e6-b59d-435d-8c2f-ed725a04ce6f-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153695",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/ccc12998-8267-4e2a-8347-a5ece5e4d1bd-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153698",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/caa4c5a8-7bfb-4e2b-9557-7cce62ecbf9a-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153701",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/31c7ddfd-c073-4a94-bc77-aef4e903f32f-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153693",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d9c0a917-668f-4d9e-98fe-f8f9306e8547-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153690",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/30733442-c452-428f-9110-53d95683801b-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153702",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/cecd1619-258b-4f3e-a9dd-9ab79d718c0c-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153692",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/d9c0a917-668f-4d9e-98fe-f8f9306e8547-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153699",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/6f9dd422-5594-46c9-baf1-3c72168dd588-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153700",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a1db08c7-9eb8-45e1-ac12-fd373e38b7ed-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "395153697",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/a759a66b-91ce-4c4f-8f86-be9549d47954-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [47, 47],
      asapPickupMinutesRange: [13],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "2788776",
    name: "Timmy's Tanür",
    description: "Bakery, Pizza",
    averageRating: 4.456521987915039,
    numRatings: 92,
    numRatingsDisplayString: "(92)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/303fc50a-d608-4bb2-b317-749fb500dd23.jpg",
    url: "/store/2788776",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1748305922",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/303fc50a-d608-4bb2-b317-749fb500dd23.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004069905",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/718b1f6c-f93a-4af3-8c8e-3966956aca2a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004069907",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c601d886-7d9e-493a-b4f0-91c9802cc07f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004074123",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5c50292d-c027-48e5-8ecd-ffd2f0e1455b-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004076282",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c55275e5-6d27-401b-b7cb-30fa1043ad2f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004069906",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5e94618e-60f0-468e-9ae6-8b92c879c92c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004052863",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ea4fd9ff-0c26-481f-aa8b-5a4f857e505f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004069904",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/852b3c10-ab50-4522-8119-7bb6ef16d7ea-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004070729",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/0edfd723-a657-42b4-9812-7c8d39da9c74-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004076283",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/3148bac3-201e-44c0-acf2-a5d36d1eb798-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004068513",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/718b1f6c-f93a-4af3-8c8e-3966956aca2a-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004076284",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/be798273-25f7-4bf8-87f0-962c465951f0-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004079474",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/628f20e3-d3d8-4bcc-83e8-34e8a2420901-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004068514",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/c601d886-7d9e-493a-b4f0-91c9802cc07f-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004068512",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/852b3c10-ab50-4522-8119-7bb6ef16d7ea-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004070727",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d3e6c436-5ac2-4bf8-bdbf-43ef66de46b2-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004079475",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/8c54e712-140a-48b4-94b5-9ec14e3532ad-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004068515",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/ac7c41c6-ae97-41fb-beff-e4c90ed8568d-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004070726",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5e94618e-60f0-468e-9ae6-8b92c879c92c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004076286",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/e3d244ad-ee23-4764-bb99-f5345ef7152e-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004076285",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/5a17d624-567c-4bde-ade8-797c167304b7-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004076287",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/7eb16ebd-80d8-405f-b7ff-4da934e77e77-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004070730",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/d6c36b7b-b66c-4f6b-acbf-76cd17252508-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004076288",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/b13a7817-0de1-4e35-9e42-1bc610731479-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "10004067011",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/75ed7d61-b6d5-4808-8f31-b2c2b4f82de6-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: true,
      scheduledAvailable: false,
      asapMinutesRange: [49, 49],
      asapPickupMinutesRange: [13],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
  {
    id: "1498089",
    name: "Safin Grill",
    description: "Middle East",
    averageRating: 4.533834934234619,
    numRatings: 133,
    numRatingsDisplayString: "(133)",
    priceRange: 2,
    priceRangeDisplayString: "$$",
    displayDeliveryFee: "$0 delivery fee",
    headerImgUrl:
      "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/610705ea-a23c-4590-b665-abc8d4f7975d.jpg",
    url: "/store/1498089",
    isConsumerSubscriptionEligible: true,
    isSurging: false,
    menus: [
      {
        popularItems: [
          {
            id: "-1525444271",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/610705ea-a23c-4590-b665-abc8d4f7975d.jpg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "849565005",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/81660092-3142-4b17-af01-9849216cff76-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "849565014",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/aab35189-a976-4839-9b2c-0edda1713f3c-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "849565003",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/9480f16b-cfac-4f6d-a6a4-bd319f8343be-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "849565017",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/637f55e6-5168-44ab-ad34-a40ae37c9093-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "849565010",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/80815242-7aa6-4812-b725-fe58908f9394-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "849565020",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/253947be-04f0-4161-bf91-d8a0865391c6-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "849565012",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/32fc13dd-9f36-4e50-bb67-79b2e59a0670-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "849565018",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/281fec4e-ecf8-452c-af94-5bb5fbd72e59-retina-large.JPG",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "849565016",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/b9013cff-066f-47d9-a7ac-cdaee31b01e3-retina-large-jpeg",
            __typename: "StoreMenuPopularItem",
          },
          {
            id: "849565009",
            imgUrl:
              "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/625fa074-0ebb-4590-98d2-2eccc7b2f71c-retina-large.jpg",
            __typename: "StoreMenuPopularItem",
          },
        ],
        __typename: "StoreMenu",
      },
    ],
    status: {
      asapAvailable: true,
      pickupAvailable: false,
      scheduledAvailable: false,
      asapMinutesRange: [43, 43],
      asapPickupMinutesRange: [13],
      displayNextHours: "",
      deliveryUnavailableReason: "",
      __typename: "StoreStatus",
    },
    badge: null,
    storeBadges: [],
    __typename: "Store",
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { headerImgUrl, name, description, averageRating, status } = resData;
  return (
    <div className="res-card">
      <img className="res-image" src={headerImgUrl} alt="RES" />
      <h4 class="res-name">{name}</h4>
      <h5 class="res-desc">{description}</h5>
      <div className="res-details">
        <h4 class="res-ratings">{averageRating.toFixed(1)} Stars</h4>
        <h4 class="res-delivery-time">{status.asapMinutesRange[1]} mins</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input className="search-box" type="text" placeholder="Search..." />
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
