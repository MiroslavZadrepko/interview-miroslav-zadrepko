import React from 'react';
import Todo from './Todo';

const Todos = ({todos}) => {

    return (
        <div>
            {[...todos].reverse().map((todo) =>
                <Todo key={todo.id} todo={todo} />
            )}
        </div>
    )
}

export default Todos;