import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { formReducer, garageReducer } from "./reducers";

export const store=configureStore({
    reducer:{
        garage:garageReducer,
        form:formReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

