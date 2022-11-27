import React, { Component } from 'react';
import classes from './pokesingle.module.css';

class PokeSingle extends Component {

    state = {
        data: [],
        isLoading: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
        .then((res) => res.json()).then((data) => this.setState({ data: data, isLoading: false }))
    }

    render() {

        if (this.state.isLoading)
        return <p>Loading...</p>

    return (

        <div className={classes.singlepoke}>
            <h2>{this.state.data.name}</h2>
            <img alt={this.state.data.name} src={this.state.data.sprites?.other.dream_world.front_default}></img>
        </div>
    );
};
}

export default PokeSingle;