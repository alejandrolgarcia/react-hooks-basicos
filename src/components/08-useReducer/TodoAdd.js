

import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleAddSubmit = (e) => {
        
        e.preventDefault();

        if( description.trim().length <= 1 ) {
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo( newTodo );
        reset();

    }

    return (
        <>
            <h4>Add TODO</h4>
            <hr />

            <form onSubmit={ handleAddSubmit }>

                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Add your Todo..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-sm btn-block mt-2"
                >
                    Add
                </button>
            </form>  
        </>
    )
}
