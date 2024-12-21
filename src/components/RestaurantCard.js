import { CDN_LINK } from "../utils/constants.js";

export const RestaurantCard = (props) => {
  const { info } = props.resName;
  return (
    <div data-testid="resCard" className="w-64 m-4 shadow-md">
      <div className="hover:m-2">
        <img
          className="h-40 w-64 rounded-xl"
          alt=""
          src={CDN_LINK + info.cloudinaryImageId}
        />
        <div className="pl-2">
          <h1 className="font-bold text-lg mt-2">{info.name}</h1>
          <h4 className="font-medium">
            <span>
              <span className="text-green-500">⭐</span> {info.avgRating}
            </span>
            <span>{" " + info.sla.slaString}</span>
          </h4>
          <h4 className="text-gray-500 font-medium">
            {info.cuisines?.join(", ")}
          </h4>
          <h4 className="text-gray-500 font-medium">{info.costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export const withLabelPromotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="p-1 absolute bg-black text-white rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
