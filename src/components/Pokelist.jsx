import React, { Component } from 'react';
import Card from './Card';
import classes from './pokelist.module.css';

class Pokelist extends Component {

    state = {
        isLoading: false,
        data: [],
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then(res => res.json())
        .then((data) => {
            const fetches = data.results.map(poke => {
                return fetch(poke.url).then(res => res.json());
            })
        
        Promise.all(fetches).then((res) => this.setState({ data: res, isLoading: false }));
        });
    }
    
    render () {

        if (this.state.isLoading) {
            return <p>Loading...</p>;
        }


        
    return (
        <div className={classes.container}>

        {this.state.data.map((card) => (
            <Card name={card.name} 
            key={card.name} 
            image={card.sprites.other['official-artwork'].front_default}/>
        ))}

          
        
          
        </div>

    );
};
};

export default Pokelist;