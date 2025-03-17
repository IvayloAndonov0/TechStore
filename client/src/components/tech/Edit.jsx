export default function Edit() {
    return (
        <>
        <section class="edit-hero">
        <div class="container">
            <h2>Edit Product</h2>
            <p>Fill in the details below to edit a product to the catalog.</p>
        </div>
    </section>

    <section class="edit-form">
        <div class="container">
            <form  method="POST">
                <div class="form-group">
                    <label for="brand">Brand:</label>
                    <input type="text" id="brand" name="brand" value=""/>
                </div>
                <div class="form-group">
                    <label for="model">Model:</label>
                    <input type="text" id="model" name="model" value=""/>
                </div>
                <div class="form-group">
                    <label for="hard-disk">Hard Disk:</label>
                    <input type="text" id="hard-disk" name="hardDisk" value=""/>
                </div>
                <div class="form-group">
                    <label for="screen-size">Screen Size:</label>
                    <input type="text" id="screen-size" name="screenSize" value=""/>
                </div>
                <div class="form-group">
                    <label for="ram">RAM:</label>
                    <input type="text" id="ram" name="ram" value=""/>
                </div>
                <div class="form-group">
                    <label for="operating-system">Operating System:</label>
                    <input type="text" id="operating-system" name="os" value=""/>
                </div>
                <div class="form-group">
                    <label for="cpu">CPU:</label>
                    <input type="text" id="cpu" name="cpu" value=""/>
                </div>
                <div class="form-group">
                    <label for="gpu">GPU:</label>
                    <input type="text" id="gpu" name="gpu" value=""/>
                </div>
                <div class="form-group">
                    <label for="price">Price:</label>
                    <input type="text" id="price" name="price" value=""/>
                </div>
                <div class="form-group">
                    <label for="gpu">Color:</label>
                    <input type="text" id="color" name="colour" value=""/>
                </div>
                <div class="form-group">
                    <label for="gpu">Weight:</label>
                    <input type="text" id="weight" name="weight" value=""/>
                </div>
                <div class="form-group">
                    <label for="image">Image:</label>
                    <input type="text" id="image" name="imageUrl" value=""/>
                </div>
                <button type="submit" class="btn">Edit Product</button>
            </form>
        </div>
    </section>


        </>
    )
}