import { createAction } from "@reduxjs/toolkit";
import { IGarage } from "../models/IGarage";

export const inserisciVettura=createAction<IGarage,"attivita/inserisciVettura">("attivita/inserisciVettura");
export const eliminaVettura=createAction<IGarage,"attivita/eliminaVettura">("attivita/eliminaVettura");