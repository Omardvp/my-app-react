import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";



function App() {
  return (
    <div className="App">
    
    <NavBar /> 
    <ItemListContainer greeting="Hola soy ItemListContainer que vengo de app."/>
  
    </div>
  );
}

export default App;
