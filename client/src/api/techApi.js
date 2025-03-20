import requester from "../utils/requester.js"
const baseUrl = `http://localhost:5000/tech`
export default {
    async create(data,token){
        const tech = await requester.post(baseUrl+`/create`,data,token)
    }
}