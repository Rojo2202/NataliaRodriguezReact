/*#############################################
        Importaciones
###############################################*/

//Modulos
//Estilos
import './Item.css'
// Componentes
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
// Boostrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
// Core

/*#############################################
        Logica
###############################################*/


const Item = ( props ) => {

    const {title,category,description,price,image, id} = props.data

    return (

                <Col xs = {3}>
                    <Card  className = "card-item">
                    <Card.Img src= {image} id = "img-card" />
                    <Card.Body className="text-center">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            ${price}
                        </Card.Text>
                        <ItemCount stock = "10"></ItemCount>
                        <Link to = {`/productos/${id}`}>Ver detalle del Producto</Link>
                        <Button>Comprar</Button>
                    </Card.Body>
                    </Card>
                </Col>
    )
}


/*#############################################
        Exportaciones
###############################################*/

export default Item