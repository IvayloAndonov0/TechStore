import requester from "../utils/requester.js";

const baseUrl = 'http://localhost:5000/auth';

export default {
    register(username,email, password) {
        const result = requester.post(baseUrl+`/register`,{username,email,password});
        return result;
    },
    login(email, password) {
        const result = requester.post(baseUrl+`/login`,{email,password});
        return result;
    },
    logout(token){
        const result = requester.post(baseUrl+`/logout`,null,token);
        return result;
    }
}