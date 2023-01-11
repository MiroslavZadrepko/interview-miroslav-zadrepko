import axios from 'axios';

const API_URL = `http://localhost:5000/api/todos/`;

const createTodo = async (todoData) => {
    const response = await axios.post(API_URL, todoData);
    return response.data
}

const getTodos = async () => {
    const respons = await axios.get(API_URL);
    return respons.data
}

const deleteTodo = async (id) => {
    const respons = await axios.delete(API_URL + id);
    return respons.data
}

const updateTodo = async (id, text) => {
    const respons = await axios.put(API_URL + id, {text: text});
    return respons.data
}

const updateDone = async (id, done) => {
    const respons = await axios.put(API_URL + id, {done: done})
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