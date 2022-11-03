import React from "react";
import { useParams,useLocation } from "react-router-dom";

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    console.log(location);

    return (
        <>
    <h1>
    user {fname} {lname} page
    </h1>
    <p>my current location is {location.pathname}</p>
    {location.pathname === `/user/abbas/shaikh` ?
    (<button>click me</button>) : null
    }
    </>
    );
};

export default User;