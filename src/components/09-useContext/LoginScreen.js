import React, { useContext } from 'react';
import { UserContext } from './UserContext';


export const LoginScreen = () => {

    const { setUser } = useContext( UserContext );

    const user = {
        id: new Date().getTime(),
        name: 'Alejandro'
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary btn-sm"
                onClick={ () => setUser( user ) }
            >
                Login
            </button>
        </div>
    )
}
