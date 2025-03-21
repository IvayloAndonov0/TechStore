import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import techApi from "../../api/techApi";
import { useAuthContext } from "../../contexts/authContext";

export default function Details() {
    const {id} = useParams();
    const {userId} = useAuthContext();
     const [tech, setTech] = useState([]);
        useEffect(() => {
            (async () => {
                const device = await techApi.getOne(id);
                setTech(device);   
            })();
        }, []);
    return (
        <>
         <section className="details-hero">
        <div className="container">
            <h2>Laptop Details</h2>
        </div>
    </section>

    <section className="details-content">
        <div className="container">
            <div className="product-details">
                <div className="product-image">
                    <img src={tech.imageUrl} alt={tech.brand}/>
                </div>
                <div className="product-info">
                    <h3>Brand: {tech.brand}</h3>
                    <p><strong>Model: {tech.model}</strong> </p>
                    <p><strong>Hard Disk: {tech.hardDisk} GB</strong> </p>
                    <p><strong>Screen Size: {tech.screenSize}"</strong> </p>
                    <p><strong>RAM: {tech.ram} GB</strong> </p>
                    <p><strong>Operating System: {tech.os}</strong> </p>
                    <p><strong>CPU: {tech.cpu}</strong> </p>
                    <p><strong>GPU: {tech.gpu}</strong> </p>
                    <p><strong>Price: {tech.price} лв </strong>  </p>
                    <p><strong>Color: {tech.colour}</strong> </p>
                    <p><strong>Weight: {tech.weight} g</strong> </p>
                </div>
            </div>
     
            <div className="product-actions">
                {userId ? (
                    userId === tech.owner ? (
                        <>
                            <button className="btn edit"><Link to={`/tech/${tech._id}/edit`}>Edit</Link></button>
                            <button className="btn delete"><Link to={`/tech/${tech._id}/delete`}>Delete</Link></button>
                        </>
                    ) : (
                        <>
                            <p className="prefer-message">You've already preferred this device</p>
                            <button className="btn prefer"><Link to={`/prefer/${tech._idid}`}>Prefer</Link></button>
                        </>
                    )
                ) : null}
            </div>
          
        </div>
    </section>
        </>
    )
}
