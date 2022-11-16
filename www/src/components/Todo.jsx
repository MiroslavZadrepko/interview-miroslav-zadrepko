import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todoSlice';

const Todo = ({ todo }) => {

    const dispatch = useDispatch();

    return (
        <div className='collection'>

            <div> {new Date(todo.date).toLocaleDateString('sr-SP')}</div>
            <div>
                <p>{todo.text}</p>
                <button className="btn waves-effect waves-light">Edit</button>
                <button onClick={() => dispatch(deleteTodo(todo._id))} className="btn waves-effect waves-light">Delete</button>
                {todo.done ?
                    <button className="btn waves-effect waves-light"><i className="large material-icons">done</i></button>
                    :
                    <button className="btn waves-effect waves-light">Done</button>}
            </div>

        </div>
    )
}

export default Todo;