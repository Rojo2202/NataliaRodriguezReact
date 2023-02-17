/*#############################################
        Importaciones
###############################################*/

//Modulos
//Estilos
import './Footer.css'
// Componentes
// Core

/*#############################################
        Logica
###############################################*/


const Footer = () => {


    return (
        <footer className='container-fluid'>
            <p>Seguinos en nuestras redes sociales</p>
            <ul className='redes-sociales'>
                <li><i class="fa-brands fa-facebook"></i></li>
                <li><i class="fa-brands fa-instagram"></i></li>
                <li><i class="fa-brands fa-whatsapp"></i></li>
            </ul>
        </footer>
    )
}


/*#############################################
        Exportaciones
###############################################*/

export default Footer