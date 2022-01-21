import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import {} from "./ItemDetail.css"


const ItemDetail = ({ Item }) => {
  const {cartList, AgregarAlCarrito} = useContext(CartContext)
  const [goCart, setGoCart] = useState(true)
 

  const onAdd = (cant) => {
    console.log(cant)
    setGoCart(false);
    AgregarAlCarrito({...Item, cantidad: cant})
  }
  
  return (

    <div  className="container cardStyleDetail" >
      <div> <img src={Item.img} className="ImgDetail"/></div>
     <div className="card-body" style={{padding: "20px"}}>
      <h3>{Item.name}</h3>
      <p>Descripcion del producto: {Item.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, assumenda eum porro unde dolorem eius minima quae ut, tempora deserunt veritatis fugit similique perferendis consequatur nobis quas error, libero hic.</p>
      <h3> Precio: $ {Item.price}</h3>
      
     {goCart ?  (<ItemCount stock={Item.stock} onAdd={onAdd}/>
              ) : 
     ( <div className="btnsItem"> 
       <Link to="/my-app-react/"><button className="btn btn-primary">Seguir comprando</button></Link>
       <Link to="/my-app-react/carrito"><button className="btn btn-warning">Ir al carrito</button> </Link>
     </div>
      )}
     </div>
    </div>   
  )

};
export default ItemDetail;

