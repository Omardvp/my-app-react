import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar.jsx";
import {} from "./components/CartWidget/CartWidget.css";
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Cart} from "./components/Cart/Cart";
import { CartContextProvider } from "./components/Context/CartContext.jsx";


function App() {
  return (
      <CartContextProvider>

      <BrowserRouter>
  <div className="App">
    <NavBar /> 
      <Routes>
          <Route 
          path="my-app-react/"
          element={ <ItemListContainer greeting="Equipment. Vintage Sport clote"/> }
          />
          <Route
          path="my-app-react/categoria/:idCategoria"
          element={ <ItemListContainer greeting="Equipment. Vintage Sport clote"/>} 
          />
          <Route
          path="my-app-react/detalle/:id"
          element={ <ItemDetailContainer /> }
          />
           <Route path="my-app-react/carrito" element={<Cart />}/> 
      </Routes>
  </div>
</BrowserRouter>
       </CartContextProvider>
  );
}

export default App;
