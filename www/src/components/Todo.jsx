import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todoSlice';
import EditTodo from './EditTodo'

const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    const callEdit = () => {
        setEdit(!edit);
    }

    return (
        <div className='collection'>

            <div> {new Date(todo.date).toLocaleDateString('sr-SP')}</div>
            <div>
                <h5>{todo.text}</h5>
                <button className="btn waves-effect waves-light" onClick={()=> callEdit()} >Edit</button>
                <button onClick={() => dispatch(deleteTodo(todo._id))} className="btn waves-effect waves-light">Delete</button>
                {todo.done ?
                    <button className="btn waves-effect waves-light"><i className="large material-icons">done</i></button>
                    :
                    <button className="btn waves-effect waves-light">Done</button>}
                    {edit ? <EditTodo todo={todo}/> : null}
            </div>

        </div>
    )
}

export default Todo;