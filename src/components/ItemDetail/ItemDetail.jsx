
const ItemDetail = ({ Item }) => {
  
  return (
    <div className='container'>
                    <div className="container">
                       
                    </div>
                    <div className="container">
                        <img  src={Item.img} />
                        <br/>
                        <label>{Item.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt ex perspiciatis nemo, repudiandae error? Odit maxime, hic explicabo consequuntur non repellat optio voluptates exercitationem ut recusandae temporibus dolorum minus.</label>
                        <label>{Item.categoria}</label>
                    </div>
                    <div className="container">
                        <h3>$ {Item.price}</h3>
                        <button className="btn btn-warning">Comprar</button>
                    </div>
                </div>

  )

};
export default ItemDetail;

  //   <div className="container" style={{display: 'flex', border: 'solid 1px black', borderRadius: '5px', marginTop: '20px', marginBottom: '20px'}}>
  //     <div> <img src={prod.img} alt="" class="card-img-top" style={{height: '400px', width:'400px'}}  /></div>
  //    <div style={{padding: "20px"}}>
  //     <h3>Campera Adidas {prod.name}</h3>
  //     <p>{prod.description}  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, assumenda eum porro unde dolorem eius minima quae ut, tempora deserunt veritatis fugit similique perferendis consequatur nobis quas error, libero hic.</p>
  //     <h3> $ {prod.price}</h3>
  //     <button class="btn btn-warning">Comprar</button>
  //    </div>
     
  //   </div>
  // );
  