import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

// l adiferencia de un custom hook de un functional component, es que ambos son funciones, pero el hook
// no nesesariamemnte retorna jsx
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
        // una vez la promesa resuelva las imagenes, se devuelve o cambia el estado dando los nuevos valores
        // y se retorna, para que pueda ser renderizados
            .then( imgs => {

                // console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category]); //si la categoria cambia entonces el useEffect debe volver a ejecutarse, parea traer los gifs

    return state; //devuelve un objeto con un estado inicial que es un objeto
}