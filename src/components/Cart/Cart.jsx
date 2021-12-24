import React from 'react'
import { useContext } from 'react'
// import { productos } from '../../helpers/getFetch'
import { CartContext } from '../Context/CartContext'

export const Cart = () => {
    const {cartList, removeCart} = useContext(CartContext)
    console.log(cartList)
    return (
        <div>
            <center>
            <h3>Carrito de compras</h3>
            <button onClick={removeCart} class="btn btn-outline-danger">Vaciar Carrito</button> 
            </center>
            {cartList.map(producto => 
               
               <div className="container" style={{display: 'flex', border: 'solid 1px black', borderRadius: '5px', marginTop: '20px', marginBottom: '20px'}}>
                     <div> <img src={producto.img} alt="" class="card-img-top" style={{height: '200px', width:'200px'}}  /></div>
                    <div style={{padding: "20px"}}>
                     <h3>{producto.name}</h3>
                     <p>{producto.description}  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, assumenda eum porro unde dolorem eius minima quae ut, tempora deserunt veritatis fugit similique perferendis consequatur nobis quas error, libero hic.</p>
                     <h3> $ {producto.price}</h3>
                     <h3>Cantidad selecionada: {producto.cantidad}</h3>
                   
                    </div>
                </div>      )}
               
        </div>
    )
}
 

