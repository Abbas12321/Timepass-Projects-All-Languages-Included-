import React from "react";
import { BrowserRouter as Switch,Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";

const App = () => {
    const Name=() =>{
        return <h1>Hello, I an a Name Page</h1>;
    };
    return(
        <>
        <Menu/>
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/contact" component={Contact}/>
            <Route path="/contact/Name" component={Name}/>
            <Route component={Error}/>
        </Switch>
        {/* <About/>
        <Contact/> */}
        </>
    );
};

export default App;