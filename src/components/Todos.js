import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../redux/actions/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

    return (
        <div>
            <h2>Todos List</h2>
            <p>{isLoading && "Loading"}</p>
            <p>{error && error}</p>
            <div>
                {
                    todos?.map(todo => <p key={todo?.id}>{todo?.id}. {todo?.title}</p>)
                }
            </div>
        </div>
    );
};

export default Todos;