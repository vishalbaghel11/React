import { CDN_IMG_URL } from "../utils/logo";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  } = resData;
  return (
    <div className="w-56 bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <img
        src={CDN_IMG_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-36 object-cover"
      />
      <div className="p-4 flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
        <h4 className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</h4>
        <h4 className="text-sm text-gray-500 truncate">{area}</h4>
      </div>
      <div className="flex justify-between items-center px-4 pb-4 text-sm text-gray-600">
        <span className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded">
          <i className="fa-solid fa-star"></i> {avgRating}
        </span>
        <span>{lastMileTravelString}</span>
        <span>{costForTwoString}</span>
      </div>
    </div>
  );
};
export default RestaurantCard;
