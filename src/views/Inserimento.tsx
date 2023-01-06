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

    const clickInserisci=()=>{
        const newVettura:IGarage={
id:0,
km:km,
targa:targa,
modello:modello,
marca:marca,
        }

        dispatch(inserisciVettura(newVettura));
    }

    return (
        <div>
            <CampoInput label={"targa"} type={"text"} value={targa} onChangeInput={setTarga} />
            <CampoInput label={"marca"} type={"text"} value={marca} onChangeInput={setMarca} />
            <CampoInput label={"modello"} type={"text"} value={modello} onChangeInput={setModello} />
            <CampoInput label={"km"} type={"number"} value={km} onChangeInput={setKm} />
            <Pulsante type={"button"} onClick={clickInserisci}  label={"INSERISCI"} />
        </div>
    )
}

export default Inserimento;