import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import {  useState, useEffect } from 'react'
import CartItem from '../CartItem/CartItem'
import {Link} from "react-router-dom"

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
                    <button onClick={removeCart} className="btn btn-outline-danger">Vaciar Carrito</button>

                </div>
            </div>:
            <div className="container">
                <h2>Tu carrito está vacío</h2>
                <Link className="btn btn-warning" to={'/my-app-react/'}>Volver</Link>
            </div>
            }

                

        </>

    )

}


export default Cart

// export const Cart = () => {
//     const {cartList, removeCart, removeFromCart} = useContext(CartContext)
//     console.log(cartList)
//     return ( 
//         <div> 
//             <center>
//             <h3>Carrito de compras</h3>
//             <button onClick={removeCart} className="btn btn-outline-danger">Vaciar Carrito</button> 
//             </center>
            
//             {cartList.map(producto => 
               
//                <div className="container" style={{display: 'flex', border: 'solid 1px black', borderRadius: '5px', marginTop: '20px', marginBottom: '20px'}}>
//                      <div> <img src={producto.img} alt="" className="card-img-top" style={{height: '200px', width:'200px'}}  /></div>
//                     <div style={{padding: "20px"}}>
//                      <h3>{producto.name}</h3>
//                      <p>{producto.description}</p>
//                      <h3> $ {producto.price}</h3>
//                      <h3>Cantidad selecionada: {producto.cantidad}</h3>
                     
//                      <button onClick={()=>removeFromCart(producto)}>Quitar producto</button>
                   
//                     </div>
//                 </div>      )}
               
//         </div>
//     )
// }
 

