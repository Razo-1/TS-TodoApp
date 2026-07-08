import { Control, Paginatione } from "../../molecules"
import { Todo } from "../../organisms"
import './TodoPage.css'

function TodoPage(){
    return(
        <div className="container">
            <div className="todo">
                <Control/>
                <Todo/>
                <Paginatione/>
            </div>
        </div>
    )
}

export { TodoPage }