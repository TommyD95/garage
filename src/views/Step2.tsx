import { IGarage } from "../models/IGarage";
import Pulsante from "../models/Pulsante";
import { inserisciVettura, reset, setStep } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getForm } from "../store/selector";

function Step2() {
    
    const form=useAppSelector(getForm);
const dispatch=useAppDispatch();



    const clickAvanti=()=>{
     const   newVettura:IGarage = {
            id: 0,
            km: form.km,
            targa: form.targa,
            modello: form.modello,
            marca: form.marca,
        }
        dispatch(inserisciVettura(newVettura));

        dispatch(reset(0));

        dispatch(setStep(1))

    }

    return (
        <div>
            <p>modello: {form.modello}</p>
            <p>marca: {form.marca}</p>
            <p>km: {form.km}</p>
            <p>targa: {form.targa}</p>
            <Pulsante label={"avanti"} type={"button"} onClick={clickAvanti} />
            
        </div>
      );

}

export default Step2 ;