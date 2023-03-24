import React from "react";
import "./bottomRight.css";
import insta from "./InstagramLogo.png";
import linkedin from "./LinkedinLogo.png";

export default function Bottomright() {
  return (
    <>
      <div className="rightt">
        <h6>Dweep.io</h6>
        <h6>Made with love in India</h6>
        <img src={insta} />
        <img src={linkedin} />
        <br />
        <br />
        <h6>hello@dweep.io</h6>
      </div>
    </>
  );
}
