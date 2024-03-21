import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8542541&lng=74.5801701&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;
    const{itemCards}=resInfo?.
    return (resInfo === null)
        ? <Shimmer /> : (
            <div className="menu">
                <h1>{name}</h1>
                <p>{cuisines.join(",")}-{costForTwoMessage}</p>
                <h2>Menu</h2>
                <ul>
                    <li>Biryani</li>
                    <li>Burgers</li>
                    <li>Diet Coke</li>
                </ul>
            </div>
        );
};
export default RestaurantMenu;