import React, { useState } from "react";

const BasicForm = () =>{
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [AllEntry, setAllEntry] = useState([]);

    const submitForm = (e) =>{
        e.preventDefault();

        if(email && password) {
            const newEntry = {id : new Date().getDate().toString(), email:email, password:password}

        setAllEntry([...AllEntry,newEntry]);

        setEmail("");
        setPassword("");
        }
        else{
            alert("plzz fill the data")
        }
    }

    return (
        <>
            <form action=" " onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email"  id="email" autoComplete="off" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" autoComplete="off" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            <div>
                {
                    AllEntry.map((curElm)=>{ 
                        // object destructuring
                        const{ id, email, password } = curElm;
                        return (
                            <div className="showDataStyle" key={id}>
                            <p>{email}</p>
                            <p>{password}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default BasicForm;