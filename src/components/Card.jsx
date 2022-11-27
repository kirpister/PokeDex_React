import React from 'react';
import classes from './card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.card}>
            <img alt={props.name} src={props.image}></img>
            <h3>{props.name}</h3>
            <Link to={`${props.name}`}>See more</Link>

            </div>
        </div>
    );
};

export default Card;