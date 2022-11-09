import React from 'react';

const Todo = ({ todo }) => {
    return (
        <>
            <p>{todo.todoText}</p>
            <button>Edit</button>
            <button>Delete</button>
        </>
    )
}

export default Todo;