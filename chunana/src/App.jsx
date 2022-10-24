import React, { useState } from "react";

const App = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me 🤪");

    const bgChange = () => {
        // console.log("clicked");
        let newbg ='yellow';
        setBg(newbg);
        console.log("aah touched")
        setName("Ouch!! 😮‍💨");
    };

    const bgB = () => {
        setBg(purple);
        setName("muje chuna nana ✋")
    };

    return(
        <>
        <div style = { {backgroundColor : bg}}>
            <button onMouseEnter={bgChange} onMouseLeave={bgB}> {name} </button>
        </div>
        </>
    )
}

export default App;