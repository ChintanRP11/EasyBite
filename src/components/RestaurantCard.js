import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { imageUrls, cleanUrl, name, distance, skipScore, maxEstimatedTime } =
    resData;

  return (
    <div data-testid="resCard" className="res-card m-2 p-1 rounded-md bg-white">
      <Link to={{ pathname: `/restaurant/${cleanUrl}` }} className="res-link">
        <img
          className="res-image w-[350px] h-44 rounded-md "
          src={imageUrls.menuSmallUrl}
          alt="Restaurant-Image"
        />
        <h4 className="w-[350px] res-name font-serif text-lg font-bold">
          {name}
        </h4>
        <h5 className="res-desc font-sans text-gray-600">
          {distance.value.toFixed(1)} KM
        </h5>
        <div className="res-details font-sans flex justify-between text-gray-600">
          <h4 className="res-ratings">{skipScore.toFixed(1) / 10} Stars</h4>
          <h4 className="res-delivery-time">{maxEstimatedTime} mins</h4>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
