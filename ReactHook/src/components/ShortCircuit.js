import React, { useState } from "react";

const ShortCireval = ()=>{
    const[demo, setDemo] = useState("check check");

    const dusky = () => {
        setDemo("Abbas")
    }
    return (
        <>
            <h1 className="h1style">
                { demo || 
                <>
                    <h1>kya be</h1>
                    <p>wow majani life</p>
                </>
                }
            </h1>
            <h1 className="h1style">{ dusky && "Shaikh" }</h1>
        </>
    )
};

export default ShortCireval;