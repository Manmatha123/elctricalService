import React from 'react';
import '../styles/Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const HomePage = () => {
  const services = [
    { 
        title: "Solar PV Installer", 
        description: "Harness the power of the sun with our government-certified solar panel installation services. Reliable, efficient, and eco-friendly solutions for your energy needs.", 
        icon: "💡" 
    },
    { 
        title: "CCTV and IP Camera Installation", 
        description: "Secure your home or business with our advanced CCTV and IP camera installation services. Stay protected with cutting-edge surveillance technology.", 
        icon: "📷" 
    },
    { 
        title: "House Wiring", 
        description: "Upgrade your home with modern electrical wiring, interior lighting, and sensor-based lighting solutions. Safe, efficient, and aesthetically pleasing.", 
        icon: "🔌" 
    },
    { 
        title: "Electrical Maintenance", 
        description: "Keep your electrical systems running smoothly with our expert maintenance services. From lighting upgrades to troubleshooting, we’ve got you covered.", 
        icon: "🛠️" 
    },
    { 
        title: "Safety Inspections", 
        description: "Ensure the safety of your property with our comprehensive electrical safety inspections. Prevent hazards and stay compliant with regulations.", 
        icon: "✅" 
    },
    { 
        title: "Video Door Phone & Biometric Systems", 
        description: "Enhance your security with our video door phone and biometric system installations. Convenient, modern, and secure access control solutions.", 
        icon: "📷" 
    }
];
      
    return (
<>

            <Navbar />
        <div className="home-page-container">
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
      </>
    );
};

export default HomePage;