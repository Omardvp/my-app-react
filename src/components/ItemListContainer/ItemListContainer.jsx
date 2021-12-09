import "../ItemListContainer/ItemListContainer.css";
import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { getFetch } from "../../helpers/getFetch";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";



export const ItemListContainer = (props) => {
    console.log(props.greeting);

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
        },[])
   
    
    return (
        <div className="container greeting">
           {props.greeting }
           <ItemCount initial={1} stock={10}/>
           {loading ? <h2>Cargando...</h2> :
           <ItemList productos={productos}/>
           }

        </div>
    )
}

