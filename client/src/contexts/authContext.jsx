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
    const [authState, setAuthState] = useState({});
    const changeAuthState = (state) => {
        localStorage.setItem("token", state.token);
        localStorage.setItem("email", state.user.email);
        localStorage.setItem("_id", state.user._id);
        setAuthState(state);
    }
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
