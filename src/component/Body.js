import { useState, useEffect } from "react";
import RestaurantCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://pastebin.com/raw/0QcdEDBL");
      const json = await data.json();

      // console.log(
      //   json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // );
// console.log(json)
      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;

      setListOfRestaurent(restaurants);
      setAllRestaurants(restaurants);
    };

    fetchData();
  }, []);

  const handleTopRated = () => {
    const filtered = allRestaurants.filter(
      (restaurant) => parseFloat(restaurant.info.avgRating) > 4.5
    );
    setListOfRestaurent(filtered);
  };

  if (listOfRestaurent.length === 0) {
    return (
      <>
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
          placeholder="Search.."
          border="1px solid black "
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
           border="2px solid black "
        >
          Search
        </button>

        <button   border="2px solid black " onClick={() => setListOfRestaurent(allRestaurants)}>
          Clear
        </button>
      </div>
      <div className="restaurant-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  {listOfRestaurent.map((restaurant) => (
    <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
      <RestaurantCard resData={restaurant.info} />
    </Link>
  ))}
</div>

    </div>
  );
};

export default Body;
