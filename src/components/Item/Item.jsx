import React from 'react';
import {} from "./Item.css"

function Item({producto}) {
    return (
        <div key={producto.id} className="container cardStyle" style={{width: '18rem', display: 'flex', flexWrap:'wrap' }}>
                <div className="card-body">
                  <div style={{height: '223px'}}>
                <img src={producto.img} alt="" class="card-img-top"   />
                </div>
                <div style={{height:"170px"}}>
               <h5 className="card-title">Producto: {producto.name}</h5>
               <p class="card-text">Descripcion: {producto.description}</p>
              <p>Precio: ${producto.price}</p>
              </div>
              </div>     
        </div>
    )
}

export default Item;

