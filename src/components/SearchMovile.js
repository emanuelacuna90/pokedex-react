import React, { Fragment } from 'react';
import pokeball from '../assets/image/pokebola.png';


const SearchMovile = props => {
    const [userInput, setUserInput] = React.useState('')
    const { setPokemon, setError } = props;


    const findPokemon = async (userInput) =>{
        
        try{
            console.log(userInput)
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
            const pokemon = await data.json()
            setPokemon(pokemon)
        }catch(e){
           setError(true);
        }

    }

    
    return(
    <Fragment>
        <form className='barra-movile'>   
         <input  onChange={(data) => setUserInput(data.target.value)} type='text' placeholder='Busca tu Pokemon'/>
         <button className='search' 
         onClick={(e) => {
             e.preventDefault();
             findPokemon(userInput);
         }}>
             <img src={pokeball} alt='Pokebola'/>
         </button>
         
        </form>
       
    </Fragment>
    )
};

export default SearchMovile;