/*#############################################
        Importaciones
###############################################*/

//Modulos
import { useState } from 'react'
//Estilos

import './ItemListContainer.css'
// Componentes
import ItemList from '../itemList/ItemList'
import { Container, Row } from 'react-bootstrap';

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
        <div className='main-sectio container'>
                <button onClick={categoriaHogar}>Hogar</button>
                <button onClick={categoriaConstruccion}>Construccionr</button>
                <button onClick={categoriaAll}>Todo</button>
                <Container>
                        <ItemList categoria = {categoria}/> 
                </Container>
                
        </div>
                
        )
}


/*#############################################
        Exportaciones
###############################################*/

export default ItemListContainer