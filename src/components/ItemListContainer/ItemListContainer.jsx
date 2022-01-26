import "../ItemListContainer/ItemListContainer.css";
import React from 'react';
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"
import {collection, getDocs, getFirestore, query, where } from 'firebase/firestore';



export const ItemListContainer = (props) => {
 
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()
    
   
    useEffect(() => {
        const db = getFirestore();
        if(idCategory){
            const queryCollection = query(collection(db, 'Items'), where('category', '==', idCategory  ))
            getDocs(queryCollection)
            .then((resp) => {
                setProductos(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }else{
            const queryCollection = query(collection(db, 'Items'))
            getDocs(queryCollection)
            .then((resp) => {
                setProductos(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
                  
        }  }, [idCategory])



        return (
            <div className="container greeting listCnt">
               {props.greeting}
               {loading ? <h2>Cargando...</h2> :
               <ItemList productos={productos}/>
               }
            </div>
               
               
        )
    }
   

