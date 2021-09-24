import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) =>{
        setInputValue( e.target.value  );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 0){
            // al llamar a una funcion de un hook, traera los valores si se trata como un callback
            // aqui se esta llenando el array de los gifs que se van a cargar
            setCategories( cat => [inputValue, ...cat] );   
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <input 
                type='text'
                placeholder='Buscar Gifs'
                value={inputValue}
                // el onchange se dispara cada vez que cambien el valor del input
                onChange={ handleInputChange }
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}