import { useState, useEffect } from "react";
import RestaurantCard from "./RestroCard";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData(0);
  }, []);

  const fetchData = async (currentOffset) => {
    try {
      setLoading(true);
      const data = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING
=${currentOffset}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await data.json();

      let restaurants = [];
      json?.data?.cards?.forEach((card) => {
        const resData = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (resData) {
          restaurants = [...restaurants, ...resData];
        }
      });

      setListOfRestaurent((prev) => [...prev, ...restaurants]);
      setAllRestaurants((prev) => [...prev, ...restaurants]); // keep full copy
      setOffset(currentOffset + 15);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

 
  const handleTopRated = () => {
    const filtered = allRestaurants.filter(
      (restaurant) => parseFloat(restaurant.info.avgRating) > 4
    );
    setListOfRestaurent(filtered);
  };

  
  const handleReset = () => {
    setListOfRestaurent(allRestaurants);
  };

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button onClick={handleTopRated} className="px-4 py-2 bg-green-500 text-white rounded">
           Top Rated Restaurants
        </button>
        <button onClick={handleReset} className="px-4 py-2 bg-gray-500 text-white rounded">
           Reset
        </button>
      </div>

      <div className="restaurant-list grid grid-cols-3 gap-4">
        {listOfRestaurent.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => fetchData(offset)}
          disabled={loading}
          className="px-6 py-2 bg-blue-500 text-white rounded"
        >
          {loading ? "Loading..." : " Load More Restaurants"}
        </button>
      </div>
    </div>
  );
};

export default Body;
