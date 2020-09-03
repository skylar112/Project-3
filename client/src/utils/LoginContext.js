import React from 'react';
import Login from '../pages/Login';

export const LoginContext = React.createContext(false);

export default function LoginContextProvider({ children }) {
    const [open, setOpen] = React.useState(false);

    return (
        <LoginContext.Provider value={{ open, setOpen }}>
            {children}
        </LoginContext.Provider>
    )
}