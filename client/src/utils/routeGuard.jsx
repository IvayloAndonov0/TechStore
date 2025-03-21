import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";


export const PrivateRoute = ({children }) => {
    const { isAuthenticated } = useAuthContext();
    
    return isAuthenticated ? children : <Navigate to="/auth/login" replace/>;
}
export const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Navigate to="/" replace /> : children;
};