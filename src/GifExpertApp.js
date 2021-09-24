import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['one punch', 'naruto', 'dragon ball'];
    const [categories, setCategories] = useState(['naruto']);

    // const handleApp = () => {
    //     // se usa el spread operator paras hacer un duplicado del valor y poder añadirle uno nuevo, basicamente
    //     // se creo otro arreglo
    //     setCategories( [...categories, 'hola mundo react'] );
    // }
    
    return (
        <>
            <h2>GifExpert App</h2> <a href='https://www.facebook.com/profile.php?id=100013541311546' className='credito'>por: Francisco M. Charris C.</a>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
               {
                    categories.map( category => 
                        <GifGrid 
                        // enviar props
                            key={category}
                            category={category}
                        />    
                    )
               }
            </ol>
        </>
    );
}