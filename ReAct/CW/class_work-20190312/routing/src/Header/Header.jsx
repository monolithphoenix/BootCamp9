import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css'
 

const Header = () => {
    return (
        <header>
            <ul className="menu">
                <li className="menu_item">
                    {/* <a href="#" className="menu_link">Roadster</a> */}
                    <NavLink className="menu_link" to='/Roadster'>Roadster</NavLink>
                </li>
                <li className="menu_item">
                    {/* <a href="#" className="menu_link">Model S</a> */}
                    <NavLink className="menu_link" to='/ModelS'>Model S</NavLink>
                </li>
                <li className="menu_item">
                    {/* <a href="#" className="menu_link">Model X</a> */}
                    <NavLink className="menu_link" to='/ModelX'>Model X</NavLink>
                </li>
                <li className="menu_item">
                    <NavLink className="menu_link" to='/user'>User</NavLink>
                </li>

            </ul>
        </header>
    );
};

export default Header;