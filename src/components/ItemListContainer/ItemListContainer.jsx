import "../ItemListContainer/ItemListContainer.css";
import React from 'react';
// import { getFetch } from "../../helpers/getFetch";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"
import {collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';



export const ItemListContainer = (props) => {
 
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()
    
   

    // useEffect(() => {
    //     if (idCategoria) {
    //             getFetch
    //             .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria))) 
    //             .catch(error => console.log(error))
    //             .finally(()=> setLoading(false))
                
    //     } else {
    //         getFetch
    //         .then(resp => setProductos(resp)) 
    //         .catch(err => console.log(err))
    //         .finally(()=>setLoading(false))           
    //     }  }, [idCategoria])
    
        // console.log(idCategoria)


    useEffect(() => {
        const db = getFirestore();
        if(idCategoria){
            const queryCollection = query(collection(db, 'Items'), where('categoria', '==', idCategoria  ))
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
                  
        }  }, [idCategoria])
    
    


        return (
            <div className="container greeting">
               {props.greeting}
               {loading ? <h2>Cargando...</h2> :
               <ItemList productos={productos}/>
               }
            </div>
               
               
        )
    }
   

