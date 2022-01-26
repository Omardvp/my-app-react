import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from '../Context/CartContext'
import {} from "./BuyForm.css"



function Buy() {
    const {  cartList, removeCart, totalCart  } = useCartContext()
    const [idOrder, setIdOrder] = useState('')
    const [order, setOrder] = useState({
        name:"", email:"", phone:"",
        items: cartList.map(item => ({
            id: item.id,
            cantidad: item.cantidad,
            precio: item.price
        })),
        total: totalCart()

    })

    const handleChange = (e) => {
     
        setOrder({
            ...order,
            [e.target.name]: e.target.value
        })
    }
    const generarOrden =  (e) => {
        e.preventDefault()  
  
     
        const db = getFirestore()
        const ordenColeccion = collection(db, 'orders')
        addDoc(ordenColeccion, order)
        .then(resp => (setIdOrder(resp.id)))
        .catch(err => console.log(err))
        .finally(()=> {
            // removeCart()
            setOrder({
            name:order.name, email:order.email, phone:order.phone
                            })
        })



    }

    return (
        <div>
            {idOrder ? <div>
                <h3>Orden de compra generada con el id: {idOrder}</h3>
                <h3>A nombre de: {order.name}</h3>
                <h3>Telefono: {order.phone} </h3>
                <h3>E-mail: {order.email}</h3>
                </div> 
            :
            
            cartList.map(prod=> <div> 
                <li key={prod.id}> Producto: {prod.name}, Cantidad: {prod.cantidad}</li>
                 </div> ) }
                 <h5 className="infTxt">Para finalizar tu compra llena el siguiente formulario y genera la orden. </h5>
            
            <form 
               onSubmit={generarOrden}
                onChange={handleChange} 
            >   <label htmlFor="name">Nombre:</label>
                <input className=""
                    type='text' 
                    name='name' 
                    placeholder='Ej: John Rodriguez' 
                    defaultValue={order.name}
                /><br />
                <label htmlFor="phone">Telefono:</label>
                <input 
                    type='number' 
                    name='phone'
                    placeholder='Ej: 011 1234567' 
                    defaultValue={order.phone}
                /><br/>
                <label htmlFor="email">E-Mail:</label>
                <input 
                    type='email' 
                    name='email'
                    placeholder='Ej: nombre@mail.ok' 
                    defaultValue={order.email}
                /><br/>
                <br></br>
                <div className="btnsForm"> 
                <button className="btn btn-primary">Generar Orden</button>
                <button onClick={removeCart} className="btn btn-danger">Vaciar Carrito</button>
                </div>
            </form>
          </div>
    )
}

export default Buy


