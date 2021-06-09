import React, { Fragment, useState } from 'react';
import Search from './Search';
import Pokemon from './Pokemon';

import Poke from '../assets/image/pokedex.png'
import Error from './Error';
function Pokedex() {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError]= useState(false);
    
    
    
    const getPokemonProps = (pokemon) => {

        return {
            name: pokemon.name,
            photo: pokemon.sprites.front_default,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities.map(item => item.ability.name),
            experience: pokemon.base_experience,
            type: pokemon.types
        }
    };


    return (
        <Fragment>
            <div className='container movil'>
                <div className='pokedex'>
                    <img src={Poke} alt='Pokedex' />
                    <Search setError={setError} setPokemon={setPokemon} />
                   
                </div>
               
                <div className='container-card'>

                    {
                        pokemon && <Pokemon pokemon={getPokemonProps(pokemon)} />
                    }
                    {
                        error && <Error />
                    }

                </div>
                <div>
               
                </div>




            </div>


        </Fragment>
    )
};

export default Pokedex;