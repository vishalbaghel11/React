import { useState, useEffect } from "react";
import RestaurantCard from "./RestroCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.918938&lng=75.7887458&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setListOfRestaurent(restaurants);
    setAllRestaurants(restaurants);
  };

  fetchData();
}, []);


  const handleTopRated = () => {
    const filtered = allRestaurants.filter(
      (restaurant) => parseFloat(restaurant.info.avgRating) > 4
    );
    setListOfRestaurent(filtered);
  };
  if (listOfRestaurent.length === 0) {
  return (
    <>
      <h1>Loading...</h1>
      <Shimmer />
    </>
  );
}
  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={handleTopRated}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Top Rated Restaurants
        </button>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
       <button
          onClick={() => {
            const filtered = allRestaurants.filter((restaurant) =>
              restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfRestaurent(filtered);
          }}
        >
          Search
        </button>

<button
  onClick={() => setListOfRestaurent(allRestaurants)}
>
  Clear
</button>
</div>

<div className="restaurant-list grid grid-cols-3 gap-4">
        {listOfRestaurent.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
    

export default Body;
