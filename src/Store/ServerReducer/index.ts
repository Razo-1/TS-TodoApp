import type { AnyAction, Dispatch, Reducer } from "redux";
import { DELETE_DATA, GET_DATA,TOTAL_PAGE,NEXT_PAGE,ACTIV_TODO, EDIT_TODO } from "./serverType"
import { API } from "../../API";
import type { ThunkAction } from "redux-thunk";
import type { RootState } from "..";
import { deleteTask, getServerTask, pageTask } from "./serverTask";
import { isActive,editHelper } from "../../Utils";
import type { ITodo,combination } from "../../Types";


const serverState : combination = {
    data : [],
    limit : null,
    page : 1,
    check : 1,
}

const serverReducer : Reducer<combination,AnyAction> = (state = serverState,action) => {
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                data : state.check === state.page ? [...action.payload,...state.data] : [...action.payload] ,
                check : state.page
            }
        case DELETE_DATA:
            return {
                ...state,
                data : state.data.filter(el => el.id !== action.payload),
            }
        case TOTAL_PAGE: 
            return {
                ...state,
                limit : action.payload, 
            }
        case NEXT_PAGE:
            return {
                ...state,
                page : action.payload,
            }
        case ACTIV_TODO:
            return {
                ...state,
                data : isActive(action.payload,state.data)
            }
        case EDIT_TODO:
            return{
                ...state,
                data : editHelper(action.id,action.payload,state.data)
            }
        default: 
            return state
    }
}

type AppThunk = ThunkAction<Promise<void>,RootState,unknown,any>

const serverTodo = (start : number) : AppThunk => {
    return async (dispatch : Dispatch) => {
        const resource = await API.getData(10,start);
        dispatch(getServerTask(resource));
    }
}

const deleteTodo = (id : number) : AppThunk => {
    return async (dispatch : Dispatch) => {
        await API.deleteData(id);
        dispatch(deleteTask(id));    
    }
}

const paginationTodo = (limit : number ,start : number) : AppThunk => {
    return async (dispatch : Dispatch) => {
        const resource = await API.getData(limit,start);
        dispatch(pageTask(resource.length));
        
    }
}

const updateTodo = (id : number,chang : ITodo) : AppThunk => {
    return async () => {
        await API.changData(id,chang);
    }
}



export {serverReducer,serverTodo,deleteTodo,paginationTodo,updateTodo};