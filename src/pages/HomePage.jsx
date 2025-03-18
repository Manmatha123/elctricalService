import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const HomePage = () => {
    const services = [
        { title: "Lighting Upgrades", description: "Lighting upgrades refer to the installation or replacement of lighting fixtures...", icon: "💡" },
        { title: "Electric Installation", description: "Lighting upgrades refer to the installation or replacement of lighting fixtures...", icon: "⚡" },
        { title: "Electrical Panels", description: "Lighting upgrades refer to the installation or replacement of lighting fixtures...", icon: "🔌" },
        { title: "Electrical Maintenance", description: "Lighting upgrades refer to the installation or replacement of lighting fixtures...", icon: "🛠️" },
        { title: "Safety Inspections", description: "Lighting upgrades refer to the installation or replacement of lighting fixtures...", icon: "✅" },
        { title: "Heating Service", description: "Lighting upgrades refer to the installation or replacement of lighting fixtures...", icon: "🔥" }
      ];
      
    return (

        <div className="home-page-container">
            <Navbar />
        <header className="hero-section">
          <div className="hero-content">
            <h1>Need any help? We are ready for you</h1>
            <p>
              At our service, we provide professional electrical solutions ensuring
              safety and efficiency.
            </p>
           
          </div>
        </header>
        <section className="services-section">
          <h2>We Are The Professional Electrical Service</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {/* <a href="#">Read More →</a> */}
              </div>
            ))}
          </div>
        </section>
        <Footer/>
      </div>
    );
};

export default HomePage;