import React from 'react';
import { shallow } from "enzyme"
import { ListaGastos } from "../../components/ListaGastos"

describe('pruebas en <ListasGastos/>', () => {
    
    test('debe de renderrizar bien', () => {
        const gastos = [ 
            {
                nombre: 'pp',
                cantidad: 100,
                id: 1
            },
             {
                nombre: 'papa',
                cantidad: '120202',
                id: 2
            }
        ],
         wrapper = shallow(<ListaGastos gastos={gastos} />);

         expect(wrapper).toMatchSnapshot();
    });

    test('la longitud del array debe ser igual con el n. de itemgasto', () => {
        const gastos = [ 
            {
                nombre: 'pp',
                cantidad: 100,
                id: 1
            },
             {
                nombre: 'papa',
                cantidad: '120202',
                id: 2
            }
        ],
         wrapper = shallow(<ListaGastos gastos={gastos} />);

         expect(wrapper.find('ItemGasto').length).toBe(gastos.length);
    })
    
    
})
