import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { headerImgUrl, id, name, description, averageRating, status } =
    resData;
  const restaurantLink = "/restaurant/" + id;
  return (
    <div className="res-card">
      <Link to={restaurantLink} className="res-link">
        <img className="res-image" src={headerImgUrl} alt="RES" />
        <h4 className="res-name">{name}</h4>
        <h5 className="res-desc">{description}</h5>
        <div className="res-details">
          <h4 className="res-ratings">{averageRating.toFixed(1)} Stars</h4>
          <h4 className="res-delivery-time">
            {status.asapMinutesRange[1]} mins
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
