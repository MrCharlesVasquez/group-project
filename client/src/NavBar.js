import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    const { logout, token } = props
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/budget"> Budget </Link>
            <button onClick={logout}>Logout</button>
        </div>
    )

}

export default NavBar