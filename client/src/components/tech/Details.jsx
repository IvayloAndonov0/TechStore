export default function Details() {
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
                    <img src="" alt=""/>
                </div>
                <div className="product-info">
                    <h3>Brand: </h3>
                    <p><strong>Model:</strong> </p>
                    <p><strong>Hard Disk:</strong> </p>
                    <p><strong>Screen Size:</strong> </p>
                    <p><strong>RAM:</strong> </p>
                    <p><strong>Operating System:</strong> </p>
                    <p><strong>CPU:</strong> </p>
                    <p><strong>GPU:</strong> </p>
                    <p><strong>Price:</strong> $</p>
                    <p><strong>Color:</strong> </p>
                    <p><strong>Weight:</strong> </p>
                </div>
            </div>
     
            <div className="product-actions">

                <button className="btn edit"><Link to="">Edit</Link></button>
                <button className="btn delete"><Link to="">Delete</Link></button>

                    <p className="prefer-message">You've already preferred this device</p>

                <button className="btn prefer"><Link to=""Prefer></Link></button>

            </div>
          
        </div>
    </section>
        </>
    )
}
