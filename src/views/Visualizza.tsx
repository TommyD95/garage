import { IGarage } from "../models/IGarage";
import Pulsante from "../models/Pulsante";
import { eliminaVettura } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getGarage } from "../store/selector";

function Visualizza(){

    const garage:IGarage[]=useAppSelector(getGarage);

    const dispatch=useAppDispatch();
    
    const elimina=(vettura:IGarage)=>{
        dispatch(eliminaVettura(vettura))
    }

    return (
        <>
            {garage.map( (vettura) => <div key={vettura.id}>  {vettura.id}. {vettura.modello} <Pulsante type={"button"} onClick={()=>elimina(vettura)} label="elimina"></Pulsante></ div>)}
            </>
    )
}

export default Visualizza;