import React from 'react';
import '../css/Overview2.css';
import overviewViedeo from "../videos/overview-video2.mp4"
function OverView22() {
  return (
    
    <section id="overview-section" className="overview2-section container-fluid">
      <div className="overview2-info container-fluid d-flex justify-content-center align-items-center" style={{ width:'100%',height: '100vh' }}>
        <div className="col colkiri2">
            
        </div>
        <div className="col colkanan2">
        <h1 className="overview2-title">VAST VARIATION</h1>
            <p className="overview2-desc">
            Combine your <span>Spells and Abilities</span> for maximum impact. Tailor your Talents to fit your unique playstyle. Unleash your full potential and dominate the <span>Battlefield!</span>
            </p>
            <video className="overview2-video"
        autoPlay
        loop
        muted 
      >
        <source src={overviewViedeo} type="video/mp4"  />
      </video>
        </div>
      </div>
    </section>
  );
}

export default OverView22;
