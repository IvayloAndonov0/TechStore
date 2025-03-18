import authApi from "../api/authApi.js";

export const useRegister = () => {
    const registerHandler = async (username,email,password,repass) => {
        try {
            const result = await authApi.register(email,password);
            console.log(result);
            
        } catch (error) {
            
        }
    };
    return registerHandler;
}