import React from "react";
import "./hero.css";
import arrow_icon from "../assets/arrow.png";
import hero_webp from "../assets/hero_webp.webp";
const Hero = () => {
  return (
    <div className="container">
      <div className="hero ">
        <div className="hero-left container">
          <h1>
            Best Fashion <br /> Collection
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quasi voluptatibus obcaecati quis sequi reprehenderit{" "}
          </p>
          <div>
            <button className="hero-latest-btn">
              explore shop Collection
              <img src={arrow_icon} alt="" />
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_webp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
