import { Navigate} from "react-router-dom";
import { useLogout } from "../../hooks/useAuth.js";

export default async function Logout() {
    const logout = useLogout();
    await logout();
    return (<Navigate to="/" />)
}