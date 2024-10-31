import "./ServicePage1.scss";
import image2 from "../../assets/images/images6.jpg";
import safetyIcon from "../../assets/images/safety.png";
import qualityIcon from "../../assets/images/quality.png";
import efficiencyIcon from "../../assets/images/efficiency.png";

const ServicePage1 = () => {
  return (
    <div className="service-page">
      <div className="service-header">
        <h1 className="service-title">FO Builds</h1>
        <p className="service-subtitle">
          Crafting Foundations for a Better Tomorrow
        </p>
      </div>

      <div className="service-content">
        <p className="service-description">
          At FO Builds, we specialize in innovative construction solutions that
          prioritize sustainability, efficiency, and quality. Our projects span
          residential, commercial, and industrial sectors, all designed to meet
          the highest standards.
        </p>

        
        <div className="service-items">
          <div className="service-item">
            <img
              src={image2}
              alt="Maintenance & Repair"
              className="service-image"
            />
            <h3 className="service-item-title">Maintenance & Repair</h3>
          </div>
          <div className="service-item">
            <img
              src={image2}
              alt="Building Construction"
              className="service-image"
            />
            <h3 className="service-item-title">Building Construction</h3>
          </div>
          <div className="service-item">
            <img
              src={image2}
              alt="Bridge & Road Construction"
              className="service-image"
            />
            <h3 className="service-item-title">Bridge & Road Construction</h3>
          </div>
        </div>

        
        <div className="benefits-section">
          <h2>Why Choose FO Builds?</h2>
          <div className="benefits">
            <div className="benefit">
              <img src={safetyIcon} alt="Safety" />
              <h4>Safety First</h4>
              <p>
                We prioritize safety in all our projects, ensuring a secure
                environment for workers and communities.
              </p>
            </div>
            <div className="benefit">
              <img src={qualityIcon} alt="Quality" />
              <h4>Top-notch Quality</h4>
              <p>
                Every project is executed with the highest standards of quality
                and durability.
              </p>
            </div>
            <div className="benefit">
              <img src={efficiencyIcon} alt="Efficiency" />
              <h4>Efficiency & Speed</h4>
              <p>
                We work with efficiency to deliver projects on time and within
                budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage1;
