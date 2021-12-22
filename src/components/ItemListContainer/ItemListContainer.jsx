import "../ItemListContainer/ItemListContainer.css";
import React from 'react';
import { getFetch } from "../../helpers/getFetch";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom"



export const ItemListContainer = (props) => {
    console.log(props.greeting);

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategoria } = useParams()
    
   

    useEffect(() => {
        if (idCategoria) {
                getFetch
                .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria))) 
                .catch(error => console.log(error))
                .finally(()=> setLoading(false))
                
        } else {
            getFetch
            .then(resp => setProductos(resp)) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))           
        }  }, [idCategoria])
    
        console.log(idCategoria)
        return (
            <div className="container greeting">
               {props.greeting }
               {loading ? <h2>Cargando...</h2> :
               <ItemList productos={productos}/>
               }
            </div>
        )
    }
   

