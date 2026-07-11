import type { Dispatch } from "redux";
import type { ThunkAction } from "redux-thunk";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { API } from "../../API";
import { isActive,editHelper } from "../../Utils";
import type { ITodo,combination } from "../../Types";


const initialState : combination = {
    data : [],
    limit : null,
    page : 1,
    check : 1,
}
const serverSlice = createSlice({
    name : 'server',
    initialState,
    reducers : {
        getDataAction : (state, action) => {
            state.data = state.check === state.page 
                ? [...action.payload, ...state.data] 
                : [...action.payload];
            state.check = state.page;
        },
        deleteDataAction: (state, action) => {
            state.data = state.data.filter(el => el.id !== action.payload);
        },
        totalPageAction: (state, action) => {
            state.limit = action.payload;
        },
        nextPageAction: (state, action) => {
            state.page = action.payload;
        },
        activTodo: (state, action) => {
            state.data = isActive(action.payload, state.data);
        },
        editTodo: (state, action) => {
            state.data = editHelper(action.payload.id, action.payload.payload, state.data);
        },
    }
})

type AppThunk = ThunkAction<Promise<void>,RootState,unknown,any>

const serverTodo = (start : number) : AppThunk => {
    return async (dispatch : Dispatch) => {
        const resource = await API.getData(10,start);
        dispatch(getDataAction(resource));
    }
}

const deleteTodo = (id : number) : AppThunk => {
    return async (dispatch : Dispatch) => {
        await API.deleteData(id);
        dispatch(deleteDataAction(id));    
    }
}

const paginationTodo = (limit : number ,start : number) : AppThunk => {
    return async (dispatch : Dispatch) => {
        const resource = await API.getData(limit,start);
        dispatch(totalPageAction(resource.length));
        
    }
}

const updateTodo = (id : number,chang : ITodo) : AppThunk => {
    return async () => {
        await API.changData(id,chang);
    }
}

const serverReducer = serverSlice.reducer;

export const { getDataAction, deleteDataAction, totalPageAction, nextPageAction, activTodo, editTodo } = serverSlice.actions;
export {serverReducer,serverTodo,deleteTodo,paginationTodo,updateTodo};