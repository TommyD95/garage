import { createSelector } from "@reduxjs/toolkit";
import { IForm } from "../models/IForm";
import { IGarage } from "../models/IGarage";
import { FormReducertype, FormState, GarageReducerType, GarageState } from "./reducers";

const garageState=(state:GarageState):GarageReducerType=>state.garage;

export const getGarage=createSelector(garageState,(state:GarageReducerType):IGarage[]=>{
    return state.garage;
})

const formState=(state:FormState):FormReducertype=>state.form;

export const getForm=createSelector(formState,(state:FormReducertype):IForm=>{
    return state.form;
})