import React, { useState } from "react";


// const name = ["ab", "bb", "as"];
// const [ab, bb, as] = name;

// let count = 1;
const App = () =>{
let newtime = new Date().toLocaleTimeString();

const [ctime, setCtime] = useState(newtime);

const UpdateTime = () =>{
    let newCtime = new Date().toLocaleTimeString();
    setCtime(newCtime);
}

  return (
  <>
  <h1> Time :  {ctime} </h1>
    <button onClick={UpdateTime}> Get Time </button>
    </> 
  );
};

export default App;