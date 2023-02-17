/*#############################################
        Importaciones
###############################################*/

//Modulos
//Estilos
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../itemCount/ItemCount";
import "./ItemDetail.css";
// Componentes
import { useCartContext } from "../context/cartContext";
// Core
/*#############################################
        Logica
###############################################*/

const ItemDetail = (props) => {
  const {id, title, category,description, price, image } = props.data;

  const [cantidad, setCantidad] = useState(0);

//   Context

   const {addItem} = useCartContext()

  const tomarCantidad = (numero) => {
    setCantidad(numero);
  };

  const onAdd = () => {
        if (cantidad === 0 ) {
                alert('mete productos');
        } else {
                const producto = {
                        id:id,
                        title:title,
                        category:category,
                        price:price,
                        count: cantidad
                }
                addItem(producto);
        }

  }




  return (
    <article className="itemDetail-producto">
      <h1>Detalle Del Producto</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title} || ${price} </Card.Title>
          <Card.Text>{description}</Card.Text>
          <ItemCount stock={10} cantidades={tomarCantidad} />
          <button onClick={onAdd}>On Add</button>
        </Card.Body>
      </Card>
    </article>
  );
};

/*#############################################
        Exportaciones
###############################################*/

export default ItemDetail;
