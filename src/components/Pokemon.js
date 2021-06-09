import React, { Fragment } from 'react';


const Pokemon = ({ pokemon: { name, photo, abilities, weight, height, experience, type } }) => {

    return (

        <Fragment>
            <div className='contenedor'>
                <div className='cont-movile'>
                  
                
                    <div className='card'>
                        <h1>Nombre: {name}</h1>
                        <img src={photo} alt='Pokemon imagen'/>
                        <div className='data'>  
                        <p>Tipo: {type}</p>
                        <p>Experiencia: {experience}</p>
                        <p>Altura: {height}</p>
                        <p>Peso: {weight}</p>
                        <p>Habilidades: </p> <ul>
                            {
                                abilities.map(item => (<li>{item}</li>))
                            }
                        </ul>

                        <div className='peso-altura'>
                             
                            
                             
                        </div>                     
                       
                        </div>
                        
                    </div>
                </div>

            </div>
        </Fragment>

    )


};

export default Pokemon;