import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/authContext";
import { useForm } from "../../hooks/useForm.js";
import techApi from "../../api/techApi.js";

export default function Edit() {
    const [tech, setTech] = useState({});
    const { id } = useParams();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { token } = useAuthContext();
    const { userId } = useAuthContext();


    const { values, changeHandler, submitHandler, reset } = useForm(
        {
            brand: "", model: "", hardDisk: 0, screenSize: 0, ram: 0, os: "",
            cpu: "", gpu: "", price: 0, colour: "", weight: 0, imageUrl: ""
        },
        async (formData) => {
            try {
                setError("");
                for (const [key, value] of Object.entries(formData)) {
                    if (key === "__v") {
                        continue;
                    }
                    if (!value || value === 0) {

                        setTimeout(() => setError(`Field "${key}" is required!`), 0);
                        return;
                    }
                    if (["hardDisk", "screenSize", "ram", "price", "weight"].includes(key) && isNaN(Number(value))) {
                        setTimeout(() => setError(`Field "${key}" must be a valid number!`), 0);
                        return;
                    }
                }

                await techApi.updateone(id, { ...formData, owner: userId }, token);
                navigate(`/tech/${id}/details`);
            } catch (error) {
                setTimeout(() => setError(error.message), 0);
            }
        }
    );

    useEffect(() => {
        (async () => {
            const device = await techApi.getOne(id);
            setTech(device);
            reset(device);
        })();
    }, []);

    return (
        <>
            {error && <div><div className="errorContainer"><p>{error}</p> </div></div>}
            <section className="edit-hero">
                <div className="container">
                    <h2>Edit Product</h2>
                    <p>Fill in the details below to edit a product to the catalog.</p>
                </div>
            </section>

            <section className="edit-form">
                <div className="container">
                    <form method="POST" onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="brand">Brand:</label>
                            <input type="text" id="brand" name="brand" value={values.brand} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="model">Model:</label>
                            <input type="text" id="model" name="model" value={values.model} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hard-disk">Hard Disk:</label>
                            <input type="text" id="hard-disk" name="hardDisk" value={values.hardDisk} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="screen-size">Screen Size:</label>
                            <input type="text" id="screen-size" name="screenSize" value={values.screenSize} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ram">RAM:</label>
                            <input type="text" id="ram" name="ram" value={values.ram} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="operating-system">Operating System:</label>
                            <input type="text" id="operating-system" name="os" value={values.os} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpu">CPU:</label>
                            <input type="text" id="cpu" name="cpu" value={values.cpu} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gpu">GPU:</label>
                            <input type="text" id="gpu" name="gpu" value={values.gpu} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input type="text" id="price" name="price" value={values.price} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="color">Color:</label>
                            <input type="text" id="color" name="colour" value={values.colour} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="weight">Weight:</label>
                            <input type="text" id="weight" name="weight" value={values.weight} onChange={changeHandler} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image:</label>
                            <input type="text" id="image" name="imageUrl" value={values.imageUrl} onChange={changeHandler} />
                        </div>
                        <button type="submit" className="btn">Edit Product</button>
                    </form>
                </div>
            </section>
        </>
    )
}