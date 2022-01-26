import {useState, useEffect, useContext} from 'react'
import { CartContext } from '../Context/CartContext'
import {} from "./CartItem.css"
import { BsFillCaretUpFill, BsFillCaretDownFill, BsTrash } from "react-icons/bs";



const CartItem = ( {Item, index} ) => {

    const { cartList, cartItemIncrease, cartItemDecrease, removeFromCart } = useContext(CartContext)
  
     const [ subTotal, setSubTotal ] = useState(0)

    useEffect(()=>{
        setSubTotal(cartList[index].price * cartList[index].cantidad)
    },[cartList])

    return (
    
        <center className="container cartItemStyle" >
          
            <div ><img src={Item.img} className="cartImg"/></div>
            <div className='cartTxt'> 

            <h3>Producto: {Item.name}</h3>
            <h5>Descripcion: {Item.description}</h5>
            <h3>Precio: ${Item.price}</h3>
            </div>
            <div>
                <h5>Cantidad:</h5>
            <div>   

                <div className='btnsCart'>
                    <button className='btn btn-primary' onClick={()=>cartItemDecrease(index)}><BsFillCaretDownFill /></button>
                    <h4> {cartList[index].cantidad} </h4>
                    <button className='btn btn-danger' onClick={()=>cartItemIncrease(index)}><BsFillCaretUpFill /></button>
                </div>
                <div>
                    <h5>Subtotal:</h5>
                    <h5>${subTotal}</h5>
                </div>
                </div>
            <button className="btn btn-danger" onClick={()=>removeFromCart(Item)}><BsTrash /></button> 
            </div>


        </center>
    )
}

export default CartItem

