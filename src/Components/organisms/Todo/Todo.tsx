import { useDispatch, useSelector } from "react-redux"
import { serverTodo } from "../../../Store/ServerReducer"
import { useEffect } from "react"
import type { AppDispatch, RootState } from "../../../Store"
import { Task } from "../../molecules"
import './Todo.css'

function Todo(){

    const { data,page } = useSelector((state : RootState) => state.server)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(serverTodo(page * 10))
        
    },[page])
    
    return(
        <ul className="todo-list">
            {data?.map(el => <Task key={el.id} element={el}/>)}
        </ul>
    )
}

export { Todo }