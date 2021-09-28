import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// esto es mas por la prueba
// export const GifExpertApp = ( {defaultCategories = []} ) => {

//     // const categories = ['one punch', 'naruto', 'dragon ball'];
//     // const [categories, setCategories] = useState(['naruto']);
//     const [categories, setCategories] = useState(defaultCategories);
export const GifExpertApp = ( ) => {

    // const categories = ['one punch', 'naruto', 'dragon ball'];
    const [categories, setCategories] = useState(['naruto']);

    // const handleApp = () => {
    //     // se usa el spread operator paras hacer un duplicado del valor y poder añadirle uno nuevo, basicamente
    //     // se creo otro arreglo
    //     setCategories( [...categories, 'hola mundo react'] );
    // }
    
    return (
        <>
            <div className='head' >
                <h1>GifExpert App</h1> 
                <a href='https://www.facebook.com/profile.php?id=100013541311546' className='credito'>por: Francisco M. Charris C.</a>
            </div>
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