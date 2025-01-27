import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="header-left">
          <img src="/logo.jpg" alt="Logo" className="logo" />
        </div>
        <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#properties">Properties</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Image Section */}
      <div className="image-section">
        <img src="/1.jpg" alt="Main" className="main-image" />
        <img src="/2.png" alt="Secondary" className="secondary-image" />
        <img src="/3.png" alt="Tertiary" className="tertiary-image" />
      </div>



      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; 2023 Homebreeze Living. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
