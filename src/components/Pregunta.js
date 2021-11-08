import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Error } from './Error';

export const Pregunta = ({setPresupuesto, setRestante, setShowPregunta}) => {

    // definir state - la cantidad
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState(false); 

    // submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar
        if(amount < 1 || isNaN(amount)){
            setError(true);
            // return para que detenga la ejecuciuon
            return;
        }else{
            setError(false);
        }

        setPresupuesto(amount);
        setRestante(amount);

        // una ves todo este validado
        setShowPregunta(false);
    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>

            {error && <Error message='El Presupuesto es Incorrecto' />}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='coloca tu presupuesto'
                    onChange={e => setAmount(parseInt(e.target.value))}
                />

                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir Presupuesto'
                />
            </form>
        </>
    )
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setShowPregunta: PropTypes.func.isRequired
}