import { shallow } from 'enzyme';
import React from 'react';
import { GifExpertApp } from '../GifExpertApp';

describe('pruebas en el componentye padre GifExpertApp', () => {
    const wrapper = shallow(<GifExpertApp />);

    test('debe coincidir con la fotografia', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // test('debe tener la misma cantidad de GifGrid que uno manda', () => {
    //     const defaultCategories = ['naruto', 'dragon Ball'];
    //     const wrapper = shallow(<GifExpertApp defaultCategories={defaultCategories} />);

    //     expect(wrapper.find('GifGrid').length).toBe( defaultCategories.length);
    // })
    
    
})
