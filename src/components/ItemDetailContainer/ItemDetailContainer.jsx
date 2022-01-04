import React from 'react'
import { useState, useEffect } from 'react';
import  ItemDetail  from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
// import {getFetch} from "../../helpers/getFetch"
import {doc, getDoc, getFirestore } from 'firebase/firestore';

export const ItemDetailContainer = () => { 
const [loading, setLoading] = useState(true)
    const [Item, setItem] = useState({})
    const {id} = useParams()

    // useEffect(() => {        
    //   getFetch
    //       .then(resp => setItem(resp.find(Item => Item.id === parseInt(id)))) 
    //       .catch(err => console.log(err))
    //       .finally(()=>setLoading(false))
    //  },[]) 
    useEffect(() => {        
      const db = getFirestore()
      const queryDB = doc(db, 'Items', id)
      getDoc(queryDB)
      .then(resp => setItem({ id: resp.id, ...resp.data() }))
      .catch(err=> console.log(err))
      .finally(()=> setLoading(false))
     },[id]) 

    return (
      <div>
         {loading ? <h2>Cargando...</h2> :
         <ItemDetail Item={Item} />}
      </div>
    )

}


    //   const getItem = new Promise((resolve)=>{
    //     setTimeout(() => {
    //         resolve(productos)
    //     }, 2000);
    // })
     
    //   useEffect(() => {        
    //       getItem.then(resultProducts=>{
    //         resultProducts.filter((resultProduct)=>{
    //             if (resultProduct.id === parseInt(id)) {
    //                 setItem(resultProduct)
    //                 setLoading(false)
    //             }
    //         })
    //     })
  
             
                 
    //   }, []) 