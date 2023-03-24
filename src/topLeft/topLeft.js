import React from "react";
import "./topLeft.css";
function Topleft() {
  return (
    <div>
      <div className="left" style={{ paddingLeft: "6%", paddingTop: "2%" }}>
        <h1>An inspiring design delivered to your inbox every morning</h1>
        <p>
          Our team scouts the internet for the best designs, illustrations and
          art and delivers a truly inspiring one every day to your inbox
        </p>

        <h5>Show me how it looks</h5>
        <div className="register">
          <input
            type="text"
            style={{
              borderWidth: "4px",
              borderColor: "black",
              borderRadius: "8px",
            }}
            placeholder="your email address"
          />

          <button
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
            }}
          >
            Register Now
          </button>
        </div>

        <div className="span" style={{ color: "white" }}>
          <h6>Free - No Spam - No Data Sharing</h6>
        </div>
      </div>
    </div>
  );
}
export default Topleft;
