import { Link } from "react-router";
export default function NotFound() {
  return (
    <>
          <section className="error-hero">
        <div className="container">
            <h2>404 - Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="btn">Go to Home Page</Link>
        </div>
    </section>

    </>
  )
}