import React from 'react';
import { shallow } from "enzyme"
import { App } from "../App"

describe('pruebas en el componente padre App', () => {
    
    test('debe de renderizarse bien', () => {
        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
    })
    
})
