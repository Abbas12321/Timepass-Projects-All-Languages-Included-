import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";

const Menu = () =>{
    return (
    <>
    <NavLink exact activeClassName="active_class" to="/"> About US </NavLink>
    <NavLink activeClassName="active_class" to="/contact"> Contact US </NavLink>
    <br/>
    <a href="/"> AboutUs </a>
    <a href="/contact"> Contact </a>
    </>
    );
};

export default Menu;