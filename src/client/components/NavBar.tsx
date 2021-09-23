import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="d-flex justify-content-between m-3 col-md-4">
            <div className="text-center mx-3 px-3">
                <NavLink className="text-decoration-none mx-3 px-3" to="/">Home</NavLink>
                <NavLink className="text-decoration-none px-3" to="/orders">Orders</NavLink>
            </div>
            <div>
                <NavLink className="text-decoration-none" to="/login">Login</NavLink>
                <NavLink className="text-decoration-none mx-3 px-3" to="/profile">Profile</NavLink>
            </div>
        </div>
    )
}

export default NavBar;
