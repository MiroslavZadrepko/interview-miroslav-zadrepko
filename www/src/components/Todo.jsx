import React from 'react';

const Todo = ({ todo }) => {
    return (
        <div className='collection'>
            
            <div> {new Date(todo.date).toLocaleDateString('sr-SP')}</div>
            <div>
                <p>{todo.text}</p>
                <button className="btn waves-effect waves-light">Edit</button>
                <button className="btn waves-effect waves-light">Delete</button>
            </div>
          
        </div>
    )
}

export default Todo;