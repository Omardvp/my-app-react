import {createContext, useState, useContext} from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {

  
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
    
    const removeFromCart = (id)=>{
        // let posicion= cartList.findIndex(Item=> Item.id===id)
        // let newCartList= cartList
        // newCartList.splice(posicion, 1) 
        // setCartList([...newCartList])
        setCartList(cartList.filter(producto => producto.id !== id))
        
    }
   
    const removeCart = () => {
        setCartList([])
    }


    
    return(
        <CartContext.Provider
        value={{cartList,
                AgregarAlCarrito,
                removeCart,
                removeFromCart
                }}>
            {children}
        </CartContext.Provider> 
    )
} 

export {CartContextProvider}