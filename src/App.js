import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar.jsx";
import {} from "./components/CartWidget/CartWidget.css";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./components/Context/CartContext.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import  BuyForm from "./components/BuyForm/BuyForm.jsx";



function App() {
  return (
    <div className="App">
      <CartContextProvider>

      <BrowserRouter>
  
    <NavBar /> 
      <Routes>
          <Route 
          path="my-app-react/"
          element={ <ItemListContainer greeting="Equipment. Vintage Sport clote " /> }
          />
          <Route
          path="my-app-react/category/:idCategory"
          element={ <ItemListContainer greeting="Equipment. Vintage Sport clote"/>} 
          />
          <Route
          path="my-app-react/detalle/:id"
          element={ <ItemDetailContainer /> }
          />
           <Route 
           path="my-app-react/carrito" 
           element={<Cart />}/> 
           <Route 
           path="my-app-react/buyForm" 
           element={<BuyForm  />}/> 
      </Routes>
      <Footer/>
  
</BrowserRouter>
       </CartContextProvider>
       </div>
  );
}

export default App;
