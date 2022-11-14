import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../features/todoSlice';


const InputTodo = () => {

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTodo({text}));
        setText('')
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}  >
                <div className="input-field row">
                    <input className="center-align col m6 offset-m3" type='text' id='text' name='todoText' value={text} onChange={(e) => setText(e.target.value)} required />
                </div>
                <div className="row">
                    <button className="btn waves-effect waves-light" type="submit">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default InputTodo;