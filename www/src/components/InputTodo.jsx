import React from 'react';
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';

const InputTodo = ({ setTodos }) => {

    const [todo, setTodo] = useState(
        {
            todoText: '',
            id: ''
        }
    )

    const [todoText, setTodoText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setTodo({
            todoText: todoText,
            id: v4()
        })
        setTodoText('')
    }

    useEffect(() => {
        setTodos((prev) => {
            return [...prev, todo]
        })
    }, [todo])



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='todoText' value={todoText} onChange={(e) => setTodoText(e.target.value)} required />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default InputTodo;