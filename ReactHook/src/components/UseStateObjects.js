import React, { useState } from "react";

const UseStateObjects = () =>{
    const [myObject, setMyObject]  = useState({
        myName : "Abbas", myAge : 24, degree : "BE"
    });
    const changeObject = () =>{
        setMyObject({...myObject, myAge : 25});
    }
    return (
        <>
        <h1 className="h1style"> Name: {myObject.myName} & Age : {myObject.myAge} & Degree : {myObject.degree}</h1>
        <button className="btn" onClick={changeObject}>Update</button>
        </>
    )
};

export default UseStateObjects;