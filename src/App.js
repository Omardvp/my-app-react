import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";
import {} from "./components/CartWidget/CartWidget.css"
import ItemCount from './components/ItemCount/ItemCount.jsx';





function App() {
  return (
    <div className="App">
    
    <NavBar /> 
    <ItemListContainer greeting="Equipment Vintage clote"/>
    
   
  
    </div>
  );
}

export default App;
