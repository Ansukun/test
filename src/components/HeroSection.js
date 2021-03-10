import React from "react";
import BgVideo from "../videos/video-2.mp4"
import { Button } from "@material-ui/core";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video autoPlay loop muted>
        <source src={BgVideo} type='video/mp4' />
      </video>
      <h1> NEXTSTACKS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button style={{margin:15}}variant="contained">GET STARTED</Button>
        <Button  variant="contained" onClick={console.log("hey")}>
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;