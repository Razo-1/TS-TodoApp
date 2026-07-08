import axios, { type AxiosInstance } from "axios";
import type { ITodo,IApi } from "../Types";

let apiConfige: IApi = {
    baseURL: 'https://jsonplaceholder.typicode.com',
}

const instance: AxiosInstance = axios.create(apiConfige);

const API = {
    async getData(limit: number = 10, start: number = 10) {
        const response = await instance.get(`/todos?_limit=${limit}&_start=${start}`);
        return response.data
    },
    async deleteData(id: number) {
        const request = await instance.delete(`/todos/${id}`)
        return request
    },
    async changData(id: number,chang : ITodo) {
        await instance.put(`/todos/${id}`,chang)
    }
}

export { API }