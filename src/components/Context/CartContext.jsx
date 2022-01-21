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
    
    const removeFromCart = (item)=>{
        setCartList(cartList.filter(Item => Item.id !== item.id))
        
    }
   
    const removeCart = () => {
        setCartList([])
    }

    function cartItemIncrease(index){
        
        
        if(cartList[index].cantidad < cartList[index].stock){
            const newArr = [...cartList];
            newArr[index].cantidad = newArr[index].cantidad + 1;
            setCartList(newArr)
        }else{
            console.log('No hay mas stock');
        }
        

    }
    function cartItemDecrease(index){
        
        if(cartList[index].cantidad > 1){
            const newArr = [...cartList];
            newArr[index].cantidad = newArr[index].cantidad - 1;
            setCartList(newArr)

        }
    }

    function totalCart(){
        return cartList.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }
    return(
        <CartContext.Provider
        value={{cartList,
                AgregarAlCarrito,
                removeCart,
                removeFromCart,
                cartItemIncrease,
                cartItemDecrease,
                totalCart
                }}>
            {children}
        </CartContext.Provider> 
    )
} 

export {CartContextProvider}