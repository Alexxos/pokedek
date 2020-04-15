import React, { Component } from 'react'
import Pokecard from './Pokecard';
import './Pokedek.css';


class Pokedek extends Component {
    
    render() {
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedek-winner">Winning Hand</h1>
        } else {
               title = <h1 className="Pokedek-loser">Losing hand</h1>
            }
        return (
            <div className="Pokedek">
                <p>{title}</p>
                <h4>Total Experience: {this.props.exp}</h4>
                
                <div className="Pokedek-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedek;