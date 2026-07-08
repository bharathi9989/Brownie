import React from "react";
import bgVideo from "../../assets/videos/bgvideo.mp4";

function HeroVideo() {
  return (
    <>
      <video
        className=" "
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
