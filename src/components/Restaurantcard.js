import { CDN_URL } from "./../utils/constants";
const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  const cuisinesString = cuisines.join(", ").replace(/,/g, ", ");
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4 className="cuisine">{cuisinesString}</h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
