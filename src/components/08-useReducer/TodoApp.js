import React, { useEffect, useReducer } from 'react';

import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import './styles.css';
import { TodoAdd } from './TodoAdd';

// Establece el estado inicial de reducer
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    // Grabar en el local storage cualquier cambio en los TODOS
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = ( todoId ) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = ( todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });

    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length }) </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>

                <div className="col-5">
                    
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    />

                </div>

            </div>

        </div>
    )
}
