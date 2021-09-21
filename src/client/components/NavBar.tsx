import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="m-3 col-md-3 text-center">
            <NavLink className="text-decoration-none px-3" to="/">Home</NavLink>
            <NavLink className="text-decoration-none px-3" to="/orders">Orders</NavLink>
        </div>
    )
}

export default NavBar;
