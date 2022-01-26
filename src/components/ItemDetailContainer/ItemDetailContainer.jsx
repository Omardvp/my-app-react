import React from 'react'
import { useState, useEffect } from 'react';
import  ItemDetail  from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore } from 'firebase/firestore';

export const ItemDetailContainer = () => { 
const [loading, setLoading] = useState(true)
    const [Item, setItem] = useState({})
    const {id} = useParams()

 
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

