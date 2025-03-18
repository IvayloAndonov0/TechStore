import { Link } from "react-router";
export default function Login() {
    return (
        <>
        <section className="login-hero">
        <div className="container">
            <h2>Login to Your Account</h2>
            <p>Access your order history, track orders, and more.</p>
        </div>
    </section>

    <section className="login-form">
        <div className="container">
            <form  method="POST">
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email"  />
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <button type="submit" className="btn">Login</button>
                <p>Don't have an account? <Link to="/auth/register">Register</Link></p>
            </form>
        </div>
    </section>
        </>
    )
}