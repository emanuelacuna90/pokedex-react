import React, { Fragment } from 'react';
import ImageError from '../assets/image/maxresdefault.jpg'

const Error = () =>{
    return(
       <Fragment>
            <div className='error-message'>
                 <img className='error' src={ImageError} alt='Error de busqueda' />
                 <div>
                    <p>Pokemon No encontrado</p>
                 </div>
                 
           </div>
           
           
       </Fragment>
    )
};

export default Error;