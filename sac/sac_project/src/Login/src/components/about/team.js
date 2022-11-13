import React, { Component } from "react";
import "./team.css";
import img1 from "./developers/generic_avatar.jpeg";
import img2 from "./developers/generic_avatar.jpeg";
import img3 from "./developers/generic_avatar.jpeg";

function team(){
  return (
    <div className="background-2">
      <div className="center">
        <h1 className="feature-head">Meet Our Team</h1>
        <hr className="fancy-line"/>
      </div>
      <div className="row center col-xs-12 col-sm-3  col-lg-4">
          <img className="developer" src={img1} alt="img"/>
          <h3>Mihai Catalin</h3>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <img className="developer" src={img2} alt="img"/>
          <h3>Popescu Lucian</h3>
      </div>
      <div className="row center col-xs-12 col-sm-6 col-md-6 col-lg-4">
          <img className="developer" src={img3} alt="img"/>
          <h3>Rosu Razvan</h3>
      </div>
    </div>
  );
  }

export default team;
