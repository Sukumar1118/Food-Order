import React from "react";

const ShimmerCard = React.memo(() => {
  return (
    <div className="w-64 m-4">
      <div className="h-40 bg-gray-200 m-2 shadow-md rounded-md"></div>
      <p className="p-2 m-2 bg-gray-200 rounded-md"></p>
      <p className="p-2 m-2 bg-gray-200 rounded-md"></p>
    </div>
  );
});

const ShimmerUI = () => {
  const shimmerCardLength = 10;
  return (
    <div className="flex flex-wrap m-auto justify-center">
      {Array.from({ length: shimmerCardLength }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default ShimmerUI;
