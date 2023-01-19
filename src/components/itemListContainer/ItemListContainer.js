/*#############################################
        Importaciones
###############################################*/

//Modulos
import { useState } from 'react'
//Estilos

import './ItemListContainer.css'
// Componentes
import ItemList from '../itemList/ItemList'

// Core

/*#############################################
        Logica
###############################################*/

const ItemListContainer = () => {

    const [categoria , setCategoria ] = useState('all');
    
    const categoriaAll = () => {
        setCategoria('all')
    }
    const categoriaHogar = () => {
        setCategoria('hogar')
    }
    const categoriaConstruccion = () => {
        setCategoria('Construccion');
    }
    return (
        <div className='main-section'>
                <button onClick={categoriaHogar}>Hogar</button>
                <button onClick={categoriaConstruccion}>Construccionr</button>
                <button onClick={categoriaAll}>Todo</button>
                <p>ItemListContainer</p>
                <ItemList categoria = {categoria}/> 
        </div>
                
        )
}


/*#############################################
        Exportaciones
###############################################*/

export default ItemListContainer