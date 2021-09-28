import { getGifs } from "../../../helpers/getGifs"


describe('pruebas en el helper getGifs.js', () => {
    
    test('la longitud del objeto retornado debe ser 10', async() => {
        
        const gifs = await getGifs('one punch');

        expect(gifs.length).toBe(10);
    })

    test('la longitud debe ser cero', async() => {

        const gifs = await getGifs('');
        // console.log(gifs);

        expect(gifs.length).toBe( 10 ); 
    })
    
    
})
