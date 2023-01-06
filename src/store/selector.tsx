import { createSelector } from "@reduxjs/toolkit";
import { IGarage } from "../models/IGarage";
import { GarageReducerType, GarageState } from "./reducers";

const garageState=(state:GarageState):GarageReducerType=>state.garage;

export const getGarage=createSelector(garageState,(state:GarageReducerType):IGarage[]=>{
    return state.garage;
})