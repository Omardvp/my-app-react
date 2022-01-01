import React from 'react'
import { CartContext } from '../Context/CartContext'
import Item from '../Item/Item'
import {} from "./ItemList.css"
import { useContext } from "react";



function ItemList({productos}) {
    // const {Item} = useContext(CartContext)
    return (
        <div style={{display: 'flex' }}>
            { productos.map((producto) => <Item producto={producto} key={producto.id}/>)}
        </div>
    )
}

export default ItemList
