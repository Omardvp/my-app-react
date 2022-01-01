import {useState, useEffect, useContext} from 'react'
import { CartContext } from '../Context/CartContext'



const CartItem = ( {Item, index} ) => {

    const { cartList, cartItemIncrease, cartItemDecrease, removeFromCart } = useContext(CartContext)
    const [itemcantidad, setItemcantidad] = useState(Item.cantidad)


    const [ subTotal, setSubTotal ] = useState(0)

    useEffect(()=>{
        setSubTotal(cartList[index].price * cartList[index].cantidad)
    },[cartList])

    return (
    
        <div className="container" style={{display: 'flex', border: 'solid 1px black', borderRadius: '5px', marginTop: '20px', marginBottom: '20px'}}>
          
            <div ><img src={Item.img} className="card-img-top" style={{height: '200px', width:'200px'}}/></div>
            <div style={{padding: "20px"}}> 
            <h3>{Item.name}</h3>
            <h3>${Item.price}</h3>
            <p>{Item.description}</p>
            </div>
            <div className="cantidad-cont">
                <h2>x {cartList[index].cantidad}</h2>

                <div>   
                    <button onClick={()=>cartItemDecrease(index)}>-</button>
                    <button onClick={()=>cartItemIncrease(index)}>+</button>
                    <div className="subtotal-cont">
                        <p>Subtotal:</p>
                        <b>${subTotal}</b>
                    </div>
                </div>
            <button className="btn btn-outline-danger" onClick={()=>removeFromCart(Item)}>Eliminar del Carrito</button> 
            </div>


        </div>
    )
}

export default CartItem

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
// //                 </div>      )}
               
//         </div>
//     )
// }
 