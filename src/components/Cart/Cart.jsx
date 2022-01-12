import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import {  useState, useEffect } from 'react'
import CartItem from '../CartItem/CartItem'
import {Link} from "react-router-dom"
import BuyForm from '../BuyForm/BuyForm'


function Cart() {
    
    const { cartList, removeCart} = useContext(CartContext)
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
            cartList.length > 0 ? 
            <div>
                {ShowList} 
                <div className="container">
                    <h2>Carrito de compras</h2>
                    <h2 >Precio total de sus compras : ${total}</h2>
                    <button onClick={removeCart} className="btn btn-outline-danger">Vaciar Carrito</button> <br></br>
                <BuyForm />
                </div>
            </div>:
            <div className="container">
                <h2>Tu carrito está vacío</h2>
                <Link className="btn btn-warning" to={'/my-app-react/'}>Seguir comprando</Link>
            </div>
            }

                

        </>

    )

        }


export default Cart



