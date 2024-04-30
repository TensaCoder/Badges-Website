import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import logo from ".//logo_dc.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Your logo component or image */}
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="/searchbadges">Verify Badge</a></li>
          <li><a href="#">Obtain Badge</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
