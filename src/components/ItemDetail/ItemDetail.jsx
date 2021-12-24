import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const ItemDetail = ({ Item }) => {
  const {AgregarAlCarrito} = useContext(CartContext)
  const [goCart, setGoCart] = useState(true)
 

  const onAdd = (cant) => {
    console.log(cant)
    setGoCart(false);
    AgregarAlCarrito({...Item, cantidad: cant})
  }

  return (

    <div className="container" style={{display: 'flex', border: 'solid 1px black', borderRadius: '5px', marginTop: '20px', marginBottom: '20px'}}>
      <div> <img src={Item.img} alt="" class="card-img-top" style={{height: '400px', width:'400px'}}  /></div>
     <div style={{padding: "20px"}}>
      <h3>{Item.name}</h3>
      <p>{Item.description}  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, assumenda eum porro unde dolorem eius minima quae ut, tempora deserunt veritatis fugit similique perferendis consequatur nobis quas error, libero hic.</p>
      <h3> $ {Item.price}</h3>
      
     {goCart ?  (<ItemCount stock={Item.stock} onAdd={onAdd}/>
              ) : 
     (<Link to="/my-app-react/carrito"><button class="btn btn-warning">Ir al carrito</button> </Link>
     
     )}
     </div>
    </div>   
  )

};
export default ItemDetail;

