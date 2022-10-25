import React, { useState } from "react";

const App =() =>{

    const [fullName, setFullName] = useState({
      fname : '',
      lname : '',
      email : '',
      phone : '', 
      qua : '',
    });

    const InputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const {name, value} = event.target;

        setFullName((preValue) => {
          console.log(preValue);

          return {
            ...preValue,
            [name] : value,
          }
        });
    };

    const onSubmits = (event) =>{
      event.preventDefault();
      alert('form submitted')
    };

  return(
  <>
    <div className="main_div">
    <form onSubmit={onSubmits}>
    <div>
      <h1>Hello {fullName.fname}{fullName.lname}</h1>
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
      <p>{fullName.qua}</p>
      <input 
      type='text' 
      placeholder="Enter Your Name" 
      name='fname'
      onChange={InputEvent}
      value ={fullName.fname}
      />
      <br/>
      <input 
      type='text' 
      placeholder="Enter Your lastName" 
      name='lname'
      onChange={InputEvent}
      value ={fullName.lname}
      />
      <br/>
      <input 
      type='email' 
      placeholder="Enter Your Email" 
      name='email'
      onChange={InputEvent}
      value ={fullName.email}
      />
      <br/>
      <input 
      type='number' 
      placeholder="Enter Your Phone" 
      name='phone'
      onChange={InputEvent}
      value ={fullName.phone}
      />
      <br/>
      <input 
      type='text' 
      placeholder="Enter Your Qualification" 
      name='qua'
      onChange={InputEvent}
      value ={fullName.qua}
      />
      <button type="submit">Click Me 👍</button>
      </div>
      </form>
    </div>
  </>
  );
};

export default App;