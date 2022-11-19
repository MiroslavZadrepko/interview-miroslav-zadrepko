import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateDone } from '../features/todoSlice';
import EditTodo from './EditTodo'

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [done, setDone] = useState(todo.done);

    const callEdit = () => {
        setEdit(!edit);
        if (done) {
            setDone(!done)
        } 
    }

    const handleClick = () => {
        setDone(!done); 
        dispatch(updateDone({id: todo._id}));
    }
    
    return (
        <div className='collection hoverable green lighten-2 '>

            <div> <h6>{new Date(todo.date).toLocaleDateString('sr-SP')}</h6> </div>
            <div>
                <h5 style={done ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{todo.text}</h5>
                <button
                    className="btn waves-effect waves-light"
                    onClick={() => callEdit()} >
                    <i className="large material-icons">edit</i>
                </button>
                <button
                    className="btn waves-effect waves-light"
                    onClick={() => dispatch(deleteTodo(todo._id))} >
                    <i className="large material-icons">delete</i>
                </button>
                <button
                    className="btn waves-effect waves-light"
                    onClick={() => handleClick()} >
                    <i className="large material-icons">done</i>
                </button>
                {edit ? <EditTodo todo={todo}/> : null}
            </div>

        </div>
    )
}

export default Todo;