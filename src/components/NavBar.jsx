import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/settings">Settings</Link>
            <hr />
        </div>
    );
};

export default NavBar;
