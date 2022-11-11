import React, { useEffect, useState } from "react";

const UseEffects = () => {

    const [countn, setCountn] = useState(0);

    useEffect(() =>{
        if(countn >= 1){
            document.title = `Chats (${countn})`
        } else {
            document.title = `Chats`
        }
    }, [countn]);

    console.log("Hello Outside" );

    return (
        <>
        <h1>{countn}</h1>
        <button className="btn" onClick={()=>{
            setCountn(countn+1);
        }}>Click 😃</button>
        </>
    )
};

export default UseEffects;