import {renderHook} from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';
describe('pruebas en mi customHook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async() => {
        
        // crea un componente virtual para poder probar el customHook
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('one punch') );
        // result tiene varias propiedades, en este caso se hace desestructuracion del valor actual
        // del hook
        const {data, loading} = result.current;
        // como l aotra prueba nesecita ver el cambio de estado, tiene que declararse antes de esperar
        // esa actualizacion
        await waitForNextUpdate();

        // console.log(data, loading);

        expect( data).toEqual([]);
        expect( loading).toBe(true);
    })

    test('debe de retornar las images y el false de loading', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('one punch') );
        await waitForNextUpdate();

        const {data, loading} = result.current;
        // console.log(data);

        expect( data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
    
})
