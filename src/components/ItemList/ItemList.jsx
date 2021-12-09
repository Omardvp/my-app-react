import React from 'react'
import Item from '../Item/Item'
import {} from "./ItemList.css"


function ItemList({productos}) {
    return (
        <div style={{display: 'flex' }}>
            { productos.map(producto => <Item producto={producto}/>)}
        </div>
    )
}

export default ItemList
