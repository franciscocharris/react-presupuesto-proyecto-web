import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('pruebas en el componente de GifGrid', () => {
    
    const category = 'naruto';
    test('debe coincidir la renderizacion con el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={ category } />);


        expect(wrapper).toMatchSnapshot();
    });
    
    // test('debe mostrar los items correctamnete', () => {

    //     // con el mock uno da o simula los valores, en este caso esto es lo que retorna por defeto

    //     const gifs = [{
    //         id: 'abc',
    //         title: 'hola',
    //         url: 'https://mega.nz/fm/5IMy3boB'
    //     }];
    //     // con esto estamos simulando como si el hook useFetchGifs estuviera rettonando esos valores, y despues 
    //     // el componente lo renderiza ciomo normalmente lo haria
    //     useFetchGifs.mockReturnValue({
    //         data: gifs,
    //         loading: false
    //     });
    //     const wrapper = shallow(<GifGrid category={ category } />);

    //     expect(wrapper).toMatchSnapshot();
        
    // })

    // mas preciso que el de arriba
    test('debe mostrar los items correctamnete ', () => {
        const gifs = [{
            id: 'abc',
            title: 'hola',
            url: 'https://mega.nz/fm/5IMy3boB'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false 
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        // expect(wrapper).toMatchSnapshot();
        // primero la p del loading no deberia estar
        expect(wrapper.find('p').exists()).toBe(false);

        // la longitud de componentes renderizados desbe ser igual al numero del objeto
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length);
    })
    
    
    
})
