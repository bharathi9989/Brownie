import React from "react";
import bgVideo from "../../assets/videos/bgvideo.mp4";

function HeroVideo() {
  return (
    <>
      <video
        className="absolute insert-0 h-full w-full"
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
