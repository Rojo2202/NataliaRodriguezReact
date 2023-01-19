/*#############################################
        Importaciones
###############################################*/

//Modulos
import { useState } from 'react'
//Estilos
import './ItemCount.css'
// Componentes
// Core

/*#############################################
        Logica
###############################################*/


const ItemCount = ( props ) => {
    const [count,setCount] = useState(0);


    const disOne = () => {
        if ( count > 0 ) {
            setCount( count - 1 );
            console.log(count)
        }

        
    } 
    const addOne = () => {
        if ( count < props.stock ) {
            setCount( count + 1);
        }
        else {
            console.log( 'No hay mas stock' );
        }
    }
    


    return (
        <div className='box-count container'>
            <button onClick={ addOne }>+</button>
            <p>{ count }</p>
            <button onClick={ disOne }>-</button>
        </div>
    )
}


/*#############################################
        Exportaciones
###############################################*/

export default ItemCount