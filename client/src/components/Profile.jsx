import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import { useEffect, useState } from "react";
import techApi from "../api/techApi";
export default function Profile() {
    const [createdTech,setCreatedTech] = useState([]);
    const[preferedTech,setPreferedTech] = useState([]);
    const {username} = useAuthContext();
    const {email} = useAuthContext();
    const {userId} = useAuthContext();
     useEffect(() => {
                (async () => {
                    const device = await techApi.getCreated({userId});
                    const prefered = await techApi.getPrefered({userId});   
                    setCreatedTech(device.created); 
                    setPreferedTech(prefered.prefered)  
                })();
            }, []);
    return (
        <>
         <section className="profile-hero">
        <div className="container">
            <h2>User Profile</h2>
            <p>Welcome back, {username} <span id="username"></span>({email}) <strong id="email"></strong></p>
        </div>
    </section>

    <section className="created-laptops">
        <div className="container">
            <h3>Created Laptops</h3>
            <div className="laptop-list">
            {createdTech.map(device => (
                     <div className="laptop-item" key={device._id}>
                     <img src={device.imageUrl} alt="Laptop"/>
                     <p><strong>Brand: {device.brand}</strong> </p>
                     <p><strong>Model: {device.model}</strong> </p>
                     <Link to={`/tech/${device._id}/details`} className="btn">View Details</Link>
                 </div>
                ))}
                {createdTech.length === 0 && <p className="no-post">You haven't created a post yet</p>}
                
            </div>
        </div>
    </section>

    <section className="preferred-laptops">
        <div className="container">
            <h3>Preferred Laptops</h3>
            <div className="laptop-list">
                {preferedTech.map(device => (

                <div className="laptop-item" key={device._id}>
                    <img src={device.imageUrl} alt="Laptop"/>
                    <p><strong>Brand: {device.brand}</strong> </p>
                    <p><strong>Model: {device.model}</strong> </p>
                    <Link to={`/tech/${device._id}/details`} className="btn">View Details</Link>
                </div>
                ))}
               
                {preferedTech.length === 0 && <p className="no-post">You haven't preferred any devices yet</p>}
              
            </div>

        </div>
    </section>

        </>
    )
}