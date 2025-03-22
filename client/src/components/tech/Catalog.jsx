import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import techApi from "../../api/techApi";

export default function Catalog() {
    const [tech, setTech] = useState([]);
    useEffect(() => {
        (async () => {
            const devices = await techApi.getAll();
            setTech(devices);
        })();
    }, []);
    return (
        <>
         <section className="catalog">
        <div className="container">
            <div className="product-grid">
                {tech.map(device => (
                    <div className="product-item" key={device._id}>
                        <img src={device.imageUrl} alt={device.brand} />
                        <h3>{device.brand} {device.model}</h3>
                        <h2>{device.price}$</h2>
                        <p>CPU: {device.cpu}</p>
                        <p>GPU: {device.gpu}</p>
                        <p>Screen: {device.screenSize}"</p>
                        <Link to={`/tech/${device._id}/details`} className="btn">View Details</Link>
                    </div>
                ))}
                
                {tech.length === 0 &&
                    <p className="no-post">There haven't been any devices posted yet.</p>
                }
            </div>
        </div>
    </section>

        </>
    )
}