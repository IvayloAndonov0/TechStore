import { createContext, useContext } from "react";
import { useState } from 'react';
export const AuthContext = createContext({
    email: ``,
    token: ``,
    userId: ``,
    isAuthenticated: Boolean,
    changeAuthState: () => null
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState(() => {
       
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");
        const _id = localStorage.getItem("_id");

        return token && email && _id ? { token, email, _id } : {};
    });

    const changeAuthState = (state) => {
            localStorage.setItem("token", state.token);
            localStorage.setItem("email", state.email);
            localStorage.setItem("_id", state._id);
        setAuthState(state);
    };
    const contextData = {
        email: authState.email,
        token: authState.token,
        userId: authState._id,
        isAuthenticated: !!authState._id,
        changeAuthState
    };
    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const authData = useContext(AuthContext);
    return authData;
}
