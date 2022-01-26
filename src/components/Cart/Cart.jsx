import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import {  useState, useEffect } from 'react'
import CartItem from '../CartItem/CartItem'
import {Link} from "react-router-dom"
import BuyForm from '../BuyForm/BuyForm'
import {} from "./Cart.css"


function Cart() {
    
    const { cartList } = useContext(CartContext)
    const [ total, setTotal ] = useState(0);
   
    
    let totalNumber = 0;

    cartList.map(Item=>{
        const subtotal = Item.price * Item.cantidad
        totalNumber = totalNumber + subtotal
    })

    useEffect(()=>{
        setTotal(totalNumber)
    },[totalNumber])

   

       
    const ShowList = cartList.map((Item, index)=>{

        return(
                <CartItem key={Item.id} Item={Item} index={index}/>
        )
    })

    

    return (
        <>
      
            {
            cartList.length ? 
            <div>
                <center>
                    <h2>Tu carrito: </h2>
                </center> 
                {ShowList} 
                <center className="container finalCard">
                    <h2 className='totalPrice'>Precio total de tus compras : ${total}</h2> 
                    
                     
                <BuyForm />
                    </center>
            </div>:
            <center className="container">
                <h2>Tu carrito está vacío</h2>
                <Link className="btn btn-warning" to={'/my-app-react/'}>Seguir comprando</Link>
            </center>
            }
            
                

        </>

    )

        }


export default Cart



