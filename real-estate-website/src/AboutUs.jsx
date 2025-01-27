import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us">
      <header className="header">
        <div className="header-left">
          <img src="/logo.jpg" alt="Logo" className="logo" />
        </div>
        <div className="header-center">
          <h1>About Us</h1>
        </div>
        <div className="header-right">
          <button className="menu-button">&#9776;</button>
        </div>
      </header>
      <section className="about-content">
        <h2>Welcome to Homebreeze Living</h2>
        <p>
          At Homebreeze Living, we are dedicated to providing the best living
          experience for our residents. Our communities are designed to offer
          comfort, convenience, and a sense of belonging. We believe in creating
          spaces where people can thrive and feel at home.
        </p>
        <p>
          Our team is committed to maintaining high standards of quality and
          service. We work tirelessly to ensure that our communities are well-maintained
          and that our residents have everything they need to live comfortably.
        </p>
        <p>
          Thank you for choosing Homebreeze Living. We look forward to welcoming
          you to our community.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
