import React from 'react';

class Navbar extends React.Component {
  state = {
    menuToggle: false
  }

  render() {
    return (
      <div>
        <nav id="navbar" className="">
          <div className="nav-wrapper">
            {/* Navbar Logo */}
            <div className="logo">
              {/* Logo Placeholder for Illustration */}
              <a href="#home" style={{ color: 'black', textDecoration: 'none' }}> DreamCatcher</a>
            </div>

            {/* Navbar Links */}
            <ul id="menu" style={{fontSize: '25px'}}>
              <li><a href="/home">Home</a></li>
              <li><a href="#dreams">Dreams</a></li>
              <li><a href="#mentors">Mentors</a></li>
              <li><a href="/register">Sign up</a></li>
              <li><a href="/login">Log in </a></li>
            </ul>
          </div>
        </nav>

        {/* Menu Icon */}
        <div className="menuIcon">
          <span className="icon icon-bars"></span>
          <span className="icon icon-bars overlay"></span>
        </div>

        <div className="overlay-menu">
          <ul id="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;