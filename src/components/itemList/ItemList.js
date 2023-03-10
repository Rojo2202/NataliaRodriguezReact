/*#############################################
        Importaciones
###############################################*/

//Modulos
import { useState, useEffect} from 'react';
//Estilos
import './ItemList.css'
// Componentes
import Item from '../item/Item'
import { Row } from 'react-bootstrap';
// Core
/*#############################################
        Logica
###############################################*/





const ItemList = () => {

    const [produc, setProduc] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduc(json.map( prod => <Item key = {prod.id} id = { "producto" + prod.id } data = {prod}/>)))
    },[]) 
    


    return (
        <Row>
            {produc}
        </Row>
    )
}


/*#############################################
        Exportaciones
###############################################*/

export default ItemList