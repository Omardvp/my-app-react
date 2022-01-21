import { addDoc, collection, getFirestore, Timestamp, writeBatch, where, query, documentId, getDocs } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from '../Context/CartContext'
import {} from "./BuyForm.css"
// import { Formik} from "formik"


function Buy() {
    const {  cartList, removeCart, totalCart  } = useCartContext()
    const [idOrder, setIdOrder] = useState('')
    const [orden, setOrden] = useState({
        name:"", email:"", phone:"",
        items: cartList.map(item => ({
            id: item.id,
            cantidad: item.cantidad,
            precio: item.price
        })),
        total: totalCart()
    })
console.log('orden', orden);
    const handleChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setOrden({
            ...orden,
            [e.target.name]: e.target.value
        })
    }
    const generarOrden =  (e) => {
        e.preventDefault()  
  
        // Generar la orden setIdOrder(resp.id) 
        const db = getFirestore()
        const ordenColeccion = collection(db, 'orders')
        addDoc(ordenColeccion, orden)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(()=> {
            // removeCart()
            setOrden({
            name:orden.name, email:orden.email, phone:orden.phone
                            })
        })



        // const cleccionNoti = collection(db, 'Items')
        // const queryActulizarStock = query(
        //     cleccionNoti, where( documentId() , 'in', cartList.map(it => it.id))          
        // )

        // const batch = writeBatch(db)

       
        // //console.log(queryActulizar)
        // getDocs(queryActulizarStock)
        // .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        //     stock: resp.data().stock - cartList.find(item => item.id === resp.id).cantidad
        // }) ))

        // batch.commit()


    }

    return (
        <div>
            {idOrder ? <div>
                <h3>Orden de compra generada con el id: {idOrder}</h3>
                <h3>A nombre de: {orden.name}</h3>
                <h3>Telefono: {orden.phone} </h3>
                <h3>E-mail: {orden.email}</h3>
                </div> 
            :
            
            cartList.map(prod=> <div> 
                <li key={prod.id}> Producto: {prod.name}, Cantidad: {prod.cantidad}</li>
                 </div> ) }
                 <h5 className="infTxt">Para finalizar tu compra llena el sifuiente formulario y genera la orden. </h5>
            
            <form 
               onSubmit={generarOrden}
                onChange={handleChange} 
            >   <label htmlFor="name">Nombre:</label>
                <input className=""
                    type='text' 
                    name='name' 
                    placeholder='Ej: John Insua' 
                    defaultValue={orden.name}
                /><br />
                <label htmlFor="phone">Telefono:</label>
                <input 
                    type='text' 
                    name='phone'
                    placeholder='Ej: 011 4563450' 
                    defaultValue={orden.phone}
                /><br/>
                <label htmlFor="email">E-Mail:</label>
                <input 
                    type='email' 
                    name='email'
                    placeholder='Ej: nombre@mail.ok' 
                    defaultValue={orden.email}
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


