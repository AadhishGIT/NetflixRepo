import React from "react";

const LandingPageShimmer = () => {
  const shimmerData = [
    { key: "0" },
    { key: "1" },
    { key: "2" },
    { key: "3" },
    { key: "4" },
    { key: "5" },
    { key: "6" },
    { key: "7" },
    { key: "8" },
  ];
  return (
    <div className="shadow-lg rounded-lg overflow-hidden grid grid-cols-3 gap-4 p-16">
      {shimmerData.map((value) => (
        <div
          key={value.key}
          className="max-w-sm shadow-lg rounded-lg overflow-hidden"
        >
          <div className="animate-pulse bg-gray-600 rounded h-4 w-1/2 my-6"></div>
          <div className="animate-pulse bg-gray-600 rounded h-56"></div>
        </div>
      ))}
    </div>
  );
};

export default LandingPageShimmer;
