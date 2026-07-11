import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateTodo, deleteTodo, editTodo, activTodo } from "../../../Store/ServerReducer";
import type { AppDispatch, RootState } from "../../../Store";
import EditTodoModal from "../EditableText/EditTodoModal";
import type { propTask } from "../../../Types";
import "./Task.css";

function Task({element}:propTask){


    const dispatch = useDispatch<AppDispatch>();

    const {data} = useSelector(
        (state:RootState)=>state.server
    );


    const [open,setOpen] = useState(false);



    const remove = () =>{
        dispatch(deleteTodo(element.id));
    };



    const isActive = () => {

        dispatch(activTodo(element.id));


        const chang = data.find(
            el=>el.id === element.id
        );


        if(chang){
            dispatch(updateTodo(element.id,chang));
        }

    };



    const saveTodo = (newTitle:string)=>{


        dispatch(
            editTodo({payload : newTitle,id : element.id})
        );


        const chang = data.find(
            el=>el.id === element.id
        );


        if(chang){
            dispatch(
                updateTodo(element.id,chang)
            );
        }

    };




    return (

        <li className="li">


            <input
                type="checkbox"
                className="todo-checkbox"
                checked={element.completed}
                onChange={isActive}
            />



            <p
                className="todo-title"
                onClick={()=>setOpen(true)}
            >
                {element.title}
            </p>



            <button
                className="todo-delete"
                onClick={remove}
            >
                x
            </button>



            <EditTodoModal
                open={open}
                title={element.title}
                onClose={()=>setOpen(false)}
                onSave={saveTodo}
            />


        </li>

    );
}



export {Task};