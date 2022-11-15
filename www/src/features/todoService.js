import axios from 'axios';

const API_URL = '/api/todos/';

const createTodo = async (todoData) => {
    const response = await axios.post(API_URL, todoData);
    return response.data
}

const getTodos = async () => {
    const respons = await axios.get(API_URL);
    return respons.data
}

const todoService = {
    createTodo,
    getTodos
};

export default todoService;