import React from "react";
import { useEffect } from "react";

const About = (props) =>{
    useEffect(()=> {
        document.addEventListener("click", handleClick);

        return function cleanup(){
            document.addEventListener("click", handleClick);
        };
    },[]);

    function handleClick () {
        console.log("hii i am called again service useeffect");
    }

    console.log("hii i am called again About local");

    return (
        <h1>Hello, i am a {props.name} page</h1>
    );
};


export default About;