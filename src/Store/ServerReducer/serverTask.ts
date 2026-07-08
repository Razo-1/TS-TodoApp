import { GET_DATA,DELETE_DATA,TOTAL_PAGE, NEXT_PAGE,ACTIV_TODO, EDIT_TODO } from "./serverType.ts";
import type { ITodo, } from "../../Types";

const getServerTask = (data : ITodo[]) => ({ type : GET_DATA, payload : data });
const deleteTask = (id : number) => ({ type : DELETE_DATA, payload : id });
const pageTask = (page : number) => ({ type : TOTAL_PAGE, payload : page });
const nextPageTask = (next : number) => ({type : NEXT_PAGE,payload : next});
const activeTask = (id : number) => ({ type : ACTIV_TODO, payload : id });
const editTask = (text : string,id : number) => ({ type : EDIT_TODO, payload : text , id : id});


export { getServerTask,deleteTask,pageTask,nextPageTask,activeTask,editTask }