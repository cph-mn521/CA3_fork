import React from 'react';
import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
        <ul class="header">
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/ListItem">API test</NavLink>
            </li>
            <li>
                <a href="ca3/documentation/"> Documentation </a>
            </li>

        </ul>
    );
}

export default Navigation;