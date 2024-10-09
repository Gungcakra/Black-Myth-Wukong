import React, { useState, useEffect } from 'react';
import '../css/Home.css'
import logoBlack from "../images/logo.png"
import AOS from 'aos';
import btnOverview from "../images/btnOverview.png"
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
      <div className="container-fluid" style={{ height:'100vh' }}>
        <div className="row d-flex justify-content-center" style={{ height:'50%' }}>

            <img className="logo" src={logoBlack} alt="" data-aos="fade-in" data-aos-delay="1500"/>
        </div>
            <div className="col d-flex flex-column justify-content-end align-items-center overview-btn-group" style={{ height:'50%' }}>
              <div className="row">
              <h3 className="text-center overview-btn-title">Overview</h3>
              <a href="#overview-section" className='text-center overview-btn'>
              <img src={btnOverview} alt="" className='mb-5' width={'100rem'}/>

              </a>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
