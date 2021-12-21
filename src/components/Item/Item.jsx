import React from 'react';
import {} from "./Item.css"
import {Link} from "react-router-dom"

function Item({producto}) {
    return (
        <div key={producto.id} className="container cardStyle" style={{width: '18rem', display: 'flex', flexWrap:'wrap' }}>
                <div className="card-body">
                  <div style={{height: '223px'}}>
                <img src={producto.img} alt="" className="card-img-top"   />
                </div>
                <div style={{height:"220px"}}>
               <h5 className="card-title">Producto: {producto.name}</h5>
               <p>Descripcion: {producto.description}</p>
              <p>Precio: ${producto.price}</p>
              <Link to={`/my-app-react/detalle/${producto.id}`}> <button className='btn btn-outline-danger'>Detalle del producto</button></Link>
              </div>
              </div>     
        </div>
    )
}

export default Item;

