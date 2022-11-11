import React, { useState } from "react";

const UseStateArray = () => {

    const MybioData = [
        {
            id : 0, myName : "Abbas", age:24
        }, {
            id : 1, myName : "Shaikh", age:25
        }, {
            id : 2, myName : "Afrah", age:9
        } 
    ]

    const [ myArray, setmyArray] = useState(MybioData);

    // console.log(MybioData);

    const clearArray = () => {
        setmyArray([]);
    }

    const removeElm =(id) =>{
        // alert(id);
        const myNeyArray = myArray.filter((currem) =>{
            return currem.id === id;
        })
        setmyArray(myNeyArray);
    }

    return (

        <>
            {/* <h1 className="h1style">Name : Abbas & Age : 24 </h1> */}
            {
                myArray.map((currem)=> {
                    return (
                    <h1 className="h1style" key={currem.id}> Name : {currem.myName} & Age : {currem.age}
                <button className="btnInner" onClick={()=>removeElm(currem.id)}>remove</button>
                </h1> 
                );
            })
            }
            <button className="btn" onClick={clearArray}>Clear</button>
        </>
    )
};

export default UseStateArray;