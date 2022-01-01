import React from 'react'
import { BsFillCartFill} from "react-icons/bs";
import { CartContext } from '../Context/CartContext'; 
import {  useState, useEffect, useContext } from 'react'

export const CartWidget = () => {
    // const { mostrarContador } = useCartContext()
    const [cartNumber, setCartNumber] = useState(0);

    const { cartList } = useContext(CartContext)
    
    let number = 0;

    cartList.map(Item=>{
        number = number + Item.cantidad
    })

    useEffect(()=>{
        setCartNumber(number)
    },[number])
    
    return (
        <div>
            <p>
            <BsFillCartFill  />
            {cartNumber > 0 ? <h2 className="cart-number">{cartNumber}</h2> : <></>}
            </p>
        </div>
        
    )
}
