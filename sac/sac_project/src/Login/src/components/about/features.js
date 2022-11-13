import React, { Component } from "react";
import "./features.css";
import img1 from "./ing2rec.png";
import img2 from "./img2rec.png";
import img3 from "./cuisine.jpg";

function features(){
  return (
    <div className="background">
      <div className="center">
        <h1 className="feature-head">Features</h1>
        <hr className="fancy-line"/>
      </div>
      <div className="row center" >
          <img className="img" src={img1} alt="img"/>
          <h3>Ingredients to Recipe</h3>
          <p>Do you have limited ingredients, and don't know what to cook?</p>
      </div>
    </div>
  );
  }

export default features;
