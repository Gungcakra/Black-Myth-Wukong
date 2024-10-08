import React from 'react';
import "../css/NavBar.css";

const navLinks = [
  { id: 'home-section', label: 'Home' },
  { id: 'overview-section', label: 'Overview' },
  { id: 'section3', label: 'Services' },
  { id: 'section4', label: 'Contact' },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-center w-100" href="#">Black Myth Wukong</a>
        <button className="navbar-toggler position-absolute end-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map(link => (
              <li className="nav-item" key={link.id}>
                <a href={`#${link.id}`} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
