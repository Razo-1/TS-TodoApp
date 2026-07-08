import { useState, type ChangeEvent } from "react"
import { useDispatch } from "react-redux";
import { getServerTask } from "../../../Store/ServerReducer/serverTask";
import type { AppDispatch } from "../../../Store";
import type { ITodo } from "../../../Types";
import './Control.css';


function Control(){

    let [text,setText] = useState('');
    let dispatch = useDispatch<AppDispatch>()

    let handleChangText = (e : ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    let handleSubmit = (e : ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(text.trim()){
            let recource : ITodo = { id : Date.now(),title : text,completed : false, userId : 1};
            dispatch(getServerTask([recource]));
            setText('');
        }
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                className="todo-input"
                type="text"
                value={text}
                onChange={handleChangText}
            />
            <button className="todo-button">Add</button>
        </form>
    )
}

export { Control }