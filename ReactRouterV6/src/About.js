import React from "react";
import { useNavigate } from "react-router-dom";


const About = () =>{
    const navigate = useNavigate();

    const goToContact = () =>{
        navigate('./Contact.js')
    }
    return (
        <>
        <section>
        <div>About Page</div>
        <button onClick={()=>goToContact()}>go to contact page</button>
        <button onClick={()=>navigate(-1)}>go back</button>
        </section>
        </>
    );
};

export default About;