import requester from "../utils/requester.js"
const baseUrl = `http://localhost:5000/tech`
export default {
    async create(data,token){
        const tech = await requester.post(baseUrl+`/create`,data,token)
    },
    async getLatest(){
        const tech = await requester.get(baseUrl+`/latest`)
        return tech;
    },
    getOne(id){
        return requester.get(baseUrl+`/${id}/details`)
    },
    async getAll(){
        return requester.get(baseUrl+`/all`)
    },
    updateone(id,data,token){
        return requester.post(baseUrl+`/${id}/edit`,data,token)
    },
    deleteOne(id,userId,token){
        return requester.post(baseUrl+`/${id}/delete`,userId,token)
    },
    getCreated(userId,token){
        return requester.post(baseUrl+`/created`,userId,token);
    },
    preferOne(id,userId,token){
        return requester.post(baseUrl+`/${id}/prefer`,userId,token)
    }
}