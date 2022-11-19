import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/todoSlice';

function EditTodo({ todo }) {

    const dispatch = useDispatch();
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateTodo({ id: todo._id, text: text }))
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="input-field row">
                    <input className="center-align col m8 offset-m2" type="text" name='text' id='text' value={text} onChange={(e) => setText(e.target.value)} />
                </div>

                <div className="row">
                    <button className="btn waves-effect waves-light" type='submit'> Submit changes</button>
                </div>
            </form>
        </div>
    )
}

export default EditTodo;