//functional component
import { useEffect, useState } from "react";
const User = ({ name }) => {
    const[count]=useState(0);
    useEffect(()=>{

    },[]);

    
    return (
        <div className="user-card">
            <h1>Count={count}</h1>
            <h2>Name:{name}</h2>
            <h2>Deharadun</h2>
            <h2>Contact:@akshay</h2>
        </div>
    )
}
export default User;