import React from "react";
import { CDN_LINK } from "../utils/constants";

const MenuItem = ({menuItem}) => {
  const { name, description, imageId } = menuItem?.card?.info;
  return (
    <div className="flex border-b-2 border-solid border-gray-400 my-2 pb-2">
      <div>
        <h2 className="font-bold text-lg text-gray-500">{name}</h2>
        <p>{description}</p>
      </div>
      <div>
        <img className="w-20" src={CDN_LINK + imageId} />
      </div>
    </div>
  );
};

export default MenuItem;
