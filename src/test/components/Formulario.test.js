import { shallow } from "enzyme";
import { Formulario } from "../../components/Formulario";

describe('pruebas en el componente Formulario', () => {
    
    const gasto = {
        nombre : 'papa',
        cantidad : 2,
        id: 1
    },
    agregarNuevoGasto = jest.fn();

    test('debe  de coincidir con el snapshot', () => {
        const wrapper = shallow(<Formulario agregarNuevoGasto={agregarNuevoGasto}  />);

        expect(wrapper).toMatchSnapshot();
    });

    test('no debe ejecutar las funciones al hcaer submit', () => {
        const gasto = {
            nombre: '',
            cantidad: 0,
            id: 1
        },wrapper = shallow(<Formulario agregarNuevoGasto={agregarNuevoGasto}  />);

        const s = wrapper.find('form').prop('onSubmit');
        s({ preventDefault(){} });

        expect(agregarNuevoGasto).toHaveBeenCalledTimes(0);
    });

    test('debe ejecutar las funciones al hcaer submit', () => {
        const wrapper = shallow(<Formulario agregarNuevoGasto={agregarNuevoGasto}  />);


        wrapper.find('input').at(0).simulate('change', {
            target: {
                name: 'nombre',
                value: gasto.nombre
            }
        });

        wrapper.find('input').at(1).simulate('change', {
            target: {
                name: 'cantidad',
                value: gasto.cantidad
            }
        });

        const s = wrapper.find('form').prop('onSubmit');
        s({ preventDefault(){} });

        expect(agregarNuevoGasto).toHaveBeenCalledWith({
            nombre: gasto.nombre,
            cantidad: gasto.cantidad,
            id: expect.any(String)
        });
    });
    

})
