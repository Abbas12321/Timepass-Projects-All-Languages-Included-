import React, { useEffect, useState } from "react";

const App = () =>{
    const [num, setNum] = useState(0);

    useEffect(()=>{
        document.title=`You clicked me ${num} times`;
        // alert("I am clicked")
        // console.log("i am clicked")
    })
    

    return (
    <>
        <button onClick={()=>{
            setNum(num + 1);
            }} 
            >
        Click Me {num}
        </button>
        <br/>
    </>
    );
};

export default App;
