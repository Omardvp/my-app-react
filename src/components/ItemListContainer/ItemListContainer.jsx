import "../ItemListContainer/ItemListContainer.css";
import React from 'react'
import ItemCount from "../ItemCount/ItemCount";

export const ItemListContainer = (props) => {
    console.log(props.greeting)
    return (
        <div className="container greeting">
           {props.greeting }
           <ItemCount initial={1} stock={10}/>
        </div>
    )
}
