import React from "react";
import {useState} from 'react';
import {} from "./ItemCount.css"
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from 'react-icons/fa';

const ItemCount = ({stock, onAdd}) => {
const [number, setNumber] = useState(1)

const add = () => {
    number !== stock && setNumber(number + 1);
};
    const substract = () => {
        number !== 0 && setNumber(number - 1);
    };


return (
    <div>
        <div className="counter">
            <div  className="counterbody">
            <button onClick={substract} className="btn btn-danger counterBtn"><FaMinus /> </button>
            <h4>{number}</h4>
            <button onClick={add} disabled={number === stock} className="btn btn-danger counterBtn"><BsPlusLg /></button>
            </div>
            <button disabled={number === 0} onClick={() => onAdd(number)} className="btn btn-primary">
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