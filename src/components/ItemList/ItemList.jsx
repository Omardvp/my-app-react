import React from 'react'
import Item from '../Item/Item'
import {} from "./ItemList.css"


function ItemList({productos}) {
    return (
        <div style={{display: 'flex' }}>
            { productos.map((producto, index) => <Item producto={producto} key={index}/>)}
        </div>
    )
}

export default ItemList
