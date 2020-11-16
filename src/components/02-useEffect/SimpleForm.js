import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('hola');
    }, []);

    useEffect( () => {
        // console.log('formState cambio');
    }, [formState]);

    useEffect( () => {
        // console.log('email cambio');
    }, [email]);

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Ingresa tu email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === 'Luis') && <Message /> }
        </>
    )
}
