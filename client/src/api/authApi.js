import requester from "../utils/requester.js";

const baseUrl = 'http://localhost:5000/auth';

export default {
    register(username,email, password) {
        const result = requester.post(baseUrl+`/register`,{username,email,password});
        return result;
    },
}