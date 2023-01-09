
import './App.css';
import { IForm } from './models/IForm';
import { IGarage } from './models/IGarage';
import { useAppSelector } from './store/hooks';
import { getForm, getGarage } from './store/selector';
import Ricerca from './views/Ricerca';
import Step1 from './views/Step1';
import Step2 from './views/Step2';
import Visualizza from './views/Visualizza';

function App() {

  const garage:IGarage[]=useAppSelector(getGarage)
  const form:IForm=useAppSelector(getForm)

  
  return (
    <>
    <div className="App">
 {garage.length==0 ? <h3 style={{color:"red"}}>nessun elemento</ h3> : <Visualizza />}
 {form.step===1 && <Step1 />}
 {form.step===2 && <Step2 />}
 <Ricerca />

    </div>
    </>
  );
}

export default App;
