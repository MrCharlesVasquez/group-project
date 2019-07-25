import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>

            <Link to="/"> Home </Link>
            <Link to="/profile"> Profile </Link>
            <Link to="/budget"> Budget </Link>
            <h1>Home</h1>

        </div>
    )
}

export default Home 