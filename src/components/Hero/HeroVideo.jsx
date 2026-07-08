import React from "react";
import bgVideo from "../../assets/videos/bgvideo.mp4";

function HeroVideo() {
  return (
    <>
      <video
        className="absolute inset-0 h-full w-full object-cover "
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </>
  );
}

export default HeroVideo;
