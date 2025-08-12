import { useState } from "react";
import RestaurantCard from "./RestroCard";
import restaurantList from "./mockdata";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(restaurantList);

  const handleTopRated = () => {
    const filteredList = restaurantList.filter(
      (restaurant) => restaurant.data.avgRating > 4.0
    );
    setListOfRestaurent(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-button" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-list">
        {listOfRestaurent.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
