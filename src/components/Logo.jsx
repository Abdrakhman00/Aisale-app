import React from 'react'
import './logo.css'
import logo from '../vectors/vector_1_x2.png'

function Logo() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <a href="/" className="logo d-flex align-items-center">
        <img src={logo} alt="Company Logo" width="30" height="30" />
        <span className="d-none d-lg-block">Aisale.kz</span>
      </a>
      <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSideBar}
      ></i>
    </div>
  );
}

export default Logo;
