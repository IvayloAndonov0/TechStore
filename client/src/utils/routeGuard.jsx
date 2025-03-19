import { Navigate } from "react-router";
import { useAuthContext } from "../contexts/authContext";


export const PrivateRoute = ({children }) => {
    const { isAuthenticated } = useAuthContext();
    return isAuthenticated ? children : <Navigate to="/auth/login" />;
}
