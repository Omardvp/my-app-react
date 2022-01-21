import React from 'react'
import { BsFillCartFill} from "react-icons/bs";
import { CartContext } from '../Context/CartContext'; 
import {  useState, useEffect, useContext } from 'react'

export const CartWidget = () => {
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
            <BsFillCartFill  />
            {cartNumber > 0 ? <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartNumber}<span class="visually-hidden"></span>
            </span> : <></>}
            </div>
        )
}

