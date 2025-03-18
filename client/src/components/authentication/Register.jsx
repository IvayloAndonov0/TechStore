import { Link, useNavigate } from "react-router";
import { useForm } from "../../hooks/useForm.js";
import { useRegister } from "../../hooks/useAuth.js";
import { useState } from "react";
export default function Register() {
    const [error, setError] = useState("");
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
    const navigate = useNavigate();
    const register = useRegister();
    const {values,changeHandler,submitHandler} = useForm({username:"",email: "",password: "",repass:""},
        ({email,password,username,repass})=>{
            try {
                setError("");
                if(username==""||email==""||password==""||repass==""){
                    setTimeout(() => setError("All fields are required!"), 0);
                    return;
                }
                if (!emailRegEx.test(email)) {
                    setTimeout(() => setError("Invalid email format!"), 0);
                    return;
                  }
                if(password !== repass){
                    setTimeout(() => setError("Passwords do not match!"), 0);
                    return;
                }
                register(username,email,password,repass);
                navigate("/auth/login");
            } catch (error) {
                setError(error.message);
            }
    });

    return (
        <>
        {error && <div><div className="errorContainer"><p>{error}</p> </div></div>}
         <section className="register-hero">
        <div className="container">
            <h2>Create Your Account</h2>
            <p>Join us to get the best deals on laptops, desktops, and accessories.</p>
        </div>
    </section>

    <section className="register-form">
        <div className="container">
            <form  method="POST" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="username" value={values.username} onChange={changeHandler}  />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={values.email} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={values.password} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="repass" value={values.repass} onChange={changeHandler}/>
                </div>
                <button type="submit" className="btn">Register</button>
                <p>Already have an account? <Link to="/auth/login">Login</Link></p>
            </form>
        </div>
    </section>
        </>
    )
}