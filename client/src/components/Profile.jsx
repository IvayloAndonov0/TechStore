import { Link } from "react-router";
export default function Profile() {
    return (
        <>
         <section className="profile-hero">
        <div className="container">
            <h2>User Profile</h2>
            <p>Welcome back, <span id="username"></span> <strong id="email"></strong></p>
        </div>
    </section>

    <section className="created-laptops">
        <div className="container">
            <h3>Created Laptops</h3>
            <div className="laptop-list">
                
                <div className="laptop-item">
                    <img src="" alt="Laptop"/>
                    <p><strong>Brand:</strong> </p>
                    <p><strong>Model:</strong> </p>
                    <Link to="" className="btn">View Details</Link>
                </div>
                <p className="no-post">You haven't created a post yet</p>
                
            </div>
        </div>
    </section>

    <section className="preferred-laptops">
        <div className="container">
            <h3>Preferred Laptops</h3>
            <div className="laptop-list">
                
                <div className="laptop-item">
                    <img src=""alt="Laptop"/>
                    <p><strong>Brand:</strong> </p>
                    <p><strong>Model:</strong> </p>
                    <Link to="" className="btn">View Details</Link>
                </div>
               
                <p className="no-post">You haven't preferred any devices yet</p>
              
            </div>

        </div>
    </section>

        </>
    )
}