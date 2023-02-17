import { useContext,createContext,useState } from "react";


export const CartContext = createContext([]);

export const useCartContext = () => {return useContext(CartContext)}

// Componente del contexto

const CartProvider  = ({children}) => {

    const [item, setItem] = useState([]);
    console.log(item);
    // a;ade al carrito
    const addItem = (data) => {
        const listaActual = item;
        listaActual.push(data);
        setItem(listaActual);
        console.log(item)

    }
    // Borra carrito
    const cleanItem = (id) =>{
        const nuevaLista = item.filter(e => e.id !== id);
        setItem(nuevaLista);
    }

    const limpiarCarrtio = () => {
        setItem ([]);
    }
    const validarProductoExistente = (id) => {
        if (item.find(e => e.id === id)) {
            return true
        }
        else {
            return false;
        }
    }
    return (
        <CartContext.Provider value={{useCartContext, item, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

