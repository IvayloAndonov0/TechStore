import { useEffect, useState } from "react";
import { Link } from "react-router";

import techApi from "../api/techApi.js";
export default function Home() {
    const [tech, setTech] = useState([]);
    useEffect(() => {
        (async () => {
            const devices = await techApi.getLatest();
            setTech(devices);
        })();
    }, []);
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
                        {tech.length > 0 && tech.map((t, i) => (
                            <div className="product-item" key={i}>
                                <img src={t.imageUrl} />
                                <h3>{t.brand} {t.model}</h3>
                                <p>${t.price}</p>
                                <Link to={`/tech/${t._id}/details`} className="btn">View Details</Link>
                            </div>
                        ))}
                        {tech.length === 0 && <p className="no-post">There haven't been any devices posted yet.</p>}

                    </div>
                </div>


            </section>
        </>
    )
}