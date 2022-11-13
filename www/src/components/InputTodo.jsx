import React from 'react';
import { useState } from 'react';
import { v4 } from 'uuid';

const InputTodo = ({ addTodo }) => {

    const [todo, setTodo] = useState(
        {
            todoText: '',
            id: ''
        }
    );

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value, id: v4() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo)
        setTodo({ todoText: "", id: "" })
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}  >
                <div className="input-field row">
                    <input className="center-align" type='text' name='todoText' value={todo.todoText} onChange={handleChange} required />
                </div>
                <div className="row">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default InputTodo;