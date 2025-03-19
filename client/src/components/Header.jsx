import { Link } from "react-router";
import { useAuthContext } from "../contexts/authContext";
export default function Header() {
    const { isAuthenticated } = useAuthContext();
    console.log(isAuthenticated);
    
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
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><Link to="/tech/create">Create Offer</Link></li>
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