import React from 'react';
import '../App.css';
import Nav from './Nav'
import { Link } from 'react-router-dom';
import classes from './header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <Link to="/"><h1>PokeDex</h1></Link>
            <Nav />
            
        </header>
    );
};

export default Header;