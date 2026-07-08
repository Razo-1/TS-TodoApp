import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../../Store"
import { paginationTodo } from "../../../Store/ServerReducer";
import { nextPageTask } from "../../../Store/ServerReducer/serverTask";
import './Paginatione.css'

function Paginatione(){

    const { limit } = useSelector((state : RootState) => state.server)
    let dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(paginationTodo(200,0))
    },[dispatch]);
    
    let nextPage = (start : number) => {
        dispatch(nextPageTask(start))
    }
        
    return(
        <div className="pagination">
            {limit
                ? Array.from(
                    { length: Math.ceil(limit / 10) - 1 },
                        (_, ind) => ind + 1
                            ).map((el) => (
                                <button
                                    className="pagination-btn"
                                    key={el}
                                    onClick={() => nextPage(el)}
                                >
                                    {el}
                                </button>
                            )): ""
              }
        </div>
    )
}

export { Paginatione }