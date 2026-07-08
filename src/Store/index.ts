import { createStore,combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { serverReducer } from "./ServerReducer";


const rootReducer = combineReducers({
    server : serverReducer
})


const store = createStore(rootReducer,applyMiddleware(thunk));

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

export type { RootState,AppDispatch }
export { store }