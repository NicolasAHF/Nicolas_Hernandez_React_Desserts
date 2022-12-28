import './App.css';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/Navigation/NavBar';
import './custom.scss';

function App() {
  return (<>
    <NavBar />
    <ItemListContainer greetings="Bienvenido a Rosas Desserts"/>
  </>
    
  );
}

export default App;
