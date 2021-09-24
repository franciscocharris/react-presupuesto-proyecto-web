import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

// para renombrar con la desestructuracion, solo es dos puntos : y el nuevo nombre
    const { data:images, loading} = useFetchGifs(category);
    
    // el useEffect sirve para ejecutar codigo con una condicion, se le pasa parametros y si es un array vacio
    // entonces significa que se ejecute una sola vez, cuamdo se renderize el componente
    // useEffect( () => {
    //     getGifs( category )
    //         // .then( imgs => setImages(imgs) );
    //         .then( setImages);
    // }, [category]);

    return (
        <>
            <h3 className='animate__animated animate__animated' ><span>{ category }</span></h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p> }
            <div className='card-grid'>
                    {
                        images.map( img => 
                            <GifGridItem 
                                key={img.id} 
                                // se le hace un spread operator a la coleccion de objetos para enviar propiedades de manera
                                // individual
                                {...img}
                            />
                        )
                    }
            </div>
        </>
    )
}
