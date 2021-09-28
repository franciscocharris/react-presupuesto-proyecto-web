import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('pruebas en el componente <AddCategory/>', () => {
    // este jest.fn es para poder hacer varias comprobaciones como si fuera una funcion con ayuda de jest
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    beforeEach( () => {
        // esto resetea todos los mooks o valores de funciones o de todo para antes de testear 
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });
    
    test('debe de mostrarse correctamente', () => {


        expect(wrapper).toMatchSnapshot();
    })

    test('prueba orientada a a solo ver como se puede probar el cambio de un input', () => {
        const input = wrapper.find('input');

        // el segundo parametro, es el evento que se supone el input esta recibiendo
        const value = 'este es un valor';
        input.simulate('change', { target: { value } });
        // console.log(wrapper.find('p').text().trim());
        expect( wrapper.find('p').text().trim() ).toBe(value);
    })
    
    test('no se debe de ejecutar las funciones en el submit', () => {
        // como no se le dio valor al inpuit obviamnete no paso el if y por ende no se ejecuto esa funcion
        //  que en el test de abajo, si se le da un valor
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y dejar el inpunt vacio', () => {
        const value = '-valor del input-'
        // se simula el cambio en el input, el second parameter es el evento y lo que se puede hacer con el 
        const input = wrapper.find('input').simulate('change', { target: { value } });
        //  se simula el submit del form y al evento se le da esta funcion 
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // tuvo que haber sido llamado
        expect(setCategories).toHaveBeenCalled();
        // otras cosas que se pueden hacer
        /////// se esperaba tantas llamadas de esta funcion
        // expect(setCategories).toHaveBeenCalledTimes(2);

        // se esperaba que esta funcion recibiera una funcion 
        //////// expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );

        // ///
        // console.log(wrapper.find('input').props());
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    // quede en el video nueve seccion 8
    
    
})
