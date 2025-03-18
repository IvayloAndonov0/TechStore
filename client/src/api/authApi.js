import requester from "../utils/requester.js";

const baseUrl = 'http://localhost:5000/auth';

export default {
    register(email, password) {
        const result = requester.post(baseUrl+`/register`,{email,password});
        return result;
    }
}