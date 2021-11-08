import React from 'react'
import PropTypes from 'prop-types';

export const ItemGasto = ({gasto:{nombre = '', cantidad = ''}}) => {
    return (
        <li className='gastos'>
            <p>
                {nombre}
                <span className='gasto'>${cantidad}</span>
            </p>
        </li>
    )
}

ItemGasto.propTypes = {
    gasto: PropTypes.object.isRequired
}