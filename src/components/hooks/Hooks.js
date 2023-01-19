/*#############################################
        Importaciones
###############################################*/

//Modulos
import { useState, useEffect } from 'react'
//Estilos
import './Hooks.css'
// Componentes
// Core

/*#############################################
        Logica
###############################################*/


const Hooks = ( ) => {
    // Hooks de estado
    const [ count, setCount ] = useState(0)

    const sum = () => setCount( count + 1 );
    const resta = () => setCount( count - 1 );

    //Hooks de efectos
    
    useEffect(()=>{
        console.log( 'Componente iniciando' );
        return () => {
            console.log ( 'Componente finalizando' );
        }
    })

    return (
        <div>
            <button onClick={ sum }>Sumar</button>
            <p>{count}</p>
            <button onClick={ resta }>Restar</button>
        </div>
    )
}


/*#############################################
        Exportaciones
###############################################*/

export default Hooks