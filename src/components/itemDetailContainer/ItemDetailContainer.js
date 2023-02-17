/*#############################################
        Importaciones
###############################################*/

//Modulos
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//Estilos
import './ItemDetailContainer.css'
// Componentes
import ItemDetail from '../itemDetail/ItemDetail'
// Core
/*#############################################
        Logica
###############################################*/





const ItemDetailContainer = () => {

    const [produc, setProduc] = useState([])



    const {productoId} = useParams();
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productoId}`)
            .then(res => res.json())
            .then(prod => setProduc(<ItemDetail key = {prod.id} id = {prod.id } data = {prod}/>))
    },[productoId]) 

    return (
        <div>
            {produc}
        </div>
    )
}


/*#############################################
        Exportaciones
###############################################*/

export default ItemDetailContainer