import { Link } from "react-router";
export default function Register() {
    return (
        <>
         <section className="register-hero">
        <div className="container">
            <h2>Create Your Account</h2>
            <p>Join us to get the best deals on laptops, desktops, and accessories.</p>
        </div>
    </section>

    <section className="register-form">
        <div className="container">
            <form  method="POST">
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="username"  />
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <div className="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="repass"/>
                </div>
                <button type="submit" className="btn">Register</button>
                <p>Already have an account? <Link to="/auth/login">Login</Link></p>
            </form>
        </div>
    </section>
        </>
    )
}