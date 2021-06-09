import React, { Fragment } from 'react';
import pokeball from '../assets/image/pokebola.png';


const Search = props => {
    const [userInput, setUserInput] = React.useState('')
    const user = userInput.toLowerCase();
    const { setPokemon, setError } = props;
   

    const findPokemon = async (userInput) =>{
        setError(false); 
       
        
        try{
            console.log(userInput)
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${user}`)
            const pokemon = await data.json()
            
            setPokemon(pokemon)
        }catch(e){
            console.log(e)
            setError(true)
        }

    }
    
    
    return(
    <Fragment>
        <form className='form' >   
         <input className='barra' onChange={(data) => setUserInput(data.target.value)} type='text' placeholder='Busca tu Pokemon' />
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

export default Search;