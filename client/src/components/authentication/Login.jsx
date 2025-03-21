import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth.js";
import { useState } from "react";
import { useForm } from "../../hooks/useForm.js";
export default function Login() {
    const [error, setError] = useState("");
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

    const login = useLogin();
    const navigate = useNavigate();
    const {values,changeHandler,submitHandler} = useForm({email: "",password: ""},
            async({email,password})=>{
                try {
                    setError("");
                    if(email==""||password==""){
                        setTimeout(() => setError("All fields are required!"), 0);
                        return;
                    }
                    if (!emailRegEx.test(email)) {
                        setTimeout(() => setError("Invalid email format!"), 0);
                        return;
                      }
                    const data = await login(email,password);
                    if(data.hasOwnProperty("error")){
                        setTimeout(() => setError(data.error), 0);
                        return;
                    }
                    navigate("/");
                } catch (error) {
                    ssetTimeout(() => setError(error.message), 0);
                }
        });
    return (
        <>
        {error && <div><div className="errorContainer"><p>{error}</p> </div></div>}
        <section className="login-hero">
        <div className="container">
            <h2>Login to Your Account</h2>
            <p>Access your order history, track orders, and more.</p>
        </div>
    </section>

    <section className="login-form">
        <div className="container">
            <form  method="POST" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={values.email} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={values.password} onChange={changeHandler} />
                </div>
                <button type="submit" className="btn">Login</button>
                <p>Don't have an account? <Link to="/auth/register">Register</Link></p>
            </form>
        </div>
    </section>
        </>
    )
}