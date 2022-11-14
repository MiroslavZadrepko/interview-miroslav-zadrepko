import axios from 'axios';

const API_URL = '/api/todos'

export const getAllTodos = () => axios.get(`API_URL`);
export const addTodo = ()=> axios.post(`API_URL`);
export const editTodo = (id) => axios.put(`API_URL/${id}`);
export const deletTodo = (id) => axios.delete(`API_URL/${id}`);