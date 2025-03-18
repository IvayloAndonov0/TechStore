export default function Edit() {
    return (
        <>
        <section className="edit-hero">
        <div className="container">
            <h2>Edit Product</h2>
            <p>Fill in the details below to edit a product to the catalog.</p>
        </div>
    </section>

    <section className="edit-form">
        <div className="container">
            <form  method="POST">
                <div className="form-group">
                    <label for="brand">Brand:</label>
                    <input type="text" id="brand" name="brand" />
                </div>
                <div className="form-group">
                    <label for="model">Model:</label>
                    <input type="text" id="model" name="model" />
                </div>
                <div className="form-group">
                    <label for="hard-disk">Hard Disk:</label>
                    <input type="text" id="hard-disk" name="hardDisk" />
                </div>
                <div className="form-group">
                    <label for="screen-size">Screen Size:</label>
                    <input type="text" id="screen-size" name="screenSize" />
                </div>
                <div className="form-group">
                    <label for="ram">RAM:</label>
                    <input type="text" id="ram" name="ram" />
                </div>
                <div className="form-group">
                    <label for="operating-system">Operating System:</label>
                    <input type="text" id="operating-system" name="os" />
                </div>
                <div className="form-group">
                    <label for="cpu">CPU:</label>
                    <input type="text" id="cpu" name="cpu" />
                </div>
                <div className="form-group">
                    <label for="gpu">GPU:</label>
                    <input type="text" id="gpu" name="gpu" />
                </div>
                <div className="form-group">
                    <label for="price">Price:</label>
                    <input type="text" id="price" name="price" />
                </div>
                <div className="form-group">
                    <label for="gpu">Color:</label>
                    <input type="text" id="color" name="colour" />
                </div>
                <div className="form-group">
                    <label for="gpu">Weight:</label>
                    <input type="text" id="weight" name="weight" />
                </div>
                <div className="form-group">
                    <label for="image">Image:</label>
                    <input type="text" id="image" name="imageUrl" />
                </div>
                <button type="submit" className="btn">Edit Product</button>
            </form>
        </div>
    </section>


        </>
    )
}