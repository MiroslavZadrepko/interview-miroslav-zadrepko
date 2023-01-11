import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import todoService from './todoService';

const initialState = {
    todos: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

export const createTodo = createAsyncThunk('todos/create', async (todoData, thunkAPI) => {
    try {
        return await todoService.createTodo(todoData)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getTodos = createAsyncThunk('todos/getAll', async (_, thunkAPI) => {
    try {
        return await todoService.getTodos()
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteTodo = createAsyncThunk('todos/delete', async (id, thunkAPI) => {
    try {
        return await todoService.deleteTodo(id)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateTodo = createAsyncThunk('todos/update', async ({ id, text }, thunkAPI) => {
    try {
        return await todoService.updateTodo(id, text)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateDone = createAsyncThunk('todos/updatedone', async ({ id, done }, thunkAPI) => {
    try {
        return await todoService.updateDone(id, done)
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTodo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.todos.push(action.payload)
            })
            .addCase(createTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getTodos.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.todos = action.payload
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteTodo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.todos = state.todos.filter((todo) => todo._id !== action.payload.id)
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateTodo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.todos = state.todos.map((item, index) => {
                    if (item._id === action.payload._id) {
                        return {
                            ...item,
                            text: action.payload.text,
                            done: false
                        }
                    }
                    return item
                })
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateDone.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateDone.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.todos = state.todos.map((item) => {
                    if (item._id === action.payload._id) {
                        if (item.done) {
                            return {
                                ...item,
                                done: false
                            }
                        } else {
                            return {
                                ...item,
                                done: true
                            }
                        }

                    }
                    return item
                })
            })
            .addCase(updateDone.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = todoSlice.actions;
export default todoSlice.reducer;