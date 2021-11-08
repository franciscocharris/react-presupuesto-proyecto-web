import React from 'react'
import { ItemGasto } from './ItemGasto'
import PropTypes from 'prop-types';

export const ListaGastos = ({gastos}) => (
    <div className='gastos-realizados'>
        <h2>Listado</h2>
        {
            // debe ser con () para que sea explicito el return, no con {}
            gastos.map(gasto => (
                <ItemGasto
                    key={gasto.id}
                    gasto={gasto}
                />
            ))
        }
    </div>
)

ListaGastos.propTypes = {
    gastos: PropTypes.array.isRequired
}
