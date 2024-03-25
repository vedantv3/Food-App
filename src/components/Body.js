import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_URL);
      const json = await data.json();
      // console.log(json);

      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurant(restaurants);
      setOriginalListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants); // Initialize filtered list with original list
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSearch = () => {
    const filtered = originalListOfRestaurants.filter((res) => {
      const restaurantName = res.info.name;
      return restaurantName && restaurantName.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredRestaurants(filtered); // Update filtered list
  };

  const handleTopRated = () => {
    const filtered = originalListOfRestaurants.filter((res) => {
      return res?.info?.avgRating > 4.2;
    });

    setFilteredRestaurants(filtered); // Update filtered list
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.length === 0 ? <Shimmer /> :
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

export default Body;
