import React from 'react'
import Item from '../Item/Item'
import {} from "./ItemList.css"



function ItemList({productos}) {

    return (
        <div className='itmList'>
            { productos.map((producto) => <Item producto={producto} key={producto.id}/>)}
        </div>
    )
}

export default ItemList
