import React from "react";
import { BrowserRouter as Switch,Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Services from "./Service";
import User from "./User";

const App = () => {
    return(
        <>
        <Menu/>
        <Switch>
        <Route exact path="/service" render={()=> <Services name="Services"/>}/>
            <Route exact path="/" component={()=>{<About name="About"/>}}/>
            <Route exact path="/contact" component={Contact}/>
            <Route path="/User/:name/:lname" component={User}/>
            <Route component={Error}/>
        </Switch>
        {/* <About/>
        <Contact/> */}
        </>
    );
};

export default App;