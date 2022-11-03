import React from "react";
import { useEffect } from "react";

const Services = (props) =>{
    useEffect(()=> {
        document.addEventListener("click", handleClick);

        return function cleanup(){
            document.addEventListener("click", handleClick);
        };
    });

    function handleClick () {
        console.log("hii i am called again service useeffect");
    }

    console.log("hii i am called again service local");

    return (
        <h1>Hello, i am a {props.name} page</h1>
    );
};


export default Services;