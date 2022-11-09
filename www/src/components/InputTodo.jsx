import React from 'react';
import { useState } from 'react';
import { v4 } from 'uuid';

const InputTodo = ({addTodo}) => {

    const [todo, setTodo] = useState(
        {
            todoText: '',
            id: '' 
        }
    );

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value, id:v4() });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo)
        setTodo({todoText: "", id: "" })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='todoText' value={todo.todoText} onChange={handleChange} required />
                {}
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default InputTodo;