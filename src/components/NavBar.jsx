import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;
            <Link to="/settings">Settings</Link>
            <hr />
        </div>
    );
};

export default NavBar;
