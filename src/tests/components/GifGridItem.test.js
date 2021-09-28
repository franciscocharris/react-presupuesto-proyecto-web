import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('pruebas en <GifGridItem/>', () => {
    const title = 'el titulo';
    const url = 'el url';
    // shallow para renderizar o tener la informacion del componente renderizado
    const wrapper = shallow( <GifGridItem  title={title}  url={url}  /> );

    // uno lo puede comparar con los snapshots
    test('debe mostrar el componente correctamente', () => {
        // con tener un componente, se debe importar react
        // console.log(wrapper);
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('asegurar que el parrafo tenga el title', () => {
        const p = wrapper.find('p');
        
        expect(p.text()).toBe(title);
    });

    test('verificar que la imagen tenga los props en los lugares correctos', () => {
        const img = wrapper.find('img');
        // console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('debe tener la clase animate__bounceInUp', () => {
        const div = wrapper.find('.animate__bounceInUp');
        console.log(div.props().className);  
        const className = div.props().className;
        expect(className.includes('animate__bounceInUp')).toBe(true);
    })
    
    
    
    
});



