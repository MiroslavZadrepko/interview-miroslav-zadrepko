import axios from 'axios';

const api = axios.create({baseURL: "http://localhost:5000"})

const API_URL = '/api/todos/';

const createTodo = async (todoData) => {
    const response = await api.post(API_URL, todoData);
    return response.data
}

const getTodos = async () => {
    const respons = await api.get(API_URL);
    return respons.data
}

const deleteTodo = async (id) => {
    const respons = await api.delete(API_URL + id);
    return respons.data
}

const updateTodo = async (id, text) => {
    const respons = await api.put(API_URL + id, {text: text});
    return respons.data
}

const updateDone = async (id, done) => {
    const respons = await api.put(API_URL + id, {done: done})
    return respons.data
}
const todoService = {
    createTodo,
    getTodos,
    deleteTodo,
    updateTodo,
    updateDone
}; 

export default todoService;