import producto1 from "../assets/img/producto1.jpg"

const oneProduct = {
    id: 1, name: "Rompevientos", description:"Campera Adidas", price: 7000, img: producto1}
  ;

const getOneProduct = new Promise((resolve) => {
    setTimeout(() => {
      resolve(oneProduct);
    }, 2000);
  });
  
  export default getOneProduct;

//   <BrowserRouter>
//   <div className="App">
//     <NavBar /> 
//       <Routes>
//           <Route 
//           exact
//           path="/"
//           element={ <ItemListContainer greeting="Equipment Vintage clote"/> }
//           />
//           <Route
//           exact 
//           path="/categoria"
//           element={ <ItemListContainer greeting="Equipment Vintage clote"/>} 
//           />
//           <Route
//           exact 
//           path="/detalle"
//           element={ <ItemDetailContainer /> }
//           />
//       </Routes>
//   </div>
// </BrowserRouter>

{/* <div className="App">
<NavBar /> 
<ItemListContainer greeting="Equipment Vintage clote"/>
<ItemDetailContainer />
</div> */}