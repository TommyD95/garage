import { createReducer } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { IForm } from "../models/IForm";
import { IGarage } from "../models/IGarage";
import { eliminaVettura, inserisciVettura,  reset,   setFormKm, setFormMarca, setFormModello, setFormTarga, setStep } from "./actions";


export interface GarageReducerType{
    garage:IGarage[]
};

export interface GarageState{
    // eslint-disable-next-line no-unused-expressions
    garage:GarageReducerType
};



const initialState:GarageReducerType={
    garage:[

    ]
};

export const garageReducer=createReducer(initialState,(builder)=>{
    builder.addCase(inserisciVettura,(state,action)=>{
        let id=1;
        if(state.garage.length>0){
            id=(Math.max(...state.garage.map(vettura=>vettura.id)))+1;
        }
        action.payload.id=id;
        state.garage=[...state.garage,action.payload]
    })
    .addCase(eliminaVettura,(state,action)=>{
        let newGarage=state.garage.filter(vettura=>vettura.id!=action.payload.id);
        state.garage=[...newGarage];
    })
    /* .addCase(ricercaModello,(state,action)=>{
        state.garage.find(vettura=>vettura.modello===action.payload);

        
    }) */
})

export interface FormReducertype{
    form:IForm
}

export interface FormState{
    
    form:FormReducertype
}

const initialStateForm:FormReducertype={
    form:{
        km:0,
        marca:"",
        modello:"",
        step:1,
        targa:""
    }
}

export const formReducer=createReducer(initialStateForm,(builder)=>{
    builder.addCase(
        setFormKm,(state,action)=>{
            state.form.km=action.payload;
        }
    )
    .addCase(
        setFormMarca,(state,action)=>{
            state.form.marca=action.payload;
        }
    )
    .addCase(
        setFormModello,(state,action)=>{
           
            state.form.modello=action.payload;
        }
    )
    .addCase(
        setFormTarga,(state,action)=>{
            
            state.form.targa=action.payload;
        }
    )
    .addCase(
        setStep,(state,action)=>{
            // eslint-disable-next-line no-unused-expressions
            state.form.step=action.payload;
        }
        )   
        .addCase(reset,(state)=>{
            state.form.km===0,
            state.form.targa==="",
            state.form.modello==="",
            state.form.marca===""
        })
       
})