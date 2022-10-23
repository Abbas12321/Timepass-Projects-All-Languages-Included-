import React from 'react';
import SlotM from './SlotM';

const App = () => {
  return(
  <>
  <h1 className='heading'>
    <h1> 🎰 Welcome to <span style = {{ fontWeight : "bold"}}> Slot machine game</span> : 🎰 slot</h1>
    </h1>
    <div className='slotmachine'>
    <SlotM x='😀' y='😀' z='😀' />
    <hr/>
    <SlotM x=' 🦁' y=' 🐯' z=' 🦊'/>
    <hr/>
    <SlotM x=' 🚌' y=' 🚗' z=' 🚲'/>
    <hr/>
    <SlotM x=' 🍎' y=' 🍌' z=' 🍇'/>
    </div>
  </>
  );
};

export default App;