import React from "react";
import "../App.css";

function About() {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>About</h2>
      <br />
      <a href="https://ko-fi.com/I3I51NB3J" target="_blank">
        <img
          height="36"
          src="https://cdn.ko-fi.com/cdn/kofi1.png?v=2"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
      <br />
      <br />
      <div
        style={{
          padding: "20px",
          backgroundColor: "grey",
          color: "white",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <h4>Who built this website?</h4>
        <div style={{ fontSize: "20px" }}>
          This site is created by Hong Ly. A software engineer and content
          creator.
        </div>
        <br />
        <h4>How to connect?</h4>
        <div style={{ fontSize: "20px" }}>
          You can connect me via linkedIn{" "}
          <a href="https://www.linkedin.com/in/hong-ly/" target="_blank">
            here
          </a>
          .
        </div>
        <br />
        <h4>Wonder if I have a YouTube channel?</h4>
        <div style={{ fontSize: "20px" }}>
          Click{" "}
          <a
            href="https://www.youtube.com/channel/UCjJHir6dFiHSOe5EayRoSMw"
            target="_blank"
          >
            here
          </a>{" "}
          will redirect you to my YouTube.
        </div>
      </div>
      <br />
    </div>
  );
}

export default About;
