import React from 'react';
import {} from "./Item.css"
import {Link} from "react-router-dom"

function Item({producto}) {
    return (
        <div key={producto.id}
                 className="cardStyle">
               <div className="cardBody">
                  <div className='contImg'>
                    <img src={producto.img} className="imgCardItem"/>
                </div>
                <div className='contTxt'>
                  <h5 className="cardTitle">Producto: {producto.name}</h5>
                    <p>Descripcion: {producto.description}</p>
                    <p>Precio: ${producto.price}</p>
                  <Link to={`/my-app-react/detalle/${producto.id}`}> <button className='btn btn-primary'>Detalle del producto</button></Link>
                </div>
                </div>     
        </div>
    )
}

export default Item;

