import { createReducer } from "@reduxjs/toolkit";
import { stat } from "fs";
import { IGarage } from "../models/IGarage";
import { eliminaVettura, inserisciVettura } from "./actions";


export interface GarageReducerType{
    garage:IGarage[]
};

export interface GarageState{
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
})