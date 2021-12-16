import React from "react";
import {useState} from 'react';
import {} from "./ItemCount.css"

const ItemCount = ({stock, initial}) => {
const [count, setCount] = useState(initial);

const countSuma = () => {
  
    setCount(count + 1);
}
const countResta = () => {
    if (count > initial){
        setCount(prevCount=> prevCount - 1)
        }
    setCount(count - 1);
}
const confirmar = () => {
    setCount(initial); 
    alert("La cantidad seleccionada es:" + " " + count);    
    console.log("La cantidad seleccionada es:" + " " + count);
}

return(
<div>
    <h1>{count}</h1>
    <button onClick={()=> countSuma()} disabled={count === stock ? true : false}>+</button>
    <button onClick={()=> countResta()} disabled={count === initial ? true : false}>-</button>
    <button onClick={()=> confirmar()}>Confirmar</button>
</div>
)
}

export default ItemCount;