import React from 'react';
import { shallow } from "enzyme"
import { Pregunta } from '../../components/Pregunta';

describe('pruebas en el componente <Pregunta/>', () => {
    
    test('debe de hacer match con el snapshot', () => {
        const setPresupuesto = jest.fn(),
              setRestante = jest.fn(),
              setShowPregunta = jest.fn(),
              wrapper = shallow(<Pregunta
                    setPresupuesto={setPresupuesto}
                    setRestante={setRestante}
                    setShowPregunta={setShowPregunta}
                />);
        
        expect(Pregunta).toMatchSnapshot();
    });
    
    test('no deben de ejecutarse las funciones despues del form', () => {
        
        const setPresupuesto = jest.fn(),
              setRestante = jest.fn(),
              setShowPregunta = jest.fn(),
              wrapper = shallow(<Pregunta
                    setPresupuesto={setPresupuesto}
                    setRestante={setRestante}
                    setShowPregunta={setShowPregunta}
                />);

        
        const theSubmit = wrapper.find('form').prop('onSubmit');
        theSubmit({ preventDefault(){} });

        expect(setPresupuesto).toHaveBeenCalledTimes(0);
        expect(setRestante).toHaveBeenCalledTimes(0);
        expect(setShowPregunta).toHaveBeenCalledTimes(0);

    })

    test('deben de ejecutarse las funciones una vez seteado el amount', () => {
        
        const setPresupuesto = jest.fn(),
              setRestante = jest.fn(),
              setShowPregunta = jest.fn(),
              wrapper = shallow(<Pregunta 
                    setPresupuesto={setPresupuesto}
                    setRestante={setRestante}
                    setShowPregunta={setShowPregunta}
                />),
                value = 100;

        wrapper.find('input').at(0).simulate('change', {
            target: {
                value
            }
        })

        const theSubmit = wrapper.find('form').prop('onSubmit');
        theSubmit({ preventDefault(){} });

        expect(wrapper.find('Error').exists()).toBe(false);
        expect(setPresupuesto).toHaveBeenCalledWith(value);
        expect(setRestante).toHaveBeenCalledWith(value);
        expect(setShowPregunta).toHaveBeenCalledWith(false);
    })
    
    
})
