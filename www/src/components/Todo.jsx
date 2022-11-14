import React from 'react';

const Todo = ({ todo }) => {
    return (
        <>
            <p>{todo}</p>
            <button className="btn waves-effect waves-light" >Edit</button>
            <button className="btn waves-effect waves-light" >Delete</button>
        </>
    )
}

export default Todo;