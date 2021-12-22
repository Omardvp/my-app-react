import React from "react";
import {useState} from 'react';
import {} from "./ItemCount.css"

const ItemCount = ({stock, onAdd}) => {
const [number, setNumber] = useState(1)

const add = () => {
    number !== stock && setNumber(number + 1);
};
    const substract = () => {
        number !== 0 && setNumber(number - 1);
    };


return (
    <div style={{ width: '150px' }}>
        <p>{number}</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div  style={{ display: 'flex', flexDirection: 'row', justifyContent:"space-between", marginBottom:"5px"}}>
            <button onClick={add} disabled={number === stock}  style={{ width:"70px"}} class="btn btn-danger">
                +
            </button>
            <button onClick={substract} style={{ width:"70px"}} class="btn btn-danger">-</button>

            </div>
            <button disabled={number === 0} onClick={() => onAdd(number)} class="btn btn-primary">
                Agregar al carrito
            </button>
        </div>
    </div>
);
};


export default ItemCount;

// const [count, setCount] = useState(initial);

// const countSuma = () => {
  
//     setCount(count + 1);
// }
// const countResta = () => {
//     if (count > initial){
//         setCount(prevCount=> prevCount - 1)
//         }
//     setCount(count - 1);
// }
// const confirmar = () => {
//     setCount(initial); 
//     alert("La cantidad seleccionada es:" + " " + count);    
//     console.log("La cantidad seleccionada es:" + " " + count);