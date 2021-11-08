export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    // si un cuarto del presupuesto es mayor al restante, entonces se ha gastado mas del 75%
    if( (presupuesto / 4 ) > restante){
        clase = 'alert alert-danger';
        // si la mitad del presupuesto es mayor al restante, entonces se ha gastado mas del 50%
    }else if ( (presupuesto / 2) > restante){
        clase = 'alert alert-warning';

        // sino, entonces no se ha gastado mas del 50%
    }else{
        clase = 'alert alert-success';
    }

    return clase;
}

// 100 / 4 = 25
// 100 / 2 = 50