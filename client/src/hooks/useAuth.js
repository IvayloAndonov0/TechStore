
import authApi from "../api/authApi.js";
import { AuthContext, useAuthContext } from "../contexts/authContext.jsx";

export const useRegister = () => {
    const registerHandler = async (username,email,password,repass) => {
        try {
            if(password !== repass){
                throw new Error("Passwords do not match!");
            }
            const result = await authApi.register(username,email,password);
            return result;
        } catch (error) {
            console.log(error.message);
        }
    };
    return registerHandler;
}
export const useLogin = () => {
    const {changeAuthState} = useAuthContext(AuthContext);
    const loginHandler = async (email,password) => {
        try {
            const result = await authApi.login(email,password);
            changeAuthState(result);
            return result;
        } catch (error) {
            console.log(error.message);
        }
    }; 
    return loginHandler;
}
export const useLogout = () => {
    const {logout} = useAuthContext(AuthContext);
    const {token} = useAuthContext(AuthContext);
    const logoutHandler = async () => {
        try {
            logout();
            const result = await authApi.logout(token);
            return result;
        } catch (error) {
            console.log(error.message);
        }
    };
    return logoutHandler;
}
