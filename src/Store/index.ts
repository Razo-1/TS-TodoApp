import { configureStore } from "@reduxjs/toolkit";
import { serverReducer } from "./ServerReducer";


const store = configureStore({
    reducer : {
        server : serverReducer
    }
})

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState,AppDispatch }
export { store }