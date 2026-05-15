import React, { useRef } from "react";
import hero from "../assets/hero.mp4";

function HeroVideo() {
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.paused ? video.play() : video.pause();
  };

  return (
    <div className="hero-video">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video-player"
      >
        <source src={hero} type="video/mp4" />
      </video>


      <div className="playbut" onClick={togglePlay}>
        ▶
      </div>
    </div>
  );
}

export default HeroVideo;