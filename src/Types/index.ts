interface ITodo {
    id : number;
    title : string;
    completed : boolean;
    userId : number;
}
interface IApi {
    baseURL: string;
}
interface combination {
    data : ITodo[];
    limit : number | null;
    page : number;
    check : number;
}
interface Props {
    open: boolean;
    title: string;
    onClose: () => void;
    onSave: (title: string) => void;
}
interface propTask {
    element:ITodo;
}

export type  { ITodo,IApi,combination,Props,propTask}