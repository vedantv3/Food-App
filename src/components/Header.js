import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    useEffect(() => {
        console.log("used effect called");
        //if no dependency array =>useEffect is called after every render of that component
        //if dependency array is empty=[]=>useEffect is called on initail render
        //if dependency array is [btnNameReact]=>called everytime btnNameReact is updated
        //always called useEffect inside component but never call it inside if or for loop
    },)
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li>
                        <Link to="/contact"> Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="Login" onClick={
                        () => {
                            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                        }} >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;