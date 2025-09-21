import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 animate-pulse">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-60 h-80 bg-gray-200 rounded-lg shadow-md"
          ></div>
        ))}
    </div>
  );
};
export default Shimmer;
