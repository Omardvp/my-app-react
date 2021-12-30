import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const Cart = () => {
    const {cartList, removeCart, removeFromCart} = useContext(CartContext)
    console.log(cartList)
    return ( 
        <div> 
            <center>
            <h3>Carrito de compras</h3>
            <button onClick={removeCart} className="btn btn-outline-danger">Vaciar Carrito</button> 
            </center>
            
            {cartList.map(producto => 
               
               <div className="container" style={{display: 'flex', border: 'solid 1px black', borderRadius: '5px', marginTop: '20px', marginBottom: '20px'}}>
                     <div> <img src={producto.img} alt="" className="card-img-top" style={{height: '200px', width:'200px'}}  /></div>
                    <div style={{padding: "20px"}}>
                     <h3>{producto.name}</h3>
                     <p>{producto.description}</p>
                     <h3> $ {producto.price}</h3>
                     <h3>Cantidad selecionada: {producto.cantidad}</h3>
                     
                     <button onClick={()=>removeFromCart}>Quitar producto</button>
                   
                    </div>
                </div>      )}
               
        </div>
    )
}
 

