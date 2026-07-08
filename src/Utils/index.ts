import type { ITodo } from "../Types";

function isActive(id: number, arr: ITodo[]): ITodo[] {
    return arr.map(todo =>
        todo.id === id 
            ? { ...todo, completed: !todo.completed }
            : todo
    );
}

function editHelper(id : number,str : string,arr : ITodo[]){
    let size : number = arr.length
    for(let i = 0;i < size;++i){
        if(arr[i].id === id){
            arr[i] = {...arr[i], title : str};
            break;
        }
    }
    return arr
}

export { isActive,editHelper }
