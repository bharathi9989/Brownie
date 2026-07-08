import React from "react";
import HeroVideo from "./HeroVideo";
import NavBar from "../NavBar/NavBar"

function Hero() {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <HeroVideo />
      </section>
    </>
  );
}

export default Hero;
