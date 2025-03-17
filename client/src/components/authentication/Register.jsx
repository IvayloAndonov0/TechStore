export default function Register() {
    return (
        <>
         <section class="register-hero">
        <div class="container">
            <h2>Create Your Account</h2>
            <p>Join us to get the best deals on laptops, desktops, and accessories.</p>
        </div>
    </section>

    <section class="register-form">
        <div class="container">
            <form  method="POST">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="username" value="" />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value=""/>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="repass"/>
                </div>
                <button type="submit" class="btn">Register</button>
                <p>Already have an account? <a href="/auth/login">Login</a></p>
            </form>
        </div>
    </section>
        </>
    )
}