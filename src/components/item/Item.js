/*#############################################
        Importaciones
###############################################*/

//Modulos
//Estilos
import './Item.css'
// Componentes
import ItemCount from '../itemCount/ItemCount'

// Core

/*#############################################
        Logica
###############################################*/


const Item = ( props ) => {

    const {title,category,description,price,image} = props.data

    return (
        <div>

            <p>{title}</p>
            <p>{price}</p>
            <p>{description}</p>
            <p>{category}</p>
            <img src={image} alt = {description}/>
            <ItemCount stock = "10"></ItemCount>
        </div>
    )
}


/*#############################################
        Exportaciones
###############################################*/

export default Item