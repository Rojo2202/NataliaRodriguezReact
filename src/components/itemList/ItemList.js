/*#############################################
        Importaciones
###############################################*/

//Modulos
import { useState} from 'react';
//Estilos
import './ItemList.css'
// Componentes
import Item from '../item/Item'
// Core
/*#############################################
        Logica
###############################################*/





const ItemList = ( props ) => {

    const [produc, setProduc] = useState([])


    // Api de productos 
    fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduc(json.map( prod => <Item key = {prod.id} id = { "producto" + prod.id } data = {prod}/>)))



    return (
        <div>
            <p>ItemList</p>
            {produc}
        </div>
    )
}


/*#############################################
        Exportaciones
###############################################*/

export default ItemList