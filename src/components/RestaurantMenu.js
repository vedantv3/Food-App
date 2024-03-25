import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(SWIGGY_URL);
        const json = await data.json();
        console.log(json);
        setResInfo(json?.data);
    }
    if(resInfo===null) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info;
    return (
            <div className="menu">
                <h1>{name}</h1>
                <p>{cuisines.join(",")}</p>
                <h2>Menu</h2>
                <ul>
                    <li>Biryani</li>
                    <li>Burgers</li>
                    <li>Diet Coke</li>
                </ul>
                <h2>{costForTwoMessage}</h2>
            </div>
        );
};
export default RestaurantMenu;