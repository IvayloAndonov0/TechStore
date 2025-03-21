import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth.js";

export default async function Logout() {
    const navigate = useNavigate();
    const logout = useLogout();
    await logout();
    return navigate("/");
}