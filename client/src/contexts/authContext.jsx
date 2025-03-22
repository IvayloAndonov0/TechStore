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
        const username = localStorage.getItem("username");

        return token && email && _id && username ? { token, email, _id, username } : {};
    });

    const changeAuthState = (state) => {
        localStorage.setItem("token", state.token);
        localStorage.setItem("email", state.email);
        localStorage.setItem("_id", state._id);
        localStorage.setItem("username", state.username);
        setAuthState(state);
    };

    const logout = () => {
        localStorage.clear();
        setAuthState({});
    };

    const contextData = {
        email: authState.email,
        token: authState.token,
        userId: authState._id,
        username: authState.username,
        isAuthenticated: !!authState._id,
        changeAuthState,
        logout
    };

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const authData = useContext(AuthContext);
    return authData;
}
