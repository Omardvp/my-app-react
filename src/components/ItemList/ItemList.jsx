import React from 'react'
import { CartContext } from '../Context/CartContext'
import Item from '../Item/Item'
import {} from "./ItemList.css"
import { useContext } from "react";



function ItemList({productos}) {
    const {item} = useContext(CartContext)
    return (
        <div style={{display: 'flex' }}>
            { productos.map((producto) => <Item producto={producto} />)}
        </div>
    )
}

export default ItemList
