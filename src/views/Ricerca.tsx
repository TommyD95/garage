import { useState } from "react";
import CampoInput from "../models/campoInput";
import { IGarage } from "../models/IGarage";
import Pulsante from "../models/Pulsante";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getGarage } from "../store/selector";

function Ricerca() {

    const garage = useAppSelector(getGarage);

    const [modello, setModello] = useState("");
    const [vetturaT, setVetturaT] = useState<IGarage | undefined>({
        id: 0,
        km: 0,
        marca: "",
        modello: "",
        targa: ""
    })

    const ricercaModelloForm = (e: any) => {
        setModello(e);

    }



    const cerca = () => {

        const vetturaTrovata: IGarage | undefined = garage.find(vettura => vettura.modello=== modello);

        if (vetturaTrovata !== undefined) {
            setVetturaT(vetturaTrovata);
            setModello("");


        } else {

            setVetturaT({
                id: 0,
                km: 0,
                marca: "",
                modello: "",
                targa: ""
            })
        }

    }


    return (
        <div>

            {vetturaT?.id !== 0 ? <p>
                vettura trovata: <br />
                <text>id: {vetturaT?.id}</ text><br />
                <text>marca: {vetturaT?.marca}</ text><br />
                <text>modello: {vetturaT?.modello}</ text><br />
                <text>targa: {vetturaT?.targa}</ text><br />
                <text>km: {vetturaT?.km}</ text>
            </ p> : <div>nessun elemento trovato</div>}

            <CampoInput label="inserisci modello" onChangeInput={ricercaModelloForm} type={"text"} value={modello} />
            
            <Pulsante label="cerca" onClick={cerca} type="button" />

        </ div>
    );
}

export default Ricerca;