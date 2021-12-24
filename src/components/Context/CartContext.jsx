
import {createContext, useState} from "react";
import { productos } from "../../helpers/getFetch";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {

    const [producto, setProducto] = useState(productos);
    const [cartList, setCartList] = useState([]);


    const AgregarAlCarrito = (Item) => {
        
        const index = cartList.findIndex(i => i.id === Item.id)
        if (index > -1) {
            const cantidadAnterior = cartList[index].cantidad
            
            cartList.splice(index, 1)
            
            setCartList([...cartList, {...Item, cantidad : Item.cantidad + cantidadAnterior}])
            
        } else {
            setCartList([...cartList, Item])}
    }
    
    const removeCart = () => {
        setCartList([])
    }
    
    return(
        <CartContext.Provider
        value={{producto,
                setProducto,
                cartList,
                AgregarAlCarrito,
                removeCart}}>
            {children}
        </CartContext.Provider> 
    )
} 

export {CartContextProvider}