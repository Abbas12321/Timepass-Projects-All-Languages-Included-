import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () =>{
    const usenavigate = useNavigate();
    const goToHome = () =>{
        usenavigate("/");
    };
    const goBack =() =>{
        usenavigate(-1);
    }
    return (
    <>
    <section>
        <div>Contact Page Only</div>
        <button onClick={goToHome}>go to home page</button>
        <button onClick={() => goBack()}>go back</button>
        </section>
    </>
    );
}

export default Contact;