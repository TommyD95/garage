import { useState } from "react";
import CampoInput from "../models/campoInput";
import { IGarage } from "../models/IGarage";
import Pulsante from "../models/Pulsante";
import { inserisciVettura } from "../store/actions";
import { useAppDispatch } from "../store/hooks";
function Inserimento() {

    const [targa,setTarga]=useState("");
    const [modello,setModello]=useState("");
    const [marca,setMarca]=useState("");
    const [km,setKm]=useState(0);

    const dispatch=useAppDispatch();

    const reset=()=>{
        setMarca("");
        setKm(0);
        setModello("");
        setTarga("");
    }

    const control=()=>{
        if(targa=="" || marca=="" || modello=="" ){
            alert("compilare tutti i campi!")
        }else{
            clickInserisci();
        }
    }

    const clickInserisci=()=>{
        const newVettura:IGarage={
id:0,
km:km,
targa:targa,
modello:modello,
marca:marca,
        }

        dispatch(inserisciVettura(newVettura));
        reset();
    }

    return (
        <div>
            <CampoInput label={"targa"} type={"text"} value={targa} onChangeInput={setTarga} />
            <CampoInput label={"marca"} type={"text"} value={marca} onChangeInput={setMarca} />
            <CampoInput label={"modello"} type={"text"} value={modello} onChangeInput={setModello} />
            <CampoInput label={"km"} type={"number"} value={km} onChangeInput={setKm} />
            <Pulsante type={"button"} onClick={control}  label={"INSERISCI"} />
        </div>
    )
}

export default Inserimento;