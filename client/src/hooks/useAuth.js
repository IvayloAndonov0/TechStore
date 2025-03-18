import authApi from "../api/authApi.js";

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
    const loginHandler = async (email,password) => {
        try {
            const result = await authApi.login(email,password);
            return result;
        } catch (error) {
            console.log(error.message);
        }
    };
    return loginHandler;
}