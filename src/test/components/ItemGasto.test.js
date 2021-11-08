import { shallow } from "enzyme"
import { ItemGasto } from "../../components/ItemGasto"

describe('pruebas en el componente <ItemGasto/>', () => {
    
    const gasto = {
        nombre: 'pp',
        cantidad: 100,
        id: 1
    }

    test('debe de coinidir con el snapshot', () => {
        const wrapper = shallow(<ItemGasto gasto={gasto} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe coincidir lo que se manda y lo que se renderiza', () => {
        const wrapper = shallow(<ItemGasto gasto={gasto} />);

        expect(wrapper.find('p').text().trim()).toBe(`${gasto.nombre}$${gasto.cantidad}`);
        expect(wrapper.find('span').text().trim()).toBe(`$${gasto.cantidad}`);
    })
    
    
})
