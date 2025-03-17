export default function Login() {
    return (
        <>
        <section class="login-hero">
        <div class="container">
            <h2>Login to Your Account</h2>
            <p>Access your order history, track orders, and more.</p>
        </div>
    </section>

    <section class="login-form">
        <div class="container">
            <form  method="POST">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" value="" />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"/>
                </div>
                <button type="submit" class="btn">Login</button>
                <p>Don't have an account? <a href="/auth/register">Register</a></p>
            </form>
        </div>
    </section>
        </>
    )
}