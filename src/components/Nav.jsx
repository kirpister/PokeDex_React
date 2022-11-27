import React from 'react';
import classes from './nav.module.css';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink to='/'>HOME</NavLink></li>
                    <li><NavLink to='/pokelist'>POKELIST</NavLink></li>
                    <li><NavLink to='/about'>ABOUT</NavLink></li>
                </ul>
            </nav>
    
    );
};

export default Nav;