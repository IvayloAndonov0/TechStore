export default function Details() {
    return (
        <>
         <section class="details-hero">
        <div class="container">
            <h2>Laptop Details</h2>
        </div>
    </section>

    <section class="details-content">
        <div class="container">
            <div class="product-details">
                <div class="product-image">
                    <img src="" alt=""/>
                </div>
                <div class="product-info">
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
     
            <div class="product-actions">

                <button class="btn edit"><a href="">Edit</a></button>
                <button class="btn delete"><a href="">Delete</a></button>

                    <p class="prefer-message">You've already preferred this device</p>

                <button class="btn prefer"><a href="">Prefer</a></button>

            </div>
          
        </div>
    </section>
        </>
    )
}
