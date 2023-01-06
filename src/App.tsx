
import './App.css';
import { IGarage } from './models/IGarage';
import { useAppSelector } from './store/hooks';
import { getGarage } from './store/selector';
import Inserimento from './views/Inserimento';
import Visualizza from './views/Visualizza';

function App() {

  const garage:IGarage[]=useAppSelector(getGarage)

  return (
    <>
    <div className="App">
 {garage.length==0 ? <h3 style={{color:"red"}}>nessun elemento</ h3> : <Visualizza />}
 <Inserimento />
    </div>
    </>
  );
}

export default App;
