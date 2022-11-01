import React, { createContext } from 'react';

import ComA from './ComA';

const FirstName = createContext();
const LastName = createContext();

const App =() =>{
    return (
        <>
        <FirstName.Provider value={"Abbas Shaikh"}>
        <LastName.Provider value={" is Engineer"}>
        <ComA/>
        </LastName.Provider>
        </FirstName.Provider>
    </>
    );
};

export default App;
export { FirstName, LastName };