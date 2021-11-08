import React, { useState } from 'react'
import PropTypes from 'prop-types';
import  shortid from "shortid";
import { useForm } from '../hooks/useForm'
import { Error } from './Error';

export const Formulario = ({agregarNuevoGasto}) => {

    const [error, setError] = useState(false);

    const [gasto, handleInputChange, reset] = useForm({
        nombre: '',
        cantidad: ''
    });

    const {nombre, cantidad} = gasto;

    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true);
            return;
        }else{
            setError(false);
        }
        // construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        agregarNuevoGasto(gasto);

        // resetear form
        reset();
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            
            {error && <Error  message='Ambos campos son obligatorios o cantidad del gasto incorrecto' />}

            <div className='campo'>
                <label>Nombre del Gasto</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='ej: Transporte'
                    name='nombre'
                    value={nombre}
                    onChange={handleInputChange}
                />
            </div>

            <div className='campo'>
                <label>Cantidad del Gasto</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='ej: 270'
                    name='cantidad'
                    value={cantidad}
                    onChange={handleInputChange}
                />
            </div>

            <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gasto'
            />
        </form>
    )
}

Formulario.propTypes = {
    agregarNuevoGasto: PropTypes.func.isRequired
}