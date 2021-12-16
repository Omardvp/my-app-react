
const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div className="container" style={{display: 'flex', border: 'solid 1px black', borderRadius: '5px', marginTop: '20px', marginBottom: '20px'}}>
      <div> <img src={item.img} alt="" class="card-img-top" style={{height: '400px', width:'400px'}}  /></div>
     <div>
      <h3>Campera Adidas {item.name}</h3>
      <p>{item.description}  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, assumenda eum porro unde dolorem eius minima quae ut, tempora deserunt veritatis fugit similique perferendis consequatur nobis quas error, libero hic.</p>
      <h3> $ {item.price}</h3>
      <button class="btn btn-warning">Comprar</button>
     </div>
     
    </div>
  );
};
export default ItemDetail;