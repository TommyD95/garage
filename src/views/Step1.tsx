import CampoInput from "../models/campoInput";
import { IForm } from "../models/IForm";
import { IGarage } from "../models/IGarage";
import Pulsante from "../models/Pulsante";
import { inserisciVettura,  setFormKm, setFormMarca, setFormModello, setFormTarga, setStep } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getForm } from "../store/selector";


function Step1() {


    const form = useAppSelector(getForm);
    const dispatch = useAppDispatch();




    let newVettura: IGarage = {
        id: 0,
        km: form.km,
        targa: form.targa,
        modello: form.modello,
        marca: form.marca,
    }
    let vetturaForm: IForm = {
        km: newVettura.km,
        marca: newVettura.marca,
        modello: newVettura.modello,
        targa: newVettura.targa
    }
    

    const clickInserisci = () => {
   

         vetturaForm = {
            km: newVettura.km,
            marca: newVettura.marca,
            modello: newVettura.modello,
            targa: newVettura.targa
        }

        dispatch(setFormKm);
        dispatch(setFormMarca);
        dispatch(setFormModello);
        dispatch(setFormTarga);
        dispatch(setStep(2));

     
    }

    const onChangeTarga=(e:any)=>{

        dispatch(setFormTarga(e));
    }
    const onChangeKm=(e:any)=>{
        dispatch(setFormKm(e));

    }
    

    const onChangeModello=(e:any)=>{
        dispatch(setFormModello(e));    
    }

    const onChangeMarca=(e:any)=>{
        dispatch(setFormMarca(e));    }

    return (
        <><CampoInput label={"targa"} type={"text"} value={form.targa}  onChangeInput={onChangeTarga} />
            <CampoInput label={"marca"} type={"text"} value={form.marca} onChangeInput={onChangeMarca} />
            <CampoInput label={"modello"} type={"text"} value={form.modello} onChangeInput={onChangeModello} />
            <CampoInput label={"km"} type={"number"} value={form.km} onChangeInput={onChangeKm} />      
             <Pulsante type={"button"} onClick={clickInserisci} label={"INSERISCI"} /></>
    );
}

export default Step1;