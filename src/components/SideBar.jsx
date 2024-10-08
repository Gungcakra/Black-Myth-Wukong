import React, { useState, useEffect } from 'react';
import '../css/SideBar.css';  // CSS tambahan jika diperlukan
import logo from '../images/navLogo.png';  // Logo default
import activeLogo from '../images/navActive.png'; 

const navLinks = [
  { id: 'home-section', label: 'Home' },
  { id: 'overview-section', label: 'Overview' },
  { id: 'about-section', label: 'About' },
  { id: 'galery-section', label: 'Galery' },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home-section');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Memanggil fungsi untuk set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="sidebar fixed-top py-3">
        {navLinks.map(link => (
          <NavLink key={link.id} id={link.id} label={link.label} activeSection={activeSection} />
        ))}
      </div>      
    </>
  );
};

// NavLink component untuk setiap link sidebar
const NavLink = ({ id, label, activeSection }) => {
  const isActive = activeSection === id;

  return (
    <a href={`#${id}`} className="nav-link d-flex align-items-center mb-3" data-aos="fade-right" data-aos-delay="1100">
      <img
        src={isActive ? activeLogo : logo}
        alt="Logo"
        className="logo-img"
        style={{ width: '50px', height: '90px', marginRight: '10px', marginLeft: '50px' }}
      />
      <span className="link-text">{label}</span>
    </a>
  );
};

export default Sidebar;
