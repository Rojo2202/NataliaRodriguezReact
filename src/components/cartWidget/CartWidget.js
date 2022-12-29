/*#############################################
        Importaciones
###############################################*/

//Modulos
//Estilos
import './CartWidget.css'
// Componentes
// Core

/*#############################################
        Logica
###############################################*/

const CartWidget = (props) => {
    return (
        <div>
            <a>
                <i class="fa-solid fa-cart-shopping"></i>
                <p className = "contador"> { props.contador } </p>
            </a>
        </div>
        )
}


/*#############################################
        Exportaciones
###############################################*/

export default CartWidget