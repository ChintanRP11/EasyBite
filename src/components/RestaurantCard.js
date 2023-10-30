import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { imageUrls, cleanUrl, name, distance, skipScore, maxEstimatedTime } =
    resData;

  return (
    <div className="res-card">
      <Link to={{ pathname: `/restaurant/${cleanUrl}` }} className="res-link">
        <img className="res-image" src={imageUrls.menuSmallUrl} alt="RES" />
        <h4 className="res-name">{name}</h4>
        <h5 className="res-desc">{distance.value.toFixed(1)} KM</h5>
        <div className="res-details">
          <h4 className="res-ratings">{skipScore.toFixed(1) / 10} Stars</h4>
          <h4 className="res-delivery-time">{maxEstimatedTime} mins</h4>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
