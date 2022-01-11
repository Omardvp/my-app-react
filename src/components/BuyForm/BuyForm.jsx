// import { useContext } from 'react'
// import { CartContext } from '../../context/CartContext'

import {  addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch, where, query, documentId,getDocs } from "firebase/firestore"
import { useState } from "react"
import { CartContext } from '../Context/CartContext'



function Buy() {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", phone:""
    })
    const {  cartList, removeCart, total  } = CartContext()


    const handleChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)
    const generarOrden = (e) =>{
        e.preventDefault()  
        
        
        // Nuevo objeto de orders    
        let orden = {}
        orden.date = Timestamp.fromDate(new Date())
        //firebase.firestore.Timestamp.fromDate(new Date()); 

        orden.buyer = dataForm
        orden.total = total();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price * cartItem.cantidad;
            
            return {id, nombre, precio}   
        })

        // Generar la orden 
        const db = getFirestore()
        const ordenColeccion = collection(db, 'orders')
        addDoc(ordenColeccion, orden)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(()=> {
            removeCart()
            setDataForm({
                name:"", email:"", phone:""
            })
        })



        const cleccionNoti = collection(db, 'Items')
        const queryActulizarStock = query(
            cleccionNoti, where( documentId() , 'in', cartList.map(it => it.id))          
        )

        const batch = writeBatch(db)

       
        //console.log(queryActulizar)
        getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: resp.data().stock - cartList.find(item => item.id === resp.id).cantidad
        }) ))

        batch.commit()


    }

    return (
        <div>
            {idOrder.length !== 0 && idOrder}
            {  cartList.map(prod=> <li>{prod.name}   {prod.cantidad}</li>) }
            <form 
                onSubmit={generarOrden} 
                onChange={handleChange} 
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                /><br/>
                <button>Generar Orden</button>
            </form>
            <button onClick={removeCart} >Vaciar Carrito</button>

        </div>
    )
}

export default Buy



