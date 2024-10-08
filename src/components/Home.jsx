import React, { useState, useEffect } from 'react';
import '../css/Home.css'
import logoBlack from "../images/logo.png"
import AOS from 'aos';
function Home() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  useEffect(() => {
    // Timer untuk menghilangkan overlay setelah 2 detik
    const timer = setTimeout(() => {
      setIsOverlayVisible(false);
    }, 2000);

    // Membersihkan timer saat component di-unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);
  return (
    <>
      <section id="home-section" className="home-section container-fluid">
      {isOverlayVisible && <div className="overlay"></div>}
        <div className="row d-flex justify-content-center">
            <img className="logo" src={logoBlack} alt="" data-aos="fade-up" data-aos-delay="1500"/>
        </div>
      </section>
    </>
  )
}

export default Home
