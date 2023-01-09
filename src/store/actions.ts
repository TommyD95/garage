import { createAction } from "@reduxjs/toolkit";
import { IGarage } from "../models/IGarage";

export const inserisciVettura=createAction<IGarage,"attivita/inserisciVettura">("attivita/inserisciVettura");
export const eliminaVettura=createAction<IGarage,"attivita/eliminaVettura">("attivita/eliminaVettura");
/* export const ricercaModello=createAction<string,"attivita/ricercaModello">("attivita/ricercaModello");
 */
export const setFormKm=createAction<number,"attivita/setFormKm">("attivita/setFormKm");
export const setFormModello=createAction<string,"attivita/setFormModello">("attivita/setFormModello");
export const setFormMarca=createAction<string,"attivita/setFormMarca">("attivita/setFormMarca");
export const setFormTarga=createAction<string,"attivita/setFormTarga">("attivita/setFormTarga");
export const setStep=createAction<number,"attivita/setStep">("attivita/setStep");
export const reset=createAction<number,"attivita/reset">("attivita/reset")