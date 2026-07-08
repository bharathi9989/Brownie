import React from "react";
import HeroVideo from "./HeroVideo";
import HeroOverlay from "./HeroOverlay";
import NavBar from "../NavBar/NavBar";

function Hero() {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <HeroVideo />
        <HeroOverlay />
        <div className="absolute inset-0 bg-black/60 z-10">
          <NavBar />
        </div>
      </section>
    </>
  );
}

export default Hero;
