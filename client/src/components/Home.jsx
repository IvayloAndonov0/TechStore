import { Link } from "react-router";
export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h2>Your One-Stop Shop for Laptops and Computers</h2>
                    <p>Find the best deals on the latest laptops, desktops, and accessories.</p>
                    <Link to="/tech" className="btn">Shop Now</Link>
                </div>
            </section>

            <section className="products">
                <div className="container">
                    <h2>Featured Products</h2>
                    <div className="product-grid">

                        <div className="product-item">
                            <img src="" />
                            <h3></h3>
                            <p></p>
                            <Link to="" className="btn">View Details</Link>
                        </div>

                        <p className="no-post">There haven't been any devices posted yet.</p>

                    </div>
                </div>


            </section>
        </>
    )
}