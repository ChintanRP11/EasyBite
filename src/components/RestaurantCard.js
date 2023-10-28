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

export default RestaurantCard;
