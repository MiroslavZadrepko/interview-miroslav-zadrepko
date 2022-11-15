import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos, reset } from '../features/todoSlice';
import Todo from './Todo';

const Todos = () => {

    const dispatch = useDispatch();
    const { todos, isLoading, isError, message } = useSelector((state) => state.todos);

    useEffect(() => {
        if (isError) {
            console.log(message)
        };
        dispatch(getTodos);
        return () => {
            dispatch(reset())
        };
    }, [isError, message, dispatch]);

    if (isLoading) {
        return (
            <div class="progress">
                <div class="indeterminate"></div>
            </div>)
    };

    return (
        <div>
            <section className='content'>
                {todos.length > 0 ? (
                    <>
                        {todos.slice(0).reverse().map((todo) => <Todo key={todo._id} todo={todo}/>)}
                    </>
                ) : (<h4>There is no todos yet</h4>)}
            </section>
        </div >
    )
};

export default Todos;