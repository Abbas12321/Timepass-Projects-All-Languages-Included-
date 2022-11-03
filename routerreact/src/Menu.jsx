import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";

const Menu = () =>{
    return (
    <>
    <div className="menu_style">
    <NavLink exact activeClassName="active_class" to="/"> 
    About US 
    </NavLink>
    <NavLink exact activeClassName="active_class" to="/service"> 
    Services 
    </NavLink>
    <NavLink activeClassName="active_class" to="/contact"> 
    Contact US 
    </NavLink>
    <NavLink activeClassName="active_class" to="/user"> 
    User
    </NavLink>
    <br/>
    </div>
    </>
    );
};

export default Menu;