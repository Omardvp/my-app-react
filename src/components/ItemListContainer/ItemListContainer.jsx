import "../ItemListContainer/ItemListContainer.css";
import React from 'react'

export const ItemListContainer = (props) => {
    console.log(props.greeting)
    return (
        <div className="container greeting">
           {props.greeting }
        </div>
    )
}
