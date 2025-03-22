import { Navigate, useParams } from "react-router-dom";

import { useAuthContext } from "../../contexts/authContext";
import techApi from "../../api/techApi.js";

export default  function Delete() {
    const { id } = useParams();
    const {userId}= useAuthContext();
    const {token}= useAuthContext();
    const deleteTech = async () => {
        await techApi.deleteOne(id,{userId}, token);
    };
    deleteTech();
    return (
        <Navigate to="/tech" />
    )
}