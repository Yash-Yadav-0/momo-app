import React from "react";
import "../Home.css";
import thumbsUp from "../homepageImage/thumbsUp.png";

const HomeSecond = () => {
  return (
    <div className="home_about_us">
      <div className="about_us_image">
        <img src={thumbsUp} alt="thumbsUp" />
      </div>
      <div className="about_us_content">
        <h3 className="big-text-two">
          Why Costomer <span style={{ color: "var(--primary)" }}>Love Us</span>
        </h3>
        <p className="neutral-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem id,
          fugit hic tempore nemo fuga temporibus velit voluptas obcaecati
          sapiente iure inventore, doloremque, illum asperiores recusandae rem
          eaque mollitia? Minus.
        </p>
        <button className="home-content-button">Explore Our Story</button>
      </div>
    </div>
  );
};

export default HomeSecond;
