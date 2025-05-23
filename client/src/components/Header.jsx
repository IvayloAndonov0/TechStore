import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
export default function Header() {
    const { isAuthenticated } = useAuthContext();
    
    return (
        <>
            <header>
                <div className="container">
                    <h1>TechStore</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/tech">Catalog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            {isAuthenticated && (
                                <>
                                    <li><Link to="/tech/create">Create Offer</Link></li>
                                    <li><Link to="/auth/logout">Logout</Link></li>
                                    <li><Link to="/profile">Profile</Link></li>
                                </>
                            )} 
                            {!isAuthenticated && (
                                <>
                                    <li><Link to="/auth/login">Login</Link></li>
                                    <li><Link to="/auth/register">Register</Link></li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}