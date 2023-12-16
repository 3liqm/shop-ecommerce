import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="container">
      <div className="descriptionbox">
        <div className="descriptionbox-navegator">
          <div className="nav-box">Description</div>
          <div className="nav-box-fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
          <p>
            Welcome to <span>SHOPPER</span>, your one-stop destination for the
            latest in fashion trends and style. Explore a world of elegance,
            innovation, and self-expression as you browse through our extensive
            collection of clothing, accessories, and more. From chic everyday
            wear to stunning evening attire, we curate a diverse range of
            fashion options to cater to every taste. Stay ahead in the fashion
            game with us. Start shopping and redefine your style today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
