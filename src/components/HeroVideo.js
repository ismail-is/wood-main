import Link from "next/link";
import React, { useState, useRef } from "react";

const HeroVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      // Toggle muted state
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section className="banner-section" style={{ position: "relative", minHeight: "120vh", display: "flex", alignItems: "center", padding: "150px 0", overflow: "hidden" }}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src="/assets/vedio/woodprism.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for better text readability */}
      <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1
      }}></div>

      {/* Audio Toggle Button */}
      <button 
        onClick={toggleMute}
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          zIndex: 3,
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(5px)",
          border: "2px solid white",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          color: "white",
          fontSize: "20px",
          transition: "all 0.3s ease"
        }}
        title={isMuted ? "Unmute" : "Mute"}
      >
        <i className={isMuted ? "fas fa-volume-mute" : "fas fa-volume-up"} />
      </button>

      {/* <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-8">
            <div className="hero-content">
              <h1 data-animation="fadeInDown" data-delay=".5s" style={{ color: "white", fontSize: "4rem", fontWeight: "bold" }}>
                Feel The Fine Touch
              </h1>
              
              <h4 style={{ color: "white", marginTop: "20px" }}> 
                Furniture Fabrication & Reconditioning
              </h4>
              <br/>
              <div
                className="hero-button mb-30"
                data-animation="fadeInDown"
                data-delay=".6s"
                style={{ marginTop: "30px" }}
              >
                <Link legacyBehavior href="/about">
                  <a className="main-btn golden-btn mb-10 mr-10" style={{ marginRight: '10px' }}>
                    Explore More
                  </a>
                </Link>
                <Link legacyBehavior href="/contact">
                  <a className="main-btn filled-btn filled-white mb-10">
                   Contact Us 
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroVideo;

