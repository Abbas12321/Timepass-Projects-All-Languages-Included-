import React from "react";
import './index.css';
// import RulesHook from './components/RulesHook';
// import UseStateArray from "./components/UseStateArray";
// import ShortCireval from "./components/ShortCircuit";
// import BasicForm from "./components/Forms/BasicForm";
// import UseStateObjects from "./components/UseStateObjects";
// import UseEffects from "./components/UseEffects/UseEffects";
// import UseEffects2 from "./components/UseEffects/UseEffects2";
import UseEffectAPI from "./components/UseEffects/useEffectsAPI";



const App = () => {
    
    // console.log(useState('Abbas Shaikh'));
    // let val  = 'Abbas Shaikh ';

    // const[myName, setMyName] = useState('Abbas');

    // const changeName = () =>{
    //     if(myName === "Abbas")setMyName("way2Future");
    //     else setMyName("Abbas");
    // };

    // // console.log(val);

    return (
        <>
            {/* <h1>{ myName }</h1>
            <button className="btn" onClick={changeName}>Click Me</button> */}
            {/* < RulesHook/> */}
            {/* <UseStateArray/> */}
            {/* <UseStateObjects/> */}
            {/* <ShortCireval/> */}
            {/* <BasicForm/> */}
            {/* <UseEffects/> */}
            {/* <UseEffects2/> */}
            <UseEffectAPI/>
        </>
    )
};

export default App;