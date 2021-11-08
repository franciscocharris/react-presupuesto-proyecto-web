import React, { useState } from 'react'
import { ControlPresupuesto } from './components/ControlPresupuesto';
import { Formulario } from './components/Formulario';
import { ListaGastos } from './components/ListaGastos';
import { Pregunta } from './components/Pregunta'

export const App = () => {

    const [presupuesto, setPresupuesto] = useState(0);
    const [restante, setRestante] = useState(0);
    const [gastos, setGastos] = useState([]);

    // cuando hay nuevo gasto
    const agregarNuevoGasto = gasto => {
        setGastos([
            ...gastos,
            gasto
        ]);

        // restar del presupuesto (actualizar restante)
        setRestante(restante - gasto.cantidad);
    }

    // un state para la carga condiconal de componentes
    const [showPregunta, setShowPregunta] = useState(true);

    return (
        <div className='container'>
            <header>
                <h1>Gasto Semanal</h1>
                <a target='_blank'  rel="noreferrer"  href='https://www.facebook.com/profile.php?id=100013541311546' className='credito'> - por: Francisco M. Charris C. -</a>

                <div className='contenido-principal contenido'>
                    {
                        showPregunta
                        ?
                        // los parentesis hacen el return implicito
                        (
                            <Pregunta
                                setPresupuesto={setPresupuesto}
                                setRestante={setRestante}
                                setShowPregunta={setShowPregunta}
                            />
                        )
                        :
                        (
                            <div className='row'>
                                <div className='one-half column'>
                                    <Formulario  
                                       agregarNuevoGasto={agregarNuevoGasto} 
                                    />
                                </div>
                                <div className='one-half column'>
                                    <ListaGastos
                                        gastos={gastos}
                                    />

                                    <ControlPresupuesto 
                                        presupuesto={presupuesto}
                                        restante={restante}
                                    />
                                </div>
                            </div>
                        )
                    }

                </div>
            </header>
        </div>
    )
}
