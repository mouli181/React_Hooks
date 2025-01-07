import React from 'react'
import "../styles/dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <button className="menu-button">☰ Options</button>
      <div className="dropdown">
        <ul>
          <li><a href="#">Login/Register</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#">Rewards</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
