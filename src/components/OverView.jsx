import React from 'react';
import '../css/Overview.css';
import overviewViedeo from "../videos/overview-video.mp4"
function OverView() {
  return (
    
    <section id="overview-section" className="overview-section container-fluid">
      <div className="overview-info container-fluid d-flex justify-content-center align-items-center" style={{ width:'100%',height: '100vh' }}>
        <div className="col colkiri">
            <h1 className="overview-title">DIVERSE LEVELS</h1>
            <p className="overview-desc">
              Explore a Land of Vast Wonders and Unimaginable Perils. Relive the legendary tale of <span>Journey to the West</span>, where every step rewrites the fate of a mythical legend.
            </p>
            <video className="overview-video"
        autoPlay
        loop
        muted 
      >
        <source src={overviewViedeo} type="video/mp4"  />
      </video>
        </div>
        <div className="col colkanan"></div>
      </div>
    </section>
  );
}

export default OverView;
