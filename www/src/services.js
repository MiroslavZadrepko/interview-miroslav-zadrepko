import axios from 'axios';

export const getAllPosts = () => axios.get(`/`);
export const deletePost = (id) => axios.delete(`localhost:5000/${id}`)