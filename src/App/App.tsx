import { Provider } from "react-redux";
import { store } from "../Store";
import { TodoPage } from "../Components";
import './App.css'

function App(){
    
    return(
        <div>
            <Provider store={store}>
                <TodoPage/>
            </Provider>
        </div>
    )
}

export { App }