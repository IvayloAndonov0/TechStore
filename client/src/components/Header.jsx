export default function Header() {
    return (
        <>
            <header>
                <div class="container">
                    <h1>TechStore</h1>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/catalog">Catalog</a></li>
                            <li><a href="/about">About</a></li>

                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/device/create">Create Offer</a></li>
                            <li><a href="/auth/logout">Logout</a></li>

                            <li><a href="/auth/login">Login</a></li>
                            <li><a href="/auth/register">Register</a></li>

                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}