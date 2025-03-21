import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                <div>
                    <img src="/logo.png" alt="ApnaPG Logo" style={{ width: "40px", height: "40px" }} />
                    <Link to="/" style={{ margin: "0 10px", fontWeight: "bold" }}>Home</Link>
                    <Link to="/about" style={{ margin: "0 10px" }}>About Us</Link>
                    <Link to="/contact" style={{ margin: "0 10px" }}>Contact Us</Link>
                </div>
                <div>
                    <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>
                    <Link to="/guest" style={{ margin: "0 10px" }}>Guest</Link>
                    <Link to="/owner/home" style={{ margin: "0 10px" }}>Owner</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header style={{ textAlign: "center", padding: "50px", backgroundColor: "#eef" }}>
                <h1 style={{ color: "#0044cc", fontSize: "28px" }}>Your Comfort is Our Top Priority</h1>
                <p style={{ marginTop: "10px", fontSize: "18px" }}>Find Your Perfect PG Accommodation</p>
                <div style={{ marginTop: "20px" }}>
                    <input type="text" placeholder="Search for locality" style={{ padding: "8px", width: "250px", marginRight: "10px" }} />
                    <button style={{ padding: "8px 15px", backgroundColor: "#0044cc", color: "#fff", border: "none", cursor: "pointer" }}>Search</button>
                </div>
            </header>

            {/* Features Section */}
            <section style={{ display: "flex", justifyContent: "space-around", padding: "40px 20px", backgroundColor: "#fff" }}>
                <div style={{ textAlign: "center", width: "30%" }}>
                    <img src="/property.png" alt="Property Listing" style={{ width: "60px", height: "60px" }} />
                    <h2 style={{ fontSize: "18px", marginTop: "10px" }}>Easy Property Listing</h2>
                    <p>Owners can effortlessly list properties and manage bookings.</p>
                </div>
                <div style={{ textAlign: "center", width: "30%" }}>
                    <img src="/booking.png" alt="Room Booking" style={{ width: "60px", height: "60px" }} />
                    <h2 style={{ fontSize: "18px", marginTop: "10px" }}>Convenient Room Booking</h2>
                    <p>Guests can browse and book rooms with ease.</p>
                </div>
                <div style={{ textAlign: "center", width: "30%" }}>
                    <img src="/payment.png" alt="Secure Payment" style={{ width: "60px", height: "60px" }} />
                    <h2 style={{ fontSize: "18px", marginTop: "10px" }}>Secure Payment</h2>
                    <p>Experience secure transactions for seamless bookings.</p>
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ padding: "40px 20px", backgroundColor: "#f9f9f9", textAlign: "center" }}>
                <h2 style={{ fontSize: "22px" }}>What Our Customers Say</h2>
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                    <div style={{ border: "1px solid #ddd", padding: "10px", width: "30%" }}>“PG Management made it easy to find a room that fit my budget.” - Guest 1</div>
                    <div style={{ border: "1px solid #ddd", padding: "10px", width: "30%" }}>“Listing my property was quick and straightforward.” - Owner 1</div>
                    <div style={{ border: "1px solid #ddd", padding: "10px", width: "30%" }}>“Secure payment made me feel confident when booking.” - Guest 2</div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#222", color: "white" }}>
                <p>Copyright  2025. ApnaPG</p>
            </footer>
        </div>
    );
};

export default Home;